import { useState } from "react";

export default function MailPage() {
  // Step 2: create a state variable and setter
  // using the useState Hook.
  const [user, setUser] = useState("");
  const [message, setMessage] = useState("");

  // to send mail, create a fetch request to our
  // api we created at /api/mail
  async function sendMail() {
    // /api/mail?user=robert&message=hi how are you
    const result = await fetch(`/api/mail?user=${user}&message=${message}`);
  }

  // to respond to click, create a handler
  // attach the handler to a button with onClick
  function handleClick() {
    sendMail();
  }

  // Step 4: add handler
  function userChangeHandler(event) {
    const input = event.target.value;
    console.log("changed! " + input);
    setUser(input);
  }

  function messageChangeHandler(event) {
    const messageInput = event.target.value;
    setMessage(messageInput);
  }

  return (
    <div className="container m-3">
      <h1>Contact me</h1>
      <form>
        {/* Step 1: create an input */}
        {/* Step 3: add value and onChange attributes */}
        <div className="flex">
          <label for="userInput">
            Username:
          </label>
          <input id="userInput" className="px-4 py-3 bg-gray-100 w-2/3 text-sm outline-none border-b-2 border-blue-500 rounded"
            type="text"
            value={user}
            onChange={userChangeHandler}
          />
        </div>
        {/* step 1: create an input */}
        <div className="flex">
          <label for="messageInput">
            Message:
          </label>
          <textarea id="messageInput" className="m-3 px-4 py-3 bg-gray-100 w-2/3 text-sm outline-none border-b-2 border-blue-500 rounded"
            value={message}
            onChange={messageChangeHandler}
          >
          </textarea>
        </div>
        <div className="flex">
          <button className="border-2"
            type="button"
            onClick={handleClick}
          > Send Mail </button>
        </div>
      </form>
    </div>
  );
}