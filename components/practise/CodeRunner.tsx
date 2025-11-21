"use client";

import { useState } from "react";

const defaultCodes: Record<string, string> = {
  javascript: `// JS Example
function add(a, b) {
  return a + b;
}
console.log(add(2, 3));`,
  python: `# Python Example
def add(a, b):
    return a + b

print(add(2, 3))`,
  cpp: `#include <bits/stdc++.h>
using namespace std;
int main() {
    cout << 2 + 3 << endl;
    return 0;
}`,
  c: `#include <stdio.h>
int main() {
    printf("%d\\n", 2 + 3);
    return 0;
}`,
  java: `public class Main {
    public static void main(String[] args) {
        System.out.println(2 + 3);
    }
}`,
};

export default function CodeRunner() {
  const [language, setLanguage] = useState<keyof typeof defaultCodes>("javascript");
  const [code, setCode] = useState(defaultCodes["javascript"]);
  const [stdin, setStdin] = useState("");
  const [output, setOutput] = useState("");
  const [errorOutput, setErrorOutput] = useState("");
  const [statusText, setStatusText] = useState("");
  const [isRunning, setIsRunning] = useState(false);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value as keyof typeof defaultCodes;
    setLanguage(lang);
    setCode(defaultCodes[lang]);
  };

  const runCode = async () => {
    try {
      setIsRunning(true);
      setOutput("");
      setErrorOutput("");
      setStatusText("Running...");

      const res = await fetch("/api/run-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          language,
          sourceCode: code,
          stdin,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatusText("Error");
        setErrorOutput(data.error || "Unknown error");
        return;
      }

      setOutput(data.stdout || "");
      setErrorOutput(data.stderr || "");
      setStatusText(
        data.status?.description
          ? `${data.status.description} • ${data.time}s • ${data.memory} KB`
          : "Done"
      );
    } catch (err: any) {
      setStatusText("Error");
      setErrorOutput(err.message || "Something went wrong");
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <main className=" w-full min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-50 flex items-center justify-center px-3 py-6">
      <div className="w-full min-h-screen max-w-6xl rounded-2xl border border-slate-800 bg-slate-900/70  backdrop-blur-md p-4 md:p-6 space-y-4">
     
        <div className="flex flex-wrap gap-3 items-center justify-between">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-500 to-cyan-400 text-slate-950 text-lg font-bold">
                C
              </span>
              <span>CodeCook Online Compiler</span>
            </h2>
            <p className="text-xs md:text-sm text-slate-400 mt-1">
              Write, run and test code in multiple languages directly in your browser.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 md:gap-3">
            <div className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-2 py-1.5">
              <span className="text-xs text-slate-400">Language</span>
              <select
                value={language}
                onChange={handleLanguageChange}
                className="bg-transparent text-xs md:text-sm text-slate-100 focus:outline-none"
              >
                <option value="javascript">JavaScript (Node.js)</option>
                <option value="python">Python 3</option>
                <option value="cpp">C++ (GCC)</option>
                <option value="c">C (GCC)</option>
                <option value="java">Java</option>
              </select>
            </div>

            <button
              onClick={runCode}
              disabled={isRunning}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-4 py-1.5 text-xs md:text-sm font-semibold text-slate-950 shadow-lg shadow-blue-500/30 disabled:opacity-60 disabled:cursor-not-allowed transition-transform hover:scale-[1.01]"
            >
              {isRunning ? (
                <>
                  <span className="h-3 w-3 rounded-full border-2 border-slate-900 border-t-transparent animate-spin" />
                  Running…
                </>
              ) : (
                <>
                  <span className="text-xs">▶</span> Run Code
                </>
              )}
            </button>

            <span
              className={`text-[10px] md:text-xs rounded-full px-3 py-1 border ${
                statusText.startsWith("Error")
                  ? "border-red-500/60 text-red-300 bg-red-950/40"
                  : statusText.startsWith("Accepted") ||
                    statusText.startsWith("Done")
                  ? "border-emerald-500/60 text-emerald-300 bg-emerald-950/40"
                  : "border-slate-700 text-slate-300 bg-slate-900/70"
              }`}
            >
              {statusText || "Idle"}
            </span>
          </div>
        </div>

        {/* Main content */}
        <div className=" w-full max-w-6xl grid gap-10 md:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)]">
          {/* Code editor */}
          <div className="flex flex-col rounded-2xl border border-slate-900 bg-slate-950/70 overflow-hidden">
            <div className="flex items-center justify-between border-b border-slate-800 px-3 py-2">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                <span>Editor</span>
              </div>
              <span className="text-[10px] text-slate-1000 uppercase tracking-wide">
                {language.toUpperCase()}
              </span>
            </div>
            <textarea
              className="w-full flex-1 bg-transparent px-3 py-3 text-[11px] md:text-xs font-mono text-slate-100 outline-none resize-none min-h-[260px] md:min-h-[320px]"
              value={code}
              spellCheck={false}
              onChange={(e) => setCode(e.target.value)}
            />
          </div>

          {/* Right side: stdin + output + errors */}
          <div className="flex flex-col gap-3">
            {/* stdin */}
            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 overflow-hidden">
              <div className="flex items-center justify-between border-b border-slate-800 px-3 py-2">
                <span className="text-xs text-slate-300">Input (stdin)</span>
                <span className="text-[10px] text-slate-500">optional</span>
              </div>
              <textarea
                className="w-full bg-transparent px-3 py-2 text-[11px] md:text-xs font-mono text-slate-100 outline-none resize-none min-h-[70px]"
                value={stdin}
                spellCheck={false}
                onChange={(e) => setStdin(e.target.value)}
              />
            </div>

            {/* Output */}
            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 overflow-hidden">
              <div className="flex items-center justify-between border-b border-slate-800 px-3 py-2">
                <span className="text-xs text-emerald-300">Output</span>
                {output && (
                  <span className="text-[10px] text-slate-500">
                    {output.trim().split("\n").length} line
                    {output.trim().split("\n").length > 1 ? "s" : ""}
                  </span>
                )}
              </div>
              <pre className="px-3 py-2 text-[11px] md:text-xs font-mono text-emerald-100 whitespace-pre-wrap min-h-[70px]">
                {output || "—"}
              </pre>
            </div>

            {/* Errors */}
            <div className="rounded-2xl border border-slate-800 bg-slate-950/70 overflow-hidden">
              <div className="flex items-center justify-between border-b border-slate-800 px-3 py-2">
                <span className="text-xs text-red-300">Errors</span>
                {errorOutput && (
                  <span className="text-[10px] text-slate-500">
                    {errorOutput.trim().split("\n").length} line
                    {errorOutput.trim().split("\n").length > 1 ? "s" : ""}
                  </span>
                )}
              </div>
              <pre className="px-3 py-2 text-[11px] md:text-xs font-mono text-red-300 whitespace-pre-wrap min-h-[60px]">
                {errorOutput || "—"}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
