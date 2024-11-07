import { Redis } from "@upstash/redis";
const store = Redis.fromEnv()

export default function handler(req, res) {
  const fruit = req.query.fruit;
  // const name = req.query.name;
  store.set("fruit", fruit);
  res.status(200).json({ fruit: fruit });
}
