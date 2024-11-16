import { useState } from "react";

export default function CatHouseLoginPage(){
  // step 1: create state
  const [email, setEmail] = useState("");

  // step 3: handle input change
  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  async function handleSignIn(){
    // Step 1: send fetch to /api/cathouse-sign-in
    const result = await fetch(`/api/cathouse-sign-in?email=${email}`);
    const data = await result.json();
    // Step 2: accept the key
    const catHouseEmail = data.email;
    const catHousePasskey = data.passkey;
    // Step 3: save the key in localStorage
    localStorage.setItem("email", catHouseEmail);
    localStorage.setItem("passkey", catHousePasskey);
  }

  return (<div>
    <p>
      Type your email here for access to cat house.
    </p>
    <form>
      {/* step 2: sync state and input value */}
      <label for="email-label">Email</label>
      <input 
         onChange={handleEmailChange}
         value={email}
         id="email-label"
         type="email"
         className="border-2 border-black" />
      <button onClick={handleSignIn} className="border-2 border-black" type="button">Get Access</button>
    </form>
  </div>);

}