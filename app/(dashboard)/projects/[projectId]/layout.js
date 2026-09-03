import Link from "next/link";

export default function ProjectLayout({ children }) {
  return (
    <div>
      <nav>
        <Link href="./">Overview</Link>
        {" | "}
        <Link href="./tasks">Tasks</Link>
        {" | "}
        <Link href="./members">Members</Link>
        {" | "}
        <Link href="./settings">Settings</Link>
      </nav>

      <hr />

      {children}
    </div>
  );
}