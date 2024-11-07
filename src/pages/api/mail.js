import { Resend } from 'resend';

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const resend = new Resend(RESEND_API_KEY);

export default async function handler(req, res){
  const query = req.query;
  const user = query.user;
  const message = req.query.message;
  console.log(user);
  console.log(message);
  const email1 = {
    from: 'Acme <onboarding@resend.dev>',
    to: ['robert.mccreary@codex.academy'],
    subject: `Hello from ${user}`,
    html: `${user} says: <br><strong>${message}</strong>`,
  }
  const {data, error} = await resend.emails.send(email1)
  if(error){
    console.log(data);
    console.log(error);
  }
  res.status(200).json({
    emailStatus: "sending",
    message: message,

  });
}