import React from "react";
import "./ContactFormStyles.css";

const ContactForm = () => {
  return (
    <div className="form-container">
      <h1>Send me a message!</h1>
      <form>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Subject" />
        <textarea placeholder="Message" rows="4"></textarea>
        <button>Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
