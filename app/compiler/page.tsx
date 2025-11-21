import React from "react";
import CodeRunner from "@/components/practise/CodeRunner";

type CoursesPageProps = {
  searchParams: Promise<{ type?: string }>;
};

type Problem = {
  _id: string;
  title: string;
  description: string;
  difficulty: string;
  category: string;
  inputFormat: string;
  outputFormat: string;
  testCases: {
    input: string;
    expectedOutput: string;
    explanation: string;
    isSample: boolean;
  }[];
};

async function GetCourses(type?: string): Promise<Problem[]> {
  const url = type
    ? `http://localhost:3000/api/problems?type=${type}`
    : `http://localhost:3000/api/problems`;

  const res = await fetch(url, {
    cache: "no-store",
  });

  const json = await res.json();
  return json.data; // array of problems
}

async function ComProblem(props: CoursesPageProps) {
  const { type } = await props.searchParams;
  console.log("this is the type", type);

  const courses = await GetCourses(type);
  const problem = courses[0]; // just show first problem for now

  return (
    <div className="flex gap-4 p-4 h-[calc(100vh-64px)]">
      {/* LEFT: Problem details */}
      <div className="w-1/2 border rounded-lg p-3 overflow-auto">
        <h1 className="text-lg font-semibold mb-1">{problem.title}</h1>
        <p className="text-xs text-gray-500 mb-2">
          Difficulty: {problem.difficulty} • Category: {problem.category}
        </p>

        <h2 className="text-sm font-semibold mt-2">Description</h2>
        <p className="text-sm whitespace-pre-wrap">{problem.description}</p>

        <h2 className="text-sm font-semibold mt-3">Input Format</h2>
        <pre className="text-xs whitespace-pre-wrap bg-gray-100 p-2 rounded">
          {problem.inputFormat}
        </pre>

        <h2 className="text-sm font-semibold mt-3">Output Format</h2>
        <pre className="text-xs whitespace-pre-wrap bg-gray-100 p-2 rounded">
          {problem.outputFormat}
        </pre>

        <h2 className="text-sm font-semibold mt-3">Sample Test Cases</h2>
        <div className="mt-1 space-y-2">
          {problem.testCases
            .filter((t) => t.isSample)
            .map((tc, idx) => (
              <div
                key={idx}
                className="border rounded p-2 text-xs bg-gray-50"
              >
                <p className="font-semibold mb-1">Example {idx + 1}</p>
                <p className="font-semibold">Input:</p>
                <pre className="bg-white p-1 rounded mb-1 whitespace-pre-wrap">
                  {tc.input}
                </pre>
                <p className="font-semibold">Expected Output:</p>
                <pre className="bg-white p-1 rounded mb-1 whitespace-pre-wrap">
                  {tc.expectedOutput}
                </pre>
                {tc.explanation && (
                  <>
                    <p className="font-semibold">Explanation:</p>
                    <p>{tc.explanation}</p>
                  </>
                )}
              </div>
            ))}
        </div>
      </div>

      {/* RIGHT: Compiler */}
      <div className="w-1/2">
        <CodeRunner />
      </div>
    </div>
  );
}

export default ComProblem;
