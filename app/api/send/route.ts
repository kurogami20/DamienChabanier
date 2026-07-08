// app/api/send/route.ts
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const body = await req.json();

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
  });

  await transporter.sendMail({
    from: `"${body.name}" <${body.email}>`,
    to: process.env.EMAIL_USER,
    subject: `${body.objet} - Message from ${body.email}`,
    text: body.message,
  });

  return Response.json({ ok: true });
}
