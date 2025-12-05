export interface Writer {
  id: string;
  name: string;
  avatarUrl: string;
  bio: string;
  followers: number;
}

export const writers: Writer[] = [
  {
    id: "w1",
    name: "Jane Austen",
    avatarUrl: "https://randomuser.me/api/portraits/women/68.jpg",
    bio: "English novelist known for Pride and Prejudice.",
    followers: 10500,
  },
  {
    id: "w2",
    name: "Mark Twain",
    avatarUrl: "https://randomuser.me/api/portraits/men/32.jpg",
    bio: "American writer known for The Adventures of Tom Sawyer.",
    followers: 8200,
  },
  {
    id: "w3",
    name: "J.K. Rowling",
    avatarUrl: "https://randomuser.me/api/portraits/women/12.jpg",
    bio: "Author of Harry Potter series.",
    followers: 12700,
  },
];

export default writers;
