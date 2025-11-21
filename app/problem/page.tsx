// // "use client";
// // import React, { useEffect, useState } from "react";
// // import Link from "next/link";

// // type Problem = {
// //   _id: string;
// //   title: string;
// //   slug: string;
// //   difficulty: "Easy" | "Medium" | "Hard";
// //   category: string;
// //   patterns?: string[];
// //   language?: string;
// // };

// // const difficultyColors: Record<string, string> = {
// //   Easy: "bg-green-100 text-green-700",
// //   Medium: "bg-yellow-100 text-yellow-700",
// //   Hard: "bg-red-100 text-red-700",
// // };

// // const ProblemsPage = () => {
// //   const [problems, setProblems] = useState<Problem[]>([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState<string | null>(null);

// //   useEffect(() => {
// //     async function getProblems() {
// //       try {
// //         const res = await fetch("http://localhost:3000/api/problems", {
// //           cache: "no-store",
// //         });

// //         if (!res.ok) {
// //           throw new Error("Failed to fetch problems");
// //         }

// //         const del = await res.json();
// //         setProblems(del.data || []);
// //       } catch (err: any) {
// //         console.error("Error fetching problems:", err);
// //         setError(err.message || "Something went wrong");
// //       } finally {
// //         setLoading(false);
// //       }
// //     }

// //     getProblems();
// //   }, []);

// //   return (
// //     <div className="min-h-screen bg-slate-950 text-slate-100">
// //       <div className="max-w-5xl mx-auto px-4 py-8">
// //         {/* Header */}
// //         <header className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
// //           <div>
// //             <h1 className="text-2xl sm:text-3xl font-semibold">
// //               Coding Problems
// //             </h1>
// //             <p className="text-sm text-slate-400">
// //               Practice DSA questions and track your progress.
// //             </p>
// //           </div>

// //           <div className="text-sm text-slate-400">
// //             {problems.length > 0 && (
// //               <span>{problems.length} problems available</span>
// //             )}
// //           </div>
// //         </header>

// //         {/* Loading / Error states */}
// //         {loading && (
// //           <div className="mt-10 text-center text-slate-400">Loading...</div>
// //         )}

// //         {error && !loading && (
// //           <div className="mt-6 rounded-lg bg-red-900/40 border border-red-700 px-4 py-3 text-sm text-red-200">
// //             {error}
// //           </div>
// //         )}

// //         {/* Problems list */}
// //         {!loading && !error && problems.length === 0 && (
// //           <div className="mt-10 text-center text-slate-400">
// //             No problems found. Add some in your database.
// //           </div>
// //         )}

// //         {!loading && !error && problems.length > 0 && (
// //           <div className="mt-4 space-y-3">
// //             {problems.map((problem) => (
// //               <div
// //                 key={problem._id || problem.slug}
// //                 className="rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-3 hover:border-slate-600 transition"
// //               >
// //                 {/* First row: title + difficulty */}
// //                 <div className="flex items-start justify-between gap-3">
// //                   <div>
// //                     <h2 className="text-base sm:text-lg font-medium">
// //                       {problem.title}
// //                     </h2>
// //                     <p className="text-xs text-slate-500 mt-0.5">
// //                       /problems/{problem.slug}
// //                     </p>
// //                   </div>

// //                   <div className="flex flex-col items-end gap-1">
// //                     {/* Difficulty badge */}
// //                     <span
// //                       className={
// //                         "text-xs font-semibold px-2 py-0.5 rounded-full " +
// //                         (difficultyColors[problem.difficulty] ||
// //                           "bg-slate-700 text-slate-100")
// //                       }
// //                     >
// //                       {problem.difficulty}
// //                     </span>
// //                     {/* Language */}
// //                     {problem.language && (
// //                       <span className="text-[11px] text-slate-400">
// //                         {problem.language.toUpperCase()}
// //                       </span>
// //                     )}
// //                   </div>
// //                 </div>

// //                 {/* Second row: category + patterns */}
// //                 <div className="mt-2 flex flex-wrap items-center gap-2 text-xs">
// //                   <span className="rounded-full bg-slate-800/80 px-2 py-0.5 text-sky-300">
// //                     {problem.category}
// //                   </span>

// //                   {problem.patterns?.slice(0, 3).map((p) => (
// //                     <span
// //                       key={p}
// //                       className="rounded-full bg-slate-800/60 px-2 py-0.5 text-slate-300"
// //                     >
// //                       {p}
// //                     </span>
// //                   ))}

// //                   {problem.patterns && problem.patterns.length > 3 && (
// //                     <span className="text-slate-500">
// //                       +{problem.patterns.length - 3} more
// //                     </span>
// //                   )}
// //                 </div>

// //                 {/* Third row: placeholder for actions (View / Solve) */}
// //                 <div className="mt-3 flex justify-end">
// //                   <Link href={{
// //                     pathname:'/compiler',
// //                     query:{type:problem.slug}
// //                   }}>
// //                   <button
// //                     className="text-xs sm:text-sm rounded-full border border-slate-600 px-3 py-1 hover:bg-slate-800"
                   
// //                   >
// //                     View problem
// //                   </button>
// //                   </Link>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProblemsPage;


























// "use client";
// import React, { useEffect, useState } from "react";
// import Link from "next/link";

// type Problem = {
//   _id: string;
//   title: string;
//   slug: string;
//   difficulty: "Easy" | "Medium" | "Hard";
//   category: string;
//   patterns?: string[];
//   language?: string;
// };

// const difficultyColors: Record<string, string> = {
//   Easy: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
//   Medium: "bg-amber-500/10 text-amber-400 border-amber-500/20",
//   Hard: "bg-rose-500/10 text-rose-400 border-rose-500/20",
// };

// const ProblemsPage = () => {
//   const [problems, setProblems] = useState<Problem[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [filterDifficulty, setFilterDifficulty] = useState<string>("All");
//   const [filterCategory, setFilterCategory] = useState<string>("All");

//   useEffect(() => {
//     async function getProblems() {
//       try {
//         const res = await fetch("http://localhost:3000/api/problems", {
//           cache: "no-store",
//         });

//         if (!res.ok) {
//           throw new Error("Failed to fetch problems");
//         }

//         const del = await res.json();
//         setProblems(del.data || []);
//       } catch (err: any) {
//         console.error("Error fetching problems:", err);
//         setError(err.message || "Something went wrong");
//       } finally {
//         setLoading(false);
//       }
//     }

//     getProblems();
//   }, []);

//   const filteredProblems = problems.filter((problem) => {
//     const matchesSearch = problem.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       problem.category.toLowerCase().includes(searchQuery.toLowerCase());
//     const matchesDifficulty = filterDifficulty === "All" || problem.difficulty === filterDifficulty;
//     const matchesCategory = filterCategory === "All" || problem.category === filterCategory;
//     return matchesSearch && matchesDifficulty && matchesCategory;
//   });

//   const categories = ["All", ...Array.from(new Set(problems.map(p => p.category)))];
//   const difficulties = ["All", "Easy", "Medium", "Hard"];

//   const stats = {
//     total: problems.length,
//     easy: problems.filter(p => p.difficulty === "Easy").length,
//     medium: problems.filter(p => p.difficulty === "Medium").length,
//     hard: problems.filter(p => p.difficulty === "Hard").length,
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
//       {/* Animated background effect */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-0 -left-4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-0 -right-4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
//       </div>

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
//         {/* Header Section */}
//         <div className="mb-8 sm:mb-12">
//           <div className="flex flex-col gap-2 mb-6">
//             <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
//               Coding Problems
//             </h1>
//             <p className="text-slate-400 text-lg">
//               Master DSA concepts and elevate your coding skills
//             </p>
//           </div>

//           {/* Stats Cards */}
//           <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8">
//             <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-4 hover:border-slate-700/50 transition-all duration-300">
//               <div className="text-2xl sm:text-3xl font-bold text-slate-100">{stats.total}</div>
//               <div className="text-xs sm:text-sm text-slate-400 mt-1">Total Problems</div>
//             </div>
//             <div className="bg-emerald-500/5 backdrop-blur-sm border border-emerald-500/20 rounded-2xl p-4 hover:border-emerald-500/30 transition-all duration-300">
//               <div className="text-2xl sm:text-3xl font-bold text-emerald-400">{stats.easy}</div>
//               <div className="text-xs sm:text-sm text-emerald-400/70 mt-1">Easy</div>
//             </div>
//             <div className="bg-amber-500/5 backdrop-blur-sm border border-amber-500/20 rounded-2xl p-4 hover:border-amber-500/30 transition-all duration-300">
//               <div className="text-2xl sm:text-3xl font-bold text-amber-400">{stats.medium}</div>
//               <div className="text-xs sm:text-sm text-amber-400/70 mt-1">Medium</div>
//             </div>
//             <div className="bg-rose-500/5 backdrop-blur-sm border border-rose-500/20 rounded-2xl p-4 hover:border-rose-500/30 transition-all duration-300">
//               <div className="text-2xl sm:text-3xl font-bold text-rose-400">{stats.hard}</div>
//               <div className="text-xs sm:text-sm text-rose-400/70 mt-1">Hard</div>
//             </div>
//           </div>

//           {/* Search and Filters */}
//           <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-4 sm:p-6">
//             <div className="flex flex-col lg:flex-row gap-4">
//               {/* Search */}
//               <div className="flex-1">
//                 <div className="relative">
//                   <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                   </svg>
//                   <input
//                     type="text"
//                     placeholder="Search problems..."
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                     className="w-full bg-slate-800/50 border border-slate-700/50 rounded-xl pl-12 pr-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
//                   />
//                 </div>
//               </div>

//               {/* Filters */}
//               <div className="flex flex-col sm:flex-row gap-3">
//                 <select
//                   value={filterDifficulty}
//                   onChange={(e) => setFilterDifficulty(e.target.value)}
//                   className="bg-slate-800/50 border border-slate-700/50 rounded-xl px-4 py-3 text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all cursor-pointer"
//                 >
//                   {difficulties.map(diff => (
//                     <option key={diff} value={diff}>{diff}</option>
//                   ))}
//                 </select>

//                 <select
//                   value={filterCategory}
//                   onChange={(e) => setFilterCategory(e.target.value)}
//                   className="bg-slate-800/50 border border-slate-700/50 rounded-xl px-4 py-3 text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all cursor-pointer"
//                 >
//                   {categories.map(cat => (
//                     <option key={cat} value={cat}>{cat}</option>
//                   ))}
//                 </select>
//               </div>
//             </div>

//             {(searchQuery || filterDifficulty !== "All" || filterCategory !== "All") && (
//               <div className="mt-4 flex items-center gap-2 text-sm text-slate-400">
//                 <span>Showing {filteredProblems.length} of {problems.length} problems</span>
//                 <button
//                   onClick={() => {
//                     setSearchQuery("");
//                     setFilterDifficulty("All");
//                     setFilterCategory("All");
//                   }}
//                   className="ml-2 text-blue-400 hover:text-blue-300 transition-colors"
//                 >
//                   Clear filters
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Loading State */}
//         {loading && (
//           <div className="flex flex-col items-center justify-center py-20">
//             <div className="w-16 h-16 border-4 border-slate-700 border-t-blue-500 rounded-full animate-spin"></div>
//             <p className="mt-4 text-slate-400">Loading problems...</p>
//           </div>
//         )}

//         {/* Error State */}
//         {error && !loading && (
//           <div className="bg-rose-500/10 border border-rose-500/20 rounded-2xl p-6 backdrop-blur-sm">
//             <div className="flex items-center gap-3">
//               <svg className="w-6 h-6 text-rose-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//               </svg>
//               <div>
//                 <h3 className="text-rose-400 font-semibold">Error loading problems</h3>
//                 <p className="text-rose-400/70 text-sm mt-1">{error}</p>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Empty State */}
//         {!loading && !error && filteredProblems.length === 0 && (
//           <div className="text-center py-20">
//             <svg className="w-20 h-20 mx-auto text-slate-700 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//             </svg>
//             <h3 className="text-xl font-semibold text-slate-300 mb-2">No problems found</h3>
//             <p className="text-slate-500">Try adjusting your filters or search query</p>
//           </div>
//         )}

//         {/* Problems Grid */}
//         {!loading && !error && filteredProblems.length > 0 && (
//           <div className="grid gap-4 sm:gap-5">
//             {filteredProblems.map((problem, index) => (
//               <div
//                 key={problem._id || problem.slug}
//                 className="group bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-5 sm:p-6 hover:border-slate-700/50 hover:bg-slate-900/70 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/5"
//                 style={{
//                   animation: `fadeIn 0.5s ease-out ${index * 0.05}s both`
//                 }}
//               >
//                 <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
//                   {/* Left Content */}
//                   <div className="flex-1 min-w-0">
//                     <div className="flex items-start gap-3 mb-3">
//                       <div className="flex-1 min-w-0">
//                         <h2 className="text-lg sm:text-xl font-semibold text-slate-100 mb-1 group-hover:text-blue-400 transition-colors">
//                           {problem.title}
//                         </h2>
//                         <p className="text-xs text-slate-500 font-mono">
//                           /problems/{problem.slug}
//                         </p>
//                       </div>
//                     </div>

//                     {/* Tags Section */}
//                     <div className="flex flex-wrap items-center gap-2">
//                       <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium">
//                         <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
//                           <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
//                         </svg>
//                         {problem.category}
//                       </span>

//                       {problem.patterns?.slice(0, 3).map((p) => (
//                         <span
//                           key={p}
//                           className="px-3 py-1.5 rounded-lg bg-slate-800/50 border border-slate-700/50 text-slate-300 text-xs font-medium hover:bg-slate-800 transition-colors"
//                         >
//                           {p}
//                         </span>
//                       ))}

//                       {problem.patterns && problem.patterns.length > 3 && (
//                         <span className="text-xs text-slate-500 font-medium">
//                           +{problem.patterns.length - 3} more
//                         </span>
//                       )}
//                     </div>
//                   </div>

//                   {/* Right Content */}
//                   <div className="flex sm:flex-col items-center sm:items-end gap-3 sm:gap-4">
//                     {/* Difficulty Badge */}
//                     <span
//                       className={`inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-semibold border ${
//                         difficultyColors[problem.difficulty] || "bg-slate-700 text-slate-100"
//                       }`}
//                     >
//                       {problem.difficulty}
//                     </span>

//                     {/* Language */}
//                     {problem.language && (
//                       <span className="px-2.5 py-1 rounded-md bg-slate-800/50 border border-slate-700/50 text-[11px] font-medium text-slate-400 uppercase tracking-wider">
//                         {problem.language}
//                       </span>
//                     )}

//                     {/* Action Button */}
//                     <Link
//                       href={{
//                         pathname: "/compiler",
//                         query: { type: problem.slug },
//                       }}
//                     >
//                       <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white text-sm font-medium shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 group/btn">
//                         <span>Solve Now</span>
//                         <svg className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//                         </svg>
//                       </button>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       <style jsx>{`
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ProblemsPage;



















"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

type Problem = {
  _id: string;
  title: string;
  slug: string;
  difficulty: "Easy" | "Medium" | "Hard";
  category: string;
  patterns?: string[];
  language?: string;
};

const difficultyColors: Record<string, string> = {
  Easy: "bg-green-500/10 text-green-500 border-green-500/30",
  Medium: "bg-yellow-500/10 text-yellow-500 border-yellow-500/30",
  Hard: "bg-red-500/10 text-red-500 border-red-500/30",
};

const ProblemsPage = () => {
  const [problems, setProblems] = useState<Problem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterDifficulty, setFilterDifficulty] = useState<string>("All");
  const [filterCategory, setFilterCategory] = useState<string>("All");

  useEffect(() => {
    async function getProblems() {
      try {
        const res = await fetch("http://localhost:3000/api/problems", {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch problems");
        }

        const del = await res.json();
        setProblems(del.data || []);
      } catch (err: any) {
        console.error("Error fetching problems:", err);
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    }

    getProblems();
  }, []);

  const filteredProblems = problems.filter((problem) => {
    const matchesSearch = problem.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      problem.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDifficulty = filterDifficulty === "All" || problem.difficulty === filterDifficulty;
    const matchesCategory = filterCategory === "All" || problem.category === filterCategory;
    return matchesSearch && matchesDifficulty && matchesCategory;
  });

  const categories = ["All", ...Array.from(new Set(problems.map(p => p.category)))];
  const difficulties = ["All", "Easy", "Medium", "Hard"];

  const stats = {
    total: problems.length,
    easy: problems.filter(p => p.difficulty === "Easy").length,
    medium: problems.filter(p => p.difficulty === "Medium").length,
    hard: problems.filter(p => p.difficulty === "Hard").length,
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        
        {/* Premium Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium shadow-lg">
            <span className="text-lg">✨</span>
            <span>Premium Learning Experience</span>
          </div>
        </div>

        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
            Explore Our Problems
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from {problems.length} world-class problems designed to accelerate your career
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
              </svg>
            </div>
            <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-1">{stats.total}</div>
            <div className="text-sm font-medium text-gray-600">Total Problems</div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-1">{stats.easy}</div>
            <div className="text-sm font-medium text-gray-600">Easy</div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-1">{stats.medium}</div>
            <div className="text-sm font-medium text-gray-600">Medium</div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
              </svg>
            </div>
            <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-1">{stats.hard}</div>
            <div className="text-sm font-medium text-gray-600">Hard</div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search problems by title or category..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-12 pr-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-3">
              <select
                value={filterDifficulty}
                onChange={(e) => setFilterDifficulty(e.target.value)}
                className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all cursor-pointer font-medium"
              >
                <option value="All">All Difficulties</option>
                {difficulties.slice(1).map(diff => (
                  <option key={diff} value={diff}>{diff}</option>
                ))}
              </select>

              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all cursor-pointer font-medium"
              >
                <option value="All">All Categories</option>
                {categories.slice(1).map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>

          {(searchQuery || filterDifficulty !== "All" || filterCategory !== "All") && (
            <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
              <span className="font-medium">Showing {filteredProblems.length} of {problems.length} problems</span>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setFilterDifficulty("All");
                  setFilterCategory("All");
                }}
                className="ml-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-16 h-16 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin"></div>
            <p className="mt-4 text-gray-600 font-medium">Loading problems...</p>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6">
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <div>
                <h3 className="text-red-900 font-bold text-lg">Error loading problems</h3>
                <p className="text-red-700 text-sm mt-1">{error}</p>
              </div>
            </div>
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && filteredProblems.length === 0 && (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No problems found</h3>
            <p className="text-gray-600">Try adjusting your filters or search query</p>
          </div>
        )}

        {/* Problems Grid */}
        {!loading && !error && filteredProblems.length > 0 && (
          <div className="grid gap-6">
            {filteredProblems.map((problem) => (
              <div
                key={problem._id || problem.slug}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                <div className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                    {/* Left Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start gap-3 mb-4">
                        <div className="flex-1 min-w-0">
                          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                            {problem.title}
                          </h2>
                          <p className="text-sm text-gray-500 font-mono bg-gray-50 inline-block px-3 py-1 rounded-lg">
                            /problems/{problem.slug}
                          </p>
                        </div>
                      </div>

                      {/* Tags Section */}
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold border border-blue-200">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                          </svg>
                          {problem.category}
                        </span>

                        {problem.patterns?.slice(0, 3).map((p) => (
                          <span
                            key={p}
                            className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-medium hover:bg-gray-200 transition-colors"
                          >
                            {p}
                          </span>
                        ))}

                        {problem.patterns && problem.patterns.length > 3 && (
                          <span className="text-sm text-gray-500 font-medium px-2">
                            +{problem.patterns.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Right Content */}
                    <div className="flex lg:flex-col items-center lg:items-end gap-4">
                      {/* Difficulty Badge */}
                      <span
                        className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-bold border-2 ${
                          difficultyColors[problem.difficulty] || "bg-gray-100 text-gray-700 border-gray-300"
                        }`}
                      >
                        {problem.difficulty}
                      </span>

                      {/* Language */}
                      {problem.language && (
                        <span className="px-3 py-1.5 rounded-lg bg-gray-100 text-gray-700 text-xs font-bold uppercase tracking-wider">
                          {problem.language}
                        </span>
                      )}

                      {/* Action Button */}
                      <Link
                        href={{
                          pathname: "/compiler",
                          query: { type: problem.slug },
                        }}
                      >
                        <button className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300">
                          <span>Solve Problem</span>
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProblemsPage;