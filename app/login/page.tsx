import LoginForm from "./LoginForm";
import Image from "next/image";

export default function LoginPage() {
  return (
    <section className="mx-auto flex max-w-md flex-col px-7 p-14 bg-[#6aa2ca] mt-16 rounded-2xl">
      <img src="/images/lumen_books_logo_v2c.png" alt="" className="w-[250px] flex text-center"/>
      <h1 className="text-2xl font-bold text-white">Login</h1>
      <p className="mt-2 text-sm text-white">
        Sign in to manage your book listings.
      </p>

      <LoginForm />
    </section>
  );
}