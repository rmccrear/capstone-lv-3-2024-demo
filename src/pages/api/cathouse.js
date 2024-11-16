

export default function handler(req, res) {
  // first, check for email and key
  // /api/cathouse?email=dummyuser@tootsie.com&passkey=hacker1000
  const email = req.query.email;
  const passkey = req.query.passkey;

  // TODO: get the user's passkey from the datastore
  const storedEmail = "dummyuser@tootsieroll.com";
  // const storedPasskey = redis.get(`passkey:${email}`)
  const storedPasskey = "h4ckeR10000";

  tif (
    email === storedEmail
    && passkey === storedPasskey
  ) {
    // really, I could fetch from api-ninjas here..
    // I am using fake data for now.
    const cat = {
      name: "California Spangle",
      description: "A cool cat from Cali"
    }
    res.status(200).json(cat);
  } else {
    res.status(401).json({
      error: "incorrect login"
    });
  }


}