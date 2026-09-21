import React from "react";

const PostCard = ({ post }) => {
  const { title, body } = post;
  return (
    <div className="card card-border bg-base-100 ">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{body}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Show Details</button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
