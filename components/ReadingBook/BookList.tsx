import Image from "next/image";

export default function ReadingCard({ book }: { book: any }) {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-4 items-center gap-4 py-4 border-b">

      {/* Cover */}
      <div className="flex justify-center md:justify-start">
        <Image
          src={book.cover}
          alt={book.title}
          width={70}
          height={90}
          className="rounded-md shadow"
        />
      </div>

      {/* Title */}
      <div className="md:col-span-1 text-center md:text-left font-medium leading-5">
        {book.title}
      </div>

      {/* Author */}
      <div className="text-gray-600 text-center md:text-left">
        {book.author}
      </div>

      {/* Progress */}
      <div className="flex justify-center md:justify-start">
        <div className="flex items-center gap-2 w-full md:w-32">
          <div className="h-2 bg-gray-300 rounded w-full">
            <div
              className={`h-full rounded ${book.progressColor}`}
              style={{ width: book.progressWidth }}
            ></div>
          </div>
        </div>
      </div>

    </div>
  );
}