import { useState } from "react";

export default function CatHousePage() {
  const [cat, setCat] = useState({
    name: "waiting for cat name",
    description: "waiting for description"
  });
  
  async function handleClick() {
    const email = localStorage.getItem("email");
    const passkey = localStorage.getItem("passkey");
    const result = await fetch(`/api/cathouse?email=${email}&passkey=${passkey}`);
    const data = await result.json();
    setCat(data);
  }

  return (<div>
    <h1>Cat House</h1>
    <p className="text-red-600">{cat.error}</p>
    <p className="border-2 border-red-300">cat name: {cat.name}</p>
    <p className="border-2 border-red-300">{cat.description}</p>
    <button className="border-2 border-black" onClick={handleClick}>Get Cat</button>
  </div>);
}