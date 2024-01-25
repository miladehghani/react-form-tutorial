import Link from "next/link";

// Pure HTML
// Simple Form With React Hook Form
// Simple Form with React Hook Form Context
// Nested Form with React Hook Form Context

export default function Home() {
  return (
    <main className="flex flex-col gap-5 p-8">
      <Link href="simple/pure-html-form">Pure Html Form</Link>
      <Link href="simple/react-hook-form">React Hook Form</Link>
    </main>
  );
}
