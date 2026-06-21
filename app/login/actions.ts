"use server";

import { cookies } from "next/headers";

const VALID_EMAIL = "user@example.com";
const VALID_PASSWORD = "lumen123";

export type LoginActionState = {
  status: "idle" | "error" | "success";
  message: string;
};

export async function login(
  _prevState: LoginActionState,
  formData: FormData
): Promise<LoginActionState> {
  const email = formData.get("email");
  const password = formData.get("password");

  // Temporary artificial delay, just to visually confirm the pending state.
  // Remove this once you've confirmed it works.
  await new Promise((resolve) => setTimeout(resolve, 1500));  

  if (!email || !password) {
    return { status: "error", message: "Please fill in both fields." };
  }

  const isValid = email === VALID_EMAIL && password === VALID_PASSWORD;

  if (!isValid) {
    return { status: "error", message: "Invalid email or password." };
  }

  const cookieStore = await cookies();
  cookieStore.set("auth", "true", {
    httpOnly: true,
    path: "/",
    maxAge: 60 * 60 * 24,
  });

  return { status: "success", message: "Login successful! Redirecting..." };
}