import React from "react";

const blogsData = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    description:
      "Learn the basics of Next.js and how to build fast, modern web applications with React.",
    author: "Shamim Islam",
    category: "Next.js",
    date: "2026-09-10",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
  },
  {
    id: 2,
    title: "Understanding React Components",
    description:
      "A beginner-friendly guide to understanding reusable components and how they work in React.",
    author: "Shamim Islam",
    category: "React",
    date: "2026-09-08",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
  },
  {
    id: 3,
    title: "JavaScript Array Methods You Should Know",
    description:
      "Explore useful JavaScript array methods like map, filter, reduce, find, and forEach.",
    author: "Shamim Islam",
    category: "JavaScript",
    date: "2026-09-05",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479",
  },
  {
    id: 4,
    title: "Why TypeScript Is Important",
    description:
      "Discover how TypeScript improves JavaScript development with static typing and better tooling.",
    author: "Shamim Islam",
    category: "TypeScript",
    date: "2026-09-02",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea",
  },
  {
    id: 5,
    title: "Building Responsive Websites with Tailwind CSS",
    description:
      "Learn how Tailwind CSS can help you quickly create beautiful and responsive user interfaces.",
    author: "Shamim Islam",
    category: "Tailwind CSS",
    date: "2026-08-30",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766",
  },
];

const PostDetailPage = async ({ params }) => {
  const { postId } = await params;
  const post = blogsData.find((post) => post.id === parseInt(postId));

  return (
    <div>
      <h2>Post Detail Page {postId}</h2>
      {post && (
        <div>
          <h3>{post.title}</h3>
          <p>{post.description}</p>
          <p>Author: {post.author}</p>
          <p>Category: {post.category}</p>
        </div>
      )}
    </div>
  );
};

export default PostDetailPage;
