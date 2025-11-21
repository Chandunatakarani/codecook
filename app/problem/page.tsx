"use client";
import React, { useEffect, useState } from "react";

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
  Easy: "bg-green-100 text-green-700",
  Medium: "bg-yellow-100 text-yellow-700",
  Hard: "bg-red-100 text-red-700",
};

const ProblemsPage = () => {
  const [problems, setProblems] = useState<Problem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Header */}
        <header className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold">
              Coding Problems
            </h1>
            <p className="text-sm text-slate-400">
              Practice DSA questions and track your progress.
            </p>
          </div>

          <div className="text-sm text-slate-400">
            {problems.length > 0 && (
              <span>{problems.length} problems available</span>
            )}
          </div>
        </header>

        {/* Loading / Error states */}
        {loading && (
          <div className="mt-10 text-center text-slate-400">Loading...</div>
        )}

        {error && !loading && (
          <div className="mt-6 rounded-lg bg-red-900/40 border border-red-700 px-4 py-3 text-sm text-red-200">
            {error}
          </div>
        )}

        {/* Problems list */}
        {!loading && !error && problems.length === 0 && (
          <div className="mt-10 text-center text-slate-400">
            No problems found. Add some in your database.
          </div>
        )}

        {!loading && !error && problems.length > 0 && (
          <div className="mt-4 space-y-3">
            {problems.map((problem) => (
              <div
                key={problem._id || problem.slug}
                className="rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-3 hover:border-slate-600 transition"
              >
                {/* First row: title + difficulty */}
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h2 className="text-base sm:text-lg font-medium">
                      {problem.title}
                    </h2>
                    <p className="text-xs text-slate-500 mt-0.5">
                      /problems/{problem.slug}
                    </p>
                  </div>

                  <div className="flex flex-col items-end gap-1">
                    {/* Difficulty badge */}
                    <span
                      className={
                        "text-xs font-semibold px-2 py-0.5 rounded-full " +
                        (difficultyColors[problem.difficulty] ||
                          "bg-slate-700 text-slate-100")
                      }
                    >
                      {problem.difficulty}
                    </span>
                    {/* Language */}
                    {problem.language && (
                      <span className="text-[11px] text-slate-400">
                        {problem.language.toUpperCase()}
                      </span>
                    )}
                  </div>
                </div>

                {/* Second row: category + patterns */}
                <div className="mt-2 flex flex-wrap items-center gap-2 text-xs">
                  <span className="rounded-full bg-slate-800/80 px-2 py-0.5 text-sky-300">
                    {problem.category}
                  </span>

                  {problem.patterns?.slice(0, 3).map((p) => (
                    <span
                      key={p}
                      className="rounded-full bg-slate-800/60 px-2 py-0.5 text-slate-300"
                    >
                      {p}
                    </span>
                  ))}

                  {problem.patterns && problem.patterns.length > 3 && (
                    <span className="text-slate-500">
                      +{problem.patterns.length - 3} more
                    </span>
                  )}
                </div>

                {/* Third row: placeholder for actions (View / Solve) */}
                <div className="mt-3 flex justify-end">
                  <button
                    className="text-xs sm:text-sm rounded-full border border-slate-600 px-3 py-1 hover:bg-slate-800"
                    // later: onClick={() => router.push(`/problems/${problem.slug}`)}
                  >
                    View problem
                  </button>
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
