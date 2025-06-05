// Contact Form

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_veo5xei",     // replace with your EmailJS service ID
        "template_74kzeli",    // replace with your EmailJS template ID
        form.current,
        "670bWeAta9lFOvq2F"      // replace with your EmailJS public key (user ID)
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setStatus("Failed to send message. Try again later.");
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>
        Name:
        <input type="text" name="user_name" required />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="user_email" required />
      </label>
      <br />
      <label>
        Message:
        <textarea name="message" required />
      </label>
      <br />
      <button type="submit">Send</button>
      <p>{status}</p>
    </form>
  );
}


