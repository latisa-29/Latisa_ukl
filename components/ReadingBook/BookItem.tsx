"use client";

import { useState } from "react";

interface BookItemProps {
  title: string;
  author: string;
  cover: string;
  id: string;
  totalPages: number;
}

export default function BookItem({
  title,
  author,
  cover,
  totalPages,
}: BookItemProps) {
  const [readPages, setReadPages] = useState(0);

  const handleSlide = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReadPages(Number(e.target.value));
  };

  return (
    <div className="flex items-center gap-4 border p-3 rounded-lg shadow-sm bg-white">

      {/* Cover */}
      <img
        src={cover}
        alt={title}
        className="w-12 h-25 object-cover rounded"
      />

      {/* Text */}
      <div className="flex-1">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{author}</p>

        <p className="text-sm mt-1">
          Progress: {readPages}/{totalPages} pages
        </p>

        {/* Slider */}
        <input
          type="range"
          min="0"
          max={totalPages}
          value={readPages}
          onChange={handleSlide}
          className="w-full mt-2"
        />

        {/* Progress bar */}
        <div className="w-full bg-gray-300 h-2 rounded mt-2">
          <div
            className="h-2 bg-green-600 rounded"
            style={{
              width: `${(readPages / totalPages) * 100}%`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
