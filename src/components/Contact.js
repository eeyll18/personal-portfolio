import React from "react";
// import emailjs from '@emailjs/browser';
import "./contact.css";
import styled from "styled-components";

function Contact() {
  return (
    <div id="contact">
      <form>
        <h3>İletişim</h3>

        <label>İsim - Soyisim</label>
        <input type="text" name="user_name" />
        <label>E-mail</label>
        <input type="email" name="user_email" />
        <label>Mesajınız</label>
        <textarea name="message" />
        <input type="submit" value="Gönder" />
      </form>
    </div>
  );
}

export default Contact;
