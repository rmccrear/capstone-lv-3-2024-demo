
import { Redis } from "@upstash/redis";
const store = Redis.fromEnv()

export default async function handler(req, res) {
  const [cursor, fruitKeys] = await store.scan(0, { MATCH: 'fruits:*' });
  console.log(fruitKeys);
  const fruits = await store.mget(...fruitKeys);
  console.log(fruits);
  res.status(200).json({ fruits: fruits, keys: fruitKeys.keys });
}
