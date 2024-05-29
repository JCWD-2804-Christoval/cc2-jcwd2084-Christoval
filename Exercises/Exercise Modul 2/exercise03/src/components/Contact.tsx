import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <section id="contact">
      <h1>Contact</h1>
      <form>
        <label>Name:</label>
        <input type="text" name="name" />
        <label>Email:</label>
        <input type="email" name="email" />
        <label>Message:</label>
        <textarea name="message"></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;
