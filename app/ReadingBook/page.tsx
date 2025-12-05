"use client";

import BookItem from "@/components/ReadingBook/BookItem";

export default function ReadingBookPage() {
  const books = [
    {
      id: "1",
      title: "Seporsi Mie Ayam Sebelum Besok MTK",
      author: "Brian Khrisma",
      cover: "/ayam.jpg",
      totalPages: 300,
    },
    {
      id: "2",
      title: "Hello",
      author: "Tere Liye",
      cover: "/cantik.jpg",
      totalPages: 250,
    },
    {
      id: "3",
      title: "Di Tanah Lada",
      author: "J.K. Rowling",
      cover: "/lada.jpg",
      totalPages: 500,
    },
    {
      id: "4",
      title: "Laut Bercerita",
      author: "J.K. Rowling",
      cover: "/laut.jpg",
      totalPages: 500, 
    },
  ];

  return (
    <div className="w-full px-4">
      <h1 className="text-2xl font-bold mb-4">Reading Book</h1>

      <div className="flex flex-col gap-4">
        {books.map((book) => (
          <BookItem
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            cover={book.cover}
            totalPages={book.totalPages}
          />
        ))}
      </div>
    </div>
  );
}
