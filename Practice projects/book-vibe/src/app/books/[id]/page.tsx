import { IBook } from "@/types/books.type";
import Image from "next/image";
import React from "react";
import { Star } from "lucide-react";
import { Calendar } from "lucide-react";
import { FileText } from "lucide-react";
import { BookOpen } from "lucide-react";
import ReadButton from "@/app/components/bookDetails/ReadButton";
import WishListButton from "@/app/components/bookDetails/WishListButton";
interface IBookDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const getBooks = async () => {
  const res = await fetch("http://localhost:3000/booksData.json");
  if (!res.ok) {
    throw new Error("Failed to fetch books data");
  }
  const data = await res.json();
  return data;
};

const BookDetailsPage = async ({ params }: IBookDetailsPageProps) => {
  const { id } = await params;
  const booksData = await getBooks();
  const book = booksData.find(
    (book: IBook) => String(book.bookId) === String(id),
  ) as IBook;

  return (
    <main className="min-h-screen bg-base-200 px-4 py-10 md:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm text-base-content/60">
          Home <span className="mx-2">/</span> Books{" "}
          <span className="mx-2">/</span>
          <span className="text-base-content">{book.bookName}</span>
        </div>

        {/* Main Card */}
        <div className="overflow-hidden rounded-3xl bg-base-100 shadow-xl">
          <div className="grid grid-cols-1 gap-10 p-6 md:p-10 lg:grid-cols-[380px_1fr]">
            {/* ================= IMAGE ================= */}
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-[320px] overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src={book.image}
                  alt={book.bookName}
                  width={320}
                  height={480}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
            </div>

            {/* ================= BOOK INFO ================= */}
            <div className="flex flex-col">
              {/* Category */}
              <div className="mb-4">
                <span className="rounded-full bg-success/10 px-4 py-2 text-sm font-semibold text-success">
                  {book.category}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
                {book.bookName}
              </h1>

              {/* Author */}
              <p className="mt-4 text-lg text-base-content/70">
                by{" "}
                <span className="font-semibold text-base-content">
                  {book.author}
                </span>
              </p>

              {/* Rating */}
              <div className="mt-5 flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 fill-warning text-warning" />
                  <span className="font-bold">{book.rating}</span>
                </div>

                <span className="text-base-content/40">•</span>

                <span className="text-sm text-base-content/60">
                  Highly rated book
                </span>
              </div>

              {/* Description */}
              <div className="mt-8">
                <h2 className="mb-3 text-xl font-bold">About this book</h2>

                <p className="text-base leading-7 text-base-content/70">
                  {book.review}
                </p>
              </div>

              {/* Metadata */}
              <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
                <div className="rounded-xl bg-base-200 p-4">
                  <Calendar className="mb-2 h-5 w-5 text-success" />
                  <p className="text-xs text-base-content/50">Published</p>
                  <p className="mt-1 font-semibold">{book.yearOfPublishing}</p>
                </div>

                <div className="rounded-xl bg-base-200 p-4">
                  <FileText className="mb-2 h-5 w-5 text-success" />
                  <p className="text-xs text-base-content/50">Pages</p>
                  <p className="mt-1 font-semibold">{book.totalPages}</p>
                </div>

                <div className="rounded-xl bg-base-200 p-4">
                  <BookOpen className="mb-2 h-5 w-5 text-success" />
                  <p className="text-xs text-base-content/50">Format</p>
                  <p className="mt-1 font-semibold">Hardcover</p>
                </div>
              </div>

              {/* ================= BUTTONS ================= */}
              <div className="mt-auto flex flex-col gap-3 pt-10 sm:flex-row">
                <ReadButton book={book}></ReadButton>

                <WishListButton book={book}></WishListButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BookDetailsPage;
