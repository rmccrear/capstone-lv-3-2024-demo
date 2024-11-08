import Link from "next/link";

import { useState } from 'react';

export default function FruitPage() {
  const [name, setName] = useState("");
  const [fruit, setFruit] = useState("");

  async function requestFruit() {
    const result = await fetch(`/api/whatfruit?name=${name}`);
    const data = await result.json();
    const fruit = data.fruit;
    setFruit(fruit);
  }

  function handleClick() {
    requestFruit();
  }

  function handleNameChange(event) {
    console.log(event);
    setName(event.target.value);
  }

  return (<div>
    <h1>Fruit</h1>
    <Link className="text-blue-300" href="fruit-chooser">
            Set Fruit
    </Link>
    <input
      type="name"
      placeholder="enter your name"
      value={name}
      onChange={handleNameChange}
    />
    <button className="border-2" type="button"
      onClick={handleClick}
    >Get Fruit</button>
    <div>
      <p>
        Your fruit is {fruit}!
      </p>
    </div>
  </div>);
}