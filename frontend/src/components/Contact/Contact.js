import { Button, Typography } from '@mui/material';
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <div className="contactRightBar"></div>

      <div className="contactContainer">
        <form className="contactContainerForm">
          <Typography variant="h4">Contact Us</Typography>

          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />

          <textarea
            placeholder="Message"
            required
            cols="30"
            rows="10"
          ></textarea>
          <Button variant="contained" type="submit">
            Send
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
