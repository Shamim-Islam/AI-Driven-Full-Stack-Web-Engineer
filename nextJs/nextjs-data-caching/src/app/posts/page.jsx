import React from "react";
import PostCard from "../components/PostCard";

// option 1: fetch data in the component
// const PostPromise = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   return res.json();
// };

// option 2
const getPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts"); 
    if(!res.ok) {
        throw new Error("Failed to fetch data");
    }
    return res.json();
}

// option 3:
const getPosts2 = async () => {
 try {
     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
 } catch {
    throw new Error("Failed to fetch data");
 }
};

const PostPage = async () => {
  //option 2
  //   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  //   const data = await res.json();
  //   console.log(data);

  //   const data = await PostPromise();

  const data = await getPosts();

  return (
    <>
      <h1 className="text-3xl font-bold underline">Post s: {data.length}</h1>

      <div className="grid grid-cols-3 gap-4">
        {data.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </>
  );
};

export default PostPage;
