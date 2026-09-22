import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure >
        <img src={product.image} alt={product.name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{product.name}</h2>
        <p>{product.description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Show Details</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
