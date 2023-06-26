import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./css/Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lk8edb4', 'template_51ze6d4', form.current, 'pYKKbYRjwQYgFzxJj')
      .then((result) => {
          console.log(result.text);
          console.log("message sent")
          form.current.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
        <div className='cont'>
            <h1>Connect with Us</h1>
      <label>Name</label>

      <input type="text" name="user_name" />
      <br></br>
      <label>Email</label>
      
      <input type="email" name="user_email" /><br></br>
      <label>Message</label>
    
      <textarea name="message" />
      <input type="submit" value="Send" /><br></br>
      </div>
    </form>
  );
};
export default Contact
