import { Book } from "./types";

const books: Book[] = [
  {
    id: "1",
    slug: "cooking-made-easy",
    title: "Cooking Made Easy",
    author: "Emily Clark",
    price: 9.99,
    description: "Simple and delicious recipes for everyday cooking.",
    coverImageUrl: "/images/Cooking Made Easy.png",
    category: "Cooking",
    createdAt: "2024-01-15T00:00:00.000Z",
    ratingsCount: 128,
  },
  {
    id: "2",
    slug: "mystery-of-the-lost-island",
    title: "Mystery of the Lost Island",
    author: "Jane Smith",
    price: 14.99,
    description: "A gripping mystery novel that keeps you guessing till the end.",
    coverImageUrl: "/images/Shadows of Doubt.png",
    category: "Mystery",
    createdAt: "2024-02-20T00:00:00.000Z",
    ratingsCount: 87,
  },
  {
    id: "3",
    slug: "shadows-of-doubt",
    title: "Shadows of Doubt",
    author: "Emma Watson",
    price: 13.99,
    description: "A detective novel filled with twists and unexpected turns.",
    coverImageUrl: "/images/Taste of Italy.png",
    category: "Mystery",
    createdAt: "2024-03-05T00:00:00.000Z",
    ratingsCount: 54,
  },
  {
    id: "4",
    slug: "taste-of-italy",
    title: "Taste of Italy",
    author: "Gina Rossi",
    price: 15.75,
    description: "Authentic Italian recipes to bring the flavors of Italy home.",
    coverImageUrl: "/images/book-covers/taste-of-italy.jpg",
    category: "Cooking",
    createdAt: "2024-01-30T00:00:00.000Z",
    ratingsCount: 142,
  },
  {
    id: "5",
    slug: "echoes-of-time",
    title: "Echoes of Time",
    author: "Michael Brown",
    price: 17.50,
    description: "A historical tale buried in time, waiting to be uncovered.",
    coverImageUrl: "/images/book-covers/echoes-of-time.jpg",
    category: "Historical",
    createdAt: "2024-04-10T00:00:00.000Z",
    ratingsCount: 39,
  },
];

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getAllBooks(): Promise<Book[]> {
  await delay(500);
  return books;
}

export async function getBestSellers(): Promise<Book[]> {
  await delay(500);
  return books;
}

export async function getBookBySlug(slug: string): Promise<Book | undefined> {
  await delay(500);
  return books.find((book) => book.slug === slug);
}