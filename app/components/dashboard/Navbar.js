import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <Link href="/">TaskFlow</Link>

      <div>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/dashboard">Dashboard</Link>
      </div>
    </nav>
  );
}