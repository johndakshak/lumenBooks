import LoginForm from "./LoginForm";

export default function LoginPage() {
  return (
    <section className="mx-auto flex max-w-md flex-col px-6 py-20">
      <h1 className="text-2xl font-bold text-gray-900">Seller Login</h1>
      <p className="mt-2 text-sm text-gray-600">
        Sign in to manage your book listings.
      </p>

      <LoginForm />
    </section>
  );
}