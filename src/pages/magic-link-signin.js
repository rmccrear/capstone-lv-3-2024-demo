import { useState } from "react";

export default function SignInPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [completedMessage, setCompletedMessage] = useState("");

  async function sendSignIn() {
    const result = await fetch(`/api/magic-link-login?name=${name}&email=${email}`);
    const json = await result.json();
    setCompletedMessage(json.message);
  }

  function handleClick() {
    sendSignIn();
  }

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }


  return (
    <div>
      <h1>Sign In</h1>
      <form>
        <label htmlFor="nameInput">Name</label>
        <input
          className="border-2"
          id="nameInput"
          type="text"
          value={name}
          onChange={handleNameChange}
        />
        <br />
        <label htmlFor="emailInput">Email</label>
        <input
          className="border-2"
          id="emailInput"
          type="text"
          value={email}
          onChange={handleEmailChange}
        />
        <br />
        <button
          type="button"
          className="border-2"
          onClick={handleClick}
        >
          Sign In
        </button>
      </form>
      <p>{completedMessage}</p>
    </div>
  );

}