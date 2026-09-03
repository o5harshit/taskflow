import Link from "next/link";

export default function Navbar(){
    <nav>
      <Link href="/">TaskFlow</Link>

      <div>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/dashboard">Dashboard</Link>
      </div>
    </nav>
}