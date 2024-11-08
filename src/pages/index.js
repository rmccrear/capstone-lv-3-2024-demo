import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="text-4xl">
        Hello this is home.
      </div>
      <ul>
        <li>
          <Link href="contact-me">Contact Me</Link>
        </li>
      </ul>
    </div>
  );
}