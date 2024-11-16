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
        <li>
          <Link href="fruit-chooser">
            Set Fruit
          </Link>
        </li>
        <li>
          <Link href="fruit-checker">
            Get Fruit
          </Link>
        </li>
        <li>
          <Link href="magic-link-signin">
            Sign In with Email
          </Link>
        </li>
      </ul>
      <button className="btn btn-secondary">Hello</button>
    </div>
  );
}