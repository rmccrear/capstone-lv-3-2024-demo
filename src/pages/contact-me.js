import { useState } from "react";

export default function MailPage() {
  // Step 2: create a state variable and setter
  // using the useState Hook.
  const [user, setUser] = useState("");

  // to send mail, create a fetch request to our
  // api we created at /api/mail
  async function sendMail() {
    const result = await fetch(`/api/mail?user=${user}&message=You got mail from ${user}`)
  }

  // to respond to click, create a handler
  // attach the handler to a button with onClick
  function handleClick(){
    sendMail();
  }

  // Step 4: add handler
  function changeHandler(event) {
    const input = event.target.value;
    console.log("changed! " + input);
    setUser(input);
  }

  return (
    <div className="container m-3">
      <h1>Contact me</h1>
      <form>
        {/* Step 1: create an input */}
        {/* Step 3: add value and onChange attributes */}
        <input className="px-4 py-3 bg-gray-100 w-2/3 text-sm outline-none border-b-2 border-blue-500 rounded" 
          type="text"
          value={user}
          onChange={changeHandler}
        />
        <button className="border-2"
          type="button"
          onClick={handleClick}
          > Send Mail </button>
      </form>
    </div>
  );
}