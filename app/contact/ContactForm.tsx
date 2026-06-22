"use client";

import { useActionState, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { sendMessage, type ContactActionState } from "./actions";
import SendMessageButton from "./SendMessageButton";

const initialState: ContactActionState = { status: "idle", message: "" };

export default function ContactForm() {
  const [state, formAction] = useActionState(sendMessage, initialState);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (state.status === "error") {
      toast.error(state.message);
    }
    if (state.status === "success") {
      toast.success(state.message);
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  }, [state]);

  return (
    <form action={formAction} className="mt-8 flex flex-col gap-4">
      <div>
        <label htmlFor="name" className="text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label htmlFor="subject" className="text-sm font-medium text-gray-700">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <SendMessageButton />
    </form>
  );
}