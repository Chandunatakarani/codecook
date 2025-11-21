// app/api/run-code/route.ts
import { NextResponse } from "next/server";

// Judge0 endpoint
const JUDGE0_URL =
  "https://ce.judge0.com/submissions/?base64_encoded=false&wait=true";

const LANGUAGE_MAP: Record<string, number> = {
  javascript: 63,
  python: 71,
  cpp: 54,
  c: 50,
  java: 62,
};

// 🚫 NO default export here
// ✅ Export a named POST function (App Router style)
export async function POST(req: Request) {
  try {
    const { language, sourceCode, stdin = "" } = await req.json();

    if (!language || !sourceCode) {
      return NextResponse.json(
        { error: "language and sourceCode are required" },
        { status: 400 }
      );
    }

    const languageId = LANGUAGE_MAP[language];
    if (!languageId) {
      return NextResponse.json(
        { error: "Unsupported language" },
        { status: 400 }
      );
    }

    const judge0Res = await fetch(JUDGE0_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // "X-Auth-Token": process.env.JUDGE0_API_KEY as string, // if needed
      },
      body: JSON.stringify({
        source_code: sourceCode,
        language_id: languageId,
        stdin,
      }),
    });

    const text = await judge0Res.text(); // read raw

    if (!judge0Res.ok) {
      console.error("Judge0 error:", judge0Res.status, text);
      return NextResponse.json(
        {
          error: "Judge0 error",
          status: judge0Res.status,
          details: text,
        },
        { status: 500 }
      );
    }

    let data: any;
    try {
      data = JSON.parse(text);
    } catch (e) {
      console.error("Failed to parse Judge0 JSON:", e, text);
      return NextResponse.json(
        {
          error: "Invalid JSON from Judge0",
          raw: text,
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        stdout: data.stdout,
        stderr: data.stderr,
        status: data.status,
        time: data.time,
        memory: data.memory,
      },
      { status: 200 }
    );
  } catch (err: any) {
    console.error("run-code error", err);
    return NextResponse.json(
      {
        error: "Failed to run code",
        details: err?.message || String(err),
      },
      { status: 500 }
    );
  }
}
