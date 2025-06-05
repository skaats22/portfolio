// Contact

import ContactForm from "../../components/ContactForm/ContactForm";
import "./Contact.css";
import linkedin from "../../assets/lilogo.png";

export default function Contact() {
  return (
    <>
      <h1>Contact</h1>
      <h3>
        Feel free to reach out for collaboration, questions, or just want to say
        hi!
      </h3>
      <p>Connect with me on:</p>
      <div className="logo">
        <a
          href="https://linkedin.com/in/stevekaats"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} alt="li logo" style={{ height: "32px" }} />
        </a>
      </div>
      <h3><u>Contact me form:</u></h3>
      <div className="contactContainer">
        <ContactForm />
      </div>
    </>
  );
}
