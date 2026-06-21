"use client";

import { useActionState, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { login, type LoginActionState } from "./actions";
import LoginButton from "./LoginButton";

const initialFormState: LoginActionState = {
  status: "idle",
  message: "",
};

export default function LoginForm() {
  const router = useRouter();
  const [state, formAction] = useActionState(login, initialFormState);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (state.status === "error") {
      toast.error(state.message);
    }

    if (state.status === "success") {
      toast.success(state.message);
      const timeout = setTimeout(() => {
        router.push("/dashboard");
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [state, router]);

  return (
    <form action={formAction} className="mt-8 flex flex-col gap-4">
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
        <label htmlFor="password" className="text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <LoginButton />
    </form>
  );
}