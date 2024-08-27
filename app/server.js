"use server"
import nodemailer from "nodemailer"

export async function Submit(data) {
  
  var transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: process.env.USERNAME,
      pass: process.env.PASSWORD
    }
  });
  const mailData = {
    from: `${data.email}`,
    to: 'Portfolio@me.com',
    subject: `${data.object}`,
    text: `${data.message}`,
    html: `<div> ${data.message} </div>`
  }

  try {
    const info = await transport.sendMail(mailData);
    console.log(info);
    return "200";
  } catch (err) {
    console.error(err);
    throw err;
  }
}