"use client";
import Link from "next/link";
type WriterItemProps = {
  id: string;
  name: string;
  avatarUrl: string;
  bio: string;
  followers: number;
  isFollowed: boolean;
  onFollow: (id: string) => void;
};

const WriterItem = ({
  id,
  name,
  avatarUrl,
  followers,
  bio,
  isFollowed,
  onFollow,
}: WriterItemProps) => {
  return (
    <Link href={`/writer/${id}`}>
  <div className="flex items-center gap-5 p-5 cursor-pointer">
    <img
      src={avatarUrl}
      alt={name}
      className="w-14 h-14 rounded-full object-cover"
    />
    <div>
      <h3 className="font-semibold">{name}</h3>
      <p className="text-sm text-gray-500">{followers.toLocaleString()} followers</p>
    </div>
<div className="ml-[60rem] p-5">
  <button className="bg-amber-200  w-70 h-10 rounded-xl ">Follow</button>
</div>
    

  </div>
</Link>

  );
};

export default WriterItem;
