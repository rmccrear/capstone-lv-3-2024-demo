import Link from "next/link";
import {useState, useEffect} from 'react';

export default function MagicLinkAuthPage() {
  const [email, setEmail] = useState("");
  const [magicKey, setMagicKey] = useState("");
  const [message, setMessage] = useState("");
  const [isMagicKeyValid, setIsMagicKeyValid] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    sendMagicLinkAuth(params.get("email"), params.get("magic-key"));
    setEmail(params.get("email"));
    setMagicKey(params.get("magic-key"));
  }, []);

  useEffect(() => {
    if (isMagicKeyValid) {
      window.localStorage.setItem("email", email);
      window.localStorage.setItem("magicKey", magicKey);
    }
  }, [isMagicKeyValid, email]);

  async function sendMagicLinkAuth(emailAddress, magicKeyString) {
    const result = await fetch(`/api/magic-link-auth?magic-key=${magicKeyString}&email=${emailAddress}`);
    const json = await result.json();
    setMessage(json.message);
    setIsMagicKeyValid(result.status === 200);
  }

  const successfulMessage = (
    <div>
      <p>
        <span className="text-green-600">Success!</span> 
        You are now logged in.

        Visit our cat-approved fruit page: <Link href="/fruit-chooser" className="text-blue-500">Fruit Chooser</Link>
      </p>
    </div>
  );
  const unsuccessfulMessage = (
    <div>
      <p>
        <span className="text-red-600">Failed to log in.</span> Please try again.
        <Link href="/signin" className="text-blue-500">Sign in</Link>
      </p>
    </div>
  );

  return (
    <div>
      <h1>Magic Link Auth</h1>
      <p>Email: {email}</p>
      <p>{message}</p>
      {isMagicKeyValid ? successfulMessage : unsuccessfulMessage}
    </div>
  );

}