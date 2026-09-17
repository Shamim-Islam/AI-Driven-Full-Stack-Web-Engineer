import Link from "next/link";
import React from "react";

const PostCard = ({ post }) => {
  const { id, title, description } = post;
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        {/* <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        /> */}
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <Link href={`/blogs/${id}`}>
            <button className="btn btn-primary">Show Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
