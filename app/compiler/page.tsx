// import React from "react";
// import CodeRunner from "@/components/practise/CodeRunner";

// type CoursesPageProps = {
//   searchParams: Promise<{ type?: string }>;
// };

// type Problem = {
//   _id: string;
//   title: string;
//   description: string;
//   difficulty: string;
//   category: string;
//   inputFormat: string;
//   outputFormat: string;
//   testCases: {
//     input: string;
//     expectedOutput: string;
//     explanation: string;
//     isSample: boolean;
//   }[];
// };

// async function GetCourses(type?: string): Promise<Problem[]> {
//   const url = type
//     ? `http://localhost:3000/api/problems?type=${type}`
//     : `http://localhost:3000/api/problems`;

//   const res = await fetch(url, {
//     cache: "no-store",
//   });

//   const json = await res.json();
//   return json.data; // array of problems
// }

// async function ComProblem(props: CoursesPageProps) {
//   const { type } = await props.searchParams;
//   console.log("this is the type", type);

//   const courses = await GetCourses(type);
//   const problem = courses[0]; // just show first problem for now

//   return (
//     <div className="flex gap-4 p-4 h-[calc(100vh-64px)]">
//       {/* LEFT: Problem details */}
//       <div className="w-1/2 border rounded-lg p-3 overflow-auto">
//         <h1 className="text-lg font-semibold mb-1">{problem.title}</h1>
//         <p className="text-xs text-gray-500 mb-2">
//           Difficulty: {problem.difficulty} • Category: {problem.category}
//         </p>

//         <h2 className="text-sm font-semibold mt-2">Description</h2>
//         <p className="text-sm whitespace-pre-wrap">{problem.description}</p>

//         <h2 className="text-sm font-semibold mt-3">Input Format</h2>
//         <pre className="text-xs whitespace-pre-wrap bg-gray-100 p-2 rounded">
//           {problem.inputFormat}
//         </pre>

//         <h2 className="text-sm font-semibold mt-3">Output Format</h2>
//         <pre className="text-xs whitespace-pre-wrap bg-gray-100 p-2 rounded">
//           {problem.outputFormat}
//         </pre>

//         <h2 className="text-sm font-semibold mt-3">Sample Test Cases</h2>
//         <div className="mt-1 space-y-2">
//           {problem.testCases
//             .filter((t) => t.isSample)
//             .map((tc, idx) => (
//               <div
//                 key={idx}
//                 className="border rounded p-2 text-xs bg-gray-50"
//               >
//                 <p className="font-semibold mb-1">Example {idx + 1}</p>
//                 <p className="font-semibold">Input:</p>
//                 <pre className="bg-white p-1 rounded mb-1 whitespace-pre-wrap">
//                   {tc.input}
//                 </pre>
//                 <p className="font-semibold">Expected Output:</p>
//                 <pre className="bg-white p-1 rounded mb-1 whitespace-pre-wrap">
//                   {tc.expectedOutput}
//                 </pre>
//                 {tc.explanation && (
//                   <>
//                     <p className="font-semibold">Explanation:</p>
//                     <p>{tc.explanation}</p>
//                   </>
//                 )}
//               </div>
//             ))}
//         </div>
//       </div>

//       {/* RIGHT: Compiler */}
//       <div className="w-1/2">
//         <CodeRunner />
//       </div>
//     </div>
//   );
// }

// export default ComProblem;
















import React from "react";
import CodeRunner from "@/components/practise/CodeRunner";
import { 
  Code2, 
  Zap, 
  Award, 
  FileText, 
  ArrowRight, 
  CheckCircle2,
  Play,
  Sparkles
} from "lucide-react";

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
  return json.data;
}

async function ComProblem(props: CoursesPageProps) {
  const { type } = await props.searchParams;
  const courses = await GetCourses(type);
  const problem = courses[0];

  // Difficulty color mapping
  const difficultyConfig: Record<string, { bg: string; text: string; border: string }> = {
    Easy: { bg: "bg-emerald-100", text: "text-emerald-700", border: "border-emerald-300" },
    Medium: { bg: "bg-orange-100", text: "text-orange-700", border: "border-orange-300" },
    Hard: { bg: "bg-red-100", text: "text-red-700", border: "border-red-300" },
  };

  const config = difficultyConfig[problem.difficulty] || difficultyConfig.Medium;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Top Header Bar */}
      <div className="bg-white border-b border-slate-200 shadow-sm">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg">
                  <Code2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-black text-slate-900">Problem Solver</h1>
                  <p className="text-xs text-slate-600 font-medium">Code, Test, Succeed</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <button className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition-all duration-300 flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Solutions
              </button>
              <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold text-sm transition-all duration-300 flex items-center gap-2 shadow-lg">
                <CheckCircle2 className="w-4 h-4" />
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-6 p-6 h-[calc(100vh-100px)]">
        {/* LEFT: Problem Details */}
        <div className="w-1/2 bg-white rounded-3xl shadow-xl border-2 border-slate-100 overflow-hidden flex flex-col">
          {/* Problem Header */}
          <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 px-8 py-6 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-32 translate-x-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full translate-y-24 -translate-x-24"></div>
            </div>
            
            <div className="relative">
              <div className="flex items-start justify-between mb-3">
                <h1 className="text-3xl font-black text-white leading-tight flex-1 pr-4">
                  {problem.title}
                </h1>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30">
                  <Sparkles className="w-4 h-4 text-yellow-300 fill-yellow-300" />
                  <span className="text-sm font-bold text-white">Premium</span>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <span className={`px-4 py-1.5 rounded-full ${config.bg} ${config.text} text-sm font-bold border ${config.border}`}>
                  {problem.difficulty}
                </span>
                <span className="px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-sm font-bold border border-white/30">
                  {problem.category}
                </span>
              </div>
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-auto px-8 py-6">
            {/* Description Section */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                  <FileText className="w-4 h-4 text-white" />
                </div>
                <h2 className="text-lg font-black text-slate-900">Description</h2>
              </div>
              <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-wrap bg-slate-50 p-5 rounded-2xl border border-slate-200">
                {problem.description}
              </p>
            </div>

            {/* Input Format Section */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
                <h2 className="text-lg font-black text-slate-900">Input Format</h2>
              </div>
              <pre className="text-sm whitespace-pre-wrap bg-gradient-to-br from-purple-50 to-blue-50 p-5 rounded-2xl border-2 border-purple-200 text-slate-800 font-mono">
{problem.inputFormat}
              </pre>
            </div>

            {/* Output Format Section */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <h2 className="text-lg font-black text-slate-900">Output Format</h2>
              </div>
              <pre className="text-sm whitespace-pre-wrap bg-gradient-to-br from-emerald-50 to-teal-50 p-5 rounded-2xl border-2 border-emerald-200 text-slate-800 font-mono">
{problem.outputFormat}
              </pre>
            </div>

            {/* Test Cases Section */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                  <Award className="w-4 h-4 text-white" />
                </div>
                <h2 className="text-lg font-black text-slate-900">Sample Test Cases</h2>
              </div>
              
              <div className="space-y-5">
                {problem.testCases
                  .filter((t) => t.isSample)
                  .map((tc, idx) => (
                    <div
                      key={idx}
                      className="border-2 border-slate-200 rounded-2xl p-6 bg-gradient-to-br from-white to-slate-50 shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                          <span className="text-sm font-bold text-white">{idx + 1}</span>
                        </div>
                        <p className="font-black text-slate-900">Example {idx + 1}</p>
                      </div>
                      
                      <div className="space-y-3">
                        <div>
                          <p className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Input:</p>
                          <pre className="bg-slate-900 text-green-400 p-4 rounded-xl text-sm whitespace-pre-wrap font-mono shadow-inner">
{tc.input}
                          </pre>
                        </div>
                        
                        <div>
                          <p className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-2">Expected Output:</p>
                          <pre className="bg-slate-900 text-blue-400 p-4 rounded-xl text-sm whitespace-pre-wrap font-mono shadow-inner">
{tc.expectedOutput}
                          </pre>
                        </div>
                        
                        {tc.explanation && (
                          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
                            <p className="text-xs font-bold text-blue-900 uppercase tracking-wider mb-2">Explanation:</p>
                            <p className="text-sm text-blue-800 leading-relaxed">{tc.explanation}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Code Editor */}
        <div className="w-1/2 bg-white rounded-3xl shadow-xl border-2 border-slate-100 overflow-hidden flex flex-col">
          {/* Editor Header */}
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 px-6 py-4 flex items-center justify-between border-b border-slate-700">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-3 text-sm font-bold text-slate-300">Code Editor</span>
            </div>
            
            <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold text-sm transition-all duration-300 flex items-center gap-2 shadow-lg">
              <Play className="w-4 h-4" />
              Run Code
            </button>
          </div>
          
          {/* Code Editor Component */}
          <div className="flex-1">
            <CodeRunner />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComProblem;