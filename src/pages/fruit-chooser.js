import Link from "next/link";

import { useState } from 'react';

export default function FruitPage() {
  const [name, setName] = useState("");
  const [fruit, setFruit] = useState("");

  async function sendFruit() {
    await fetch(`/api/fruit?name=${name}&fruit=${fruit}`);
  }

  function handleNameChange(event) {
    setName(event.target.value);
  }
  function handleFruitChange(event) {
    setFruit(event.target.value);
  }

  function handleClick() {
    console.log("clicked");
    sendFruit();
  }

  return (<div>
    <h1>Fruit</h1>
    <Link className="text-blue-300" href="fruit-checker">
      Get Fruit
    </Link>
    <form>
      <label for="nameInput">Name</label>
      <input className="border-2"
        id="nameInput"
        type="text"
        value={name}
        onChange={handleNameChange}
      />
      <br />
      <label for="fruitInput">fruit</label>
      <input className="border-2"
        id="fruitInput"
        type="text"
        value={fruit}
        onChange={handleFruitChange}
      />
      <br />
      <button type="button" className="border-2"
        onClick={handleClick}
      >Set your fruit</button>
    </form>
  </div>);
}