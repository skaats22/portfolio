// Contact Form

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    let name = formData.get("name") || "";
    const email = formData.get("email") || "";
    const message = formData.get("message") || "";

    const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);

    const templateParams = {
      name: capitalizedName,
      email,
      message,
    };

    emailjs
      .send(
        "service_veo5xei",
        "template_74kzeli",
        templateParams,
        "670bWeAta9lFOvq2F"
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
        <input type="text" name="name" required />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email" required />
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
