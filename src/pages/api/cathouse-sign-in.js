

export default function handler(req, res) {
  // TODO: get email from query
  // TODO: create random passkey
  // TODO: store both in the data store

  res.status(200).json({
    email: "dummyuser@tootsieroll.com",
    passkey: "h4ckeR10000"
  });
}