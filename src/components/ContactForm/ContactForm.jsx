import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";

export default function ContactForm() {
  const form = useRef();
  const [status, setStatus] = useState({ message: "", type: "" });
  const [captchaVerified, setCaptchaVerified] = useState(false);

  useEffect(() => {
    // Load reCAPTCHA script if not present
    const existingScript = document.querySelector(
      'script[src="https://www.google.com/recaptcha/api.js"]'
    );
    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://www.google.com/recaptcha/api.js";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    }

    // Wait for reCAPTCHA API to be available, then render
    const interval = setInterval(() => {
      if (window.grecaptcha && window.grecaptcha.render) {
        if (!document.querySelector("#recaptcha-container > div")) {
          window.grecaptcha.render("recaptcha-container", {
            sitekey: "6LfTQl0rAAAAAEIpZsoHsSeN0tRr4oieH4U1cCNh",
            callback: () =>
              window.dispatchEvent(
                new CustomEvent("captcha-verified", { detail: true })
              ),
            "expired-callback": () =>
              window.dispatchEvent(
                new CustomEvent("captcha-verified", { detail: false })
              ),
          });
        }
        clearInterval(interval);
      }
    }, 300);

    const handleCaptcha = (e) => setCaptchaVerified(e.detail);
    window.addEventListener("captcha-verified", handleCaptcha);
    return () => {
      window.removeEventListener("captcha-verified", handleCaptcha);
      clearInterval(interval);
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!captchaVerified) {
      setStatus({
        message: "Please verify you are not a robot.",
        type: "error",
      });
      return;
    }

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
        "service_veo5xei", // Your EmailJS service ID
        "template_74kzeli", // Your EmailJS template ID
        templateParams,
        "670bWeAta9lFOvq2F" // Your EmailJS public key
      )
      .then(
        (result) => {
          setStatus({ message: "Message sent successfully!", type: "success" });
          form.current.reset();
          setCaptchaVerified(false);
          if (window.grecaptcha) window.grecaptcha.reset();
        },
        (error) => {
          setStatus({
            message: "Failed to send message. Try again later.",
            type: "error",
          });
        }
      );
  };
  console.log(status);
  return (
    <div>
      {status.message && (
        <p
          className="status"
          style={{
            color: status.type === "success" ? "green" : "red",
            fontWeight: "bold",
            padding: "5px",
            width: "75%",
            margin: "0 auto 20px auto",
            borderRadius: "16px",
            backgroundColor:
              status.type === "success" ? "lightgreen" : "rgb(248, 168, 168)",
          }}
        >
          {status.message}
        </p>
      )}
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
        <div
          id="recaptcha-container"
          className="g-recaptcha"
          data-sitekey="6LfTQl0rAAAAAEIpZsoHsSeN0tRr4oieH4U1cCNh"
          data-callback="onCaptchaSuccess"
          data-expired-callback="onCaptchaExpired"
        />
        <br />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
