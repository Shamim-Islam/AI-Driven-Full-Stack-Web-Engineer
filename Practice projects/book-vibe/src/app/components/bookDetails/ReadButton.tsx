"use client";
import { BooksContext } from "@/app/context/BooksProvider";
import { IBook } from "@/types/books.type";
import { BookOpen } from "lucide-react";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const ReadButton = ({ book }: { book: IBook }) => {
  const { readBooks, setReadBooks } = useContext(BooksContext);

  const handleReadBook = () => {
    console.log("read btn triggered", book);
    setReadBooks([...readBooks, book]);
    toast.success(`you have read ${book.bookName}`);
  };

  return (
    <button
      className="btn btn-success flex-1 gap-2 rounded-xl text-base font-semibold"
      onClick={() => handleReadBook()}
    >
      <BookOpen className="h-5 w-5" />
      Read
    </button>
  );
};

export default ReadButton;
