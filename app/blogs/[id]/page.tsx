// app/blogs/[id]/page.tsx
import React from "react";
import Link from "next/link";
import { blogPosts } from "../../../components/practise/Blogs";

type BlogDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function BlogDetailPage(props: BlogDetailPageProps) {
  const { id } = await props.params; // unwrap the promise
  const blogId = Number(id);
  const post = blogPosts.find((p) => p.id === blogId);

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-xl font-semibold mb-2">Blog not found</h1>
        <p className="text-sm text-gray-600">
          The blog you are looking for does not exist.
        </p>

        {/* Back button even on not-found */}
        <Link
          href="/blogs"
          className="inline-flex items-center mt-4 px-3 py-1.5 text-sm border rounded-md hover:bg-gray-100"
        >
          ← Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Back button */}
      <Link
        href="/blogs"
        className="inline-flex items-center mb-4 px-3 py-1.5 text-sm border rounded-md hover:bg-gray-100"
      >
        ← Back to Blogs
      </Link>

      <p className="text-xs text-gray-400 mb-2">
        {post.date} • {post.readTime} • {post.tag}
      </p>

      <h1 className="text-3xl font-semibold mb-4">{post.title}</h1>

      <p className="text-sm text-gray-600 mb-6">{post.summary}</p>

      <div className="prose text-sm whitespace-pre-wrap">
        {post.content}
      </div>
    </div>
  );
}
