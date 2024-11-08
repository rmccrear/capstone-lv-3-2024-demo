
import { Redis } from "@upstash/redis";

const store = Redis.fromEnv();

export default async function handler(req, res) {
  const magicKey = req.query["magic-key"];
  const emailAddress = req.query.email;

  const storedKey = await store.get(`magic-key:${emailAddress}`);

  if (storedKey === magicKey) {
    res.status(200).json({
      message: "Magic key is valid",
      emailAddress
    });
  } else {
    res.status(401).json({
      message: "Magic key is invalid",
      emailAddress
    });
  }

}
