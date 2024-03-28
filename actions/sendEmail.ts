"use server"

import { Resend } from "resend";
import { getErrorMessage, validateString } from "@/lib/utils";
import React from "react";
import ContactFormMail from "@/lib/contact-form-mail";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = (formData: FormData) => {
  console.log("server");

  const email = formData.get("email");
  const message = formData.get("message");

  if (!validateString(email, 500)) {
    return {
      error: "Email invalide",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Message invalide",
    };
  }

  let data;
  try{
    data = resend.emails.send({
      from: 'Message du portfolio <onboarding@resend.dev>',
      to: 'robin.combeau@gmail.com',
      subject: 'Message de robincombeau.work',
      reply_to: email,
      react: React.createElement(ContactFormMail, {
        message: message,
        email: email,
      }),
    });
  }
  catch(error: any){
    return {
      error: getErrorMessage(error),
    }
  }

  return {
    data
  }
};