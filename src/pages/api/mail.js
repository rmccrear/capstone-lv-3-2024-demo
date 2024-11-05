import { Resend } from 'resend';

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const resend = new Resend(RESEND_API_KEY);

export default function handler(req, res){
  const query = req.query;
  const name = query.name;
  const message = req.query.message;
  console.log(name);
  console.log(message);
  const email1 = {
    from: 'Acme <onboarding@resend.dev>',
    to: ['robert.mccreary@codex.academy'],
    subject: 'Hello World',
    html: '<strong>It works!</strong>',
  }
  // resend.emails.send(email1)
  res.status(200).json({
    emailStatus: "sending",
    hello: "world"
  });
}