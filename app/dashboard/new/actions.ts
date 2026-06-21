"use server";

import { revalidatePath } from "next/cache";
import { addBook } from "@/lib/data";

export type AddBookActionState = {
  status: "idle" | "error" | "success";
  message: string;
};

export async function createBook(
  _prevState: AddBookActionState,
  formData: FormData
): Promise<AddBookActionState> {
  const title = formData.get("title") as string;
  const author = formData.get("author") as string;
  const price = formData.get("price") as string;
  const description = formData.get("description") as string;
  const category = formData.get("category") as string;

  if (!title || !author || !price || !description || !category) {
    return { status: "error", message: "Please fill in all fields." };
  }

  const priceNumber = Number(price);
  if (Number.isNaN(priceNumber) || priceNumber <= 0) {
    return { status: "error", message: "Price must be a valid positive number." };
  }

  await addBook({
    title,
    author,
    price: priceNumber,
    description,
    category,
    coverImageUrl: "/images/Cooking Made Easy.png",
    ratingsCount: 0,
  });

  revalidatePath("/books");

  return { status: "success", message: "Book added successfully!" };
}