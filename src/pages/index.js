import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="text-4xl">
        Hello this is home.
      </div>
      <nav className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Cat-Fruits</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
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
            <li>
              <Link href="cathouse-login">
                Login to Cathouse
              </Link>
            </li>
            <li>
              <Link href="cathouse">
                Cathouse Page
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <button className="btn btn-secondary">CTA</button>
    </div>
  );
}