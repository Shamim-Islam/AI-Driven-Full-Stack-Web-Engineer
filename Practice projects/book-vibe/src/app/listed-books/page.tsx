"use client";
import React, { useContext } from "react";
import { BooksContext } from "./../context/BooksProvider";
import BookCard from "../components/homepage/BookCard";

const ListedBooks = () => {
  const { readBooks, wishList } = useContext(BooksContext);
  console.log(readBooks, wishList);

  return (
    <div className="container mx-auto py-[20px]">
      <h1>Listed Books</h1>
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-lift">
        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Read Books"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          {readBooks.map([])}
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="Wishlist Books"
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          Tab content 2
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
