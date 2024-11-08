import { Redis } from "@upstash/redis";
const store = Redis.fromEnv()

export default async function handler(req, res) {
  const fruit = req.query.fruit;
  const name = req.query.name;
  await store.set(`fav-fruit:${name}`, fruit);
  res.status(200).json({ fruit: fruit, name: name });
}
