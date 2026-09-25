"use client";
import React, { useContext } from "react";
import { BooksContext } from "./../context/BooksProvider";

const ListedBooks = () => {
  const { readBooks, wishList } = useContext(BooksContext);
  console.log(readBooks, wishList);

  return (
    <div>
      <h1>Listed Books</h1>
      {readBooks.map((book) => (
        <div key={book.id}>{book.bookName}</div>
      ))}
      {wishList.map((book) => (
        <div key={book.id}>{book.bookName}</div>
      ))}
    </div>
  );
};

export default ListedBooks;
