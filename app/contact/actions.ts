"use server";

import { sendContactEmail } from "@/lib/emailService";

export type ContactActionState = {
  status: "idle" | "error" | "success";
  message: string;
};

export async function sendMessage(
  _prevState: ContactActionState,
  formData: FormData
): Promise<ContactActionState> {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !subject || !message) {
    return { status: "error", message: "Please fill in all fields." };
  }

  try {
    await sendContactEmail({ name, email, subject, message });
    return { status: "success", message: "Message sent! We'll get back to you soon." };
  } catch (error) {
    console.error("Failed to send contact email:", error);
    return {
      status: "error",
      message: "Something went wrong. Please try again later.",
    };
  }
}