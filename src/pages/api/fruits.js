
import { Redis } from "@upstash/redis";
const store = Redis.fromEnv()

export default async function handler(req, res) {
  const fruitKeys = await store.keys(`fav-fruit:*`);
  console.log(fruitKeys);
  const fruits = await store.mget(...fruitKeys);
  res.status(200).json({ fruits: fruits, keys: fruitKeys });
}
