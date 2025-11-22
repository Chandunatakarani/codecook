import React from "react";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "How to Start Solving Coding Problems",
    date: "November 20, 2025",
    readTime: "5 min read",
    tag: "Getting Started",
    summary:
      "Learn a simple approach to reading a problem, breaking it down, and writing your first solution with confidence.",
    content: `
When you look at a coding problem for the first time, don't jump into coding immediately.

1. **Read the problem twice** and underline the input, output, and constraints.
2. **Rewrite the problem in your own words.**
3. **Think of small examples** and solve them on paper.
4. **Decide the approach first** (brute force, then optimize).
5. Only then start coding.

This habit alone will reduce a lot of silly mistakes and panic during interviews.
    `,
  },
  {
    id: 2,
    title: "Understanding Time & Space Complexity",
    date: "November 18, 2025",
    readTime: "7 min read",
    tag: "DSA Basics",
    summary:
      "Big O notation explained in an easy way so you can analyze your code without getting stuck in theory.",
    content: `
Time complexity tells you how your algorithm scales when input size grows.

- O(1): constant time
- O(n): linear time
- O(n^2): quadratic time
- O(log n): logarithmic time

Instead of memorizing, compare two solutions:
If one does fewer operations for large n, it has better time complexity.
    `,
  },
  {
    id: 3,
    title: "Roadmap: From Beginner to Job-Ready Developer",
    date: "November 15, 2025",
    readTime: "8 min read",
    tag: "Career",
    summary:
      "A practical roadmap for mastering DSA, core concepts, and real projects to crack developer roles.",
    content: `
A simple roadmap:

1. **Pick one language** (Java, C++, Python, JS).
2. **Learn basics**: syntax, loops, functions, arrays, strings.
3. **Start DSA**: arrays, strings, hashing, two pointers, sliding window, recursion.
4. **Build 2–3 solid projects** (full stack if possible).
5. **Practice interviews**: mock interviews, timed contests, company-specific problems.
    `,
  },
  {
    id: 4,
    title: "Common Mistakes in Coding Interviews",
    date: "November 10, 2025",
    readTime: "6 min read",
    tag: "Interviews",
    summary:
      "From not asking clarifying questions to skipping edge cases, avoid the mistakes that cost you offers.",
    content: `
Some common mistakes:

- Starting to code without clarifying the problem.
- Ignoring edge cases like empty input or large values.
- Not explaining your thought process.
- Staying silent while thinking.

Interviewers judge **how you think**, not just the final answer. Talk through your approach.
    `,
  },
  {
    id: 5,
    title: "How to Practice DSA Effectively",
    date: "November 7, 2025",
    readTime: "9 min read",
    tag: "Practice",
    summary:
      "Stop doing random questions. Learn how to follow topics, track progress, and build real problem-solving skills.",
    content: `
Don't solve random questions every day.

1. Pick one topic (e.g., Arrays).
2. Solve **easy → medium → hard** in that topic.
3. Maintain a **notes file** for patterns you learn.
4. Revisit questions you couldn't solve after a week.

Consistency > random grind.
    `,
  },
  {
    id: 6,
    title: "Choosing the Right Programming Language",
    date: "November 3, 2025",
    readTime: "4 min read",
    tag: "Languages",
    summary:
      "Confused between Java, C++, Python, or JavaScript? Understand how to pick based on your goals.",
    content: `
There is no perfect language. Pick based on your goal:

- **Java/C++**: great for DSA + product-based companies.
- **Python**: easy syntax, good for beginners, ML/AI.
- **JavaScript**: web development, frontend + backend (Node.js).

Pick one and stick with it for at least 6–12 months.
    `,
  },
];

const Blogs: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-semibold mb-1">Blogs</h1>
        <p className="text-sm text-gray-500">
          Articles to help you improve your coding, DSA, and interview skills.
        </p>
      </div>

      {/* Blog list */}
      <div className="space-y-4">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            className="border rounded-lg p-4 hover:shadow-sm transition-shadow"
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700">
                {post.tag}
              </span>
              <span className="text-xs text-gray-400">
                {post.date} • {post.readTime}
              </span>
            </div>

            <h2 className="text-lg font-semibold mt-1 mb-1">
              {post.title}
            </h2>

            <p className="text-sm text-gray-600 mb-2">{post.summary}</p>

            {/* Link to blog detail page */}
            <Link
              href={`/blogs/${post.id}`}
              className="text-sm text-blue-600 hover:underline"
            >
              Read more
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blogs;

// Optional: export the data so detail page can import it
export  { blogPosts };
