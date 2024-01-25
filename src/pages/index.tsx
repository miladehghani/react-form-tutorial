import Link from "next/link";

// Pure HTML
// Simple Form With React Hook Form
// Simple Form with React Hook Form Context
// Nested Form with React Hook Form Context

export default function Home() {
  return (
    <main className="flex flex-col gap-5 p-8">
      <Link href="simple/pure-html-form">Simple Form - Html</Link>
      <Link href="simple/react-hook-form">Simple Form - React Hook Form</Link>
      <Link href="simple/react-hook-form-with-context">
        Simple Form - React Hook Form With Context Provider
      </Link>

      <Link href="nested/react-hook-form-with-context">
        Nested Form - React Hook Form With Context Provider
      </Link>
    </main>
  );
}
