import { Resend } from 'resend';
import { Redis } from "@upstash/redis";
const store = Redis.fromEnv()

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const resend = new Resend(RESEND_API_KEY);

const BASE_URL = "http://localhost:3000/magic-link-auth";

function createMagicKey() {
  const random = Math.floor(Math.random()*10000000000000000);
  return random.toString(16);
}

function invite(name, emailAddress, magicKey) {
  const link = `${BASE_URL}?magic-key=${magicKey}&email=${emailAddress}`;
  const message = `
    <p>Hi ${name} </p>
    <p> Welcome to Catopaedia, the source of all cat knowledge. We are happy you have signed up for our service. Click the link below to login to your account </p>
    <p> Click the link to join <a href="${link}"> ${link} </a> </p>
  `;
  const email = {
    from: 'Acme <onboarding@resend.dev>',
    // NOTE: Will only work with your own email
    // until you set up your domain to work with the 
    // email service provider (RESEND.com)
    to: [emailAddress],
    subject: `Welcome to Catopaedia`,
    html: message,
  }
  return email;
}

export default async function handler(req, res) {
  const name = req.query.name;
  const emailAddress = req.query.email;
  const magicKey = createMagicKey();
  const email = invite(name, emailAddress, magicKey);
  const { data, error } = await resend.emails.send(email);
  if (error) {
    console.log(data);
    console.log(error);
    res.status(401).json({
      emailStatus: "error sending mail",
      message: error,

    });
  } else {
    store.set(`magic-key:${emailAddress}`, magicKey);
    res.status(200).json({
      emailStatus: "sending",
      message: "Email sent successfully. Please check your mail."
    });
  }
}