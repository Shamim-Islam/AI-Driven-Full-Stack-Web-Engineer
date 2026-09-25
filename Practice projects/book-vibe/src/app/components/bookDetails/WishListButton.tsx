"use client";
import { BooksContext } from "@/app/context/BooksProvider";
import { IBook } from "@/types/books.type";
import { BookOpen, Heart } from "lucide-react";
import React, { useContext } from "react";
import { toast } from "react-toastify";

const WishListButton = ({ book }: { book: IBook }) => {
  const { wishList, setWishList } = useContext(BooksContext);

  const handleWishList = () => {
    console.log("read btn triggered", book);
    setWishList([...wishList, book]);
    toast.success(`you have wishlist ${book.bookName}`);
  };

  return (
    <button
      className="btn btn-outline btn-success flex-1 gap-2 rounded-xl text-base font-semibold"
      onClick={() => handleWishList()}
    >
      <Heart className="h-5 w-5" />
      Wishlist
    </button>
  );
};

export default WishListButton;
