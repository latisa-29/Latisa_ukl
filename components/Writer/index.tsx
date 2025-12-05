// components/Writer/index.tsx
"use client";

import { useState } from "react";
import WriterItem from "./WriterItem";
import writersData from "@/data/writers";

type WriterType = {
  id: string;
  name: string;
  avatarUrl: string;
  bio: string;
  followers: number;
  isFollowed?: boolean;
};

export default function WritersList() {
  // initialize with data, add isFollowed flag
  const [writers, setWriters] = useState<WriterType[]>(
    writersData.map((w) => ({ ...w, isFollowed: false }))
  );

  const handleFollow = (id: string) => {
    setWriters((prev) =>
      prev.map((w) => (w.id === id ? { ...w, isFollowed: !w.isFollowed } : w))
    );
  };

  return (
    <div className="w-full px-0 mt-10">
  <h1 className="text-2xl font-bold mb-6">Writers</h1>

  <div className="divide-y bg-white">
    {writers.map((w) => (
      <WriterItem
        key={w.id}
        id={w.id}
        name={w.name}
        avatarUrl={w.avatarUrl}
        bio={w.bio}
        followers={w.followers}
        isFollowed={!!w.isFollowed}
        onFollow={handleFollow}
      />
    ))}
  </div>

  
</div>

  );
}
