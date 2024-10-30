import React from "react";
import emailjs from "@emailjs/browser";
import ContInfo from "./ContInfo";
import {Toaster, toast} from "sonner";


const sendEmail = (e) => {
  e.preventDefault();
  emailjs.sendForm('service_i55rqtj', 'template_cl20u9f', e.target, 'swXfLMkyFDotUto6u')
  .then(
    () => {
      toast.success('Message Sent');
      e.target.reset()
    },
    (error) => {
      toast.error('Message Failed to Send:\n' + error.text);
    },
  );
};

const ContBack = () => {
  return (
    <div>
      <Toaster richColors></Toaster>
      <div id="cont-back">
        <div id="map">
          <img id="map-pic" src="/pics/contactmap.png" alt="" />
          <img id="map-pic-right" src="/pics/contmap-right.png" alt="" />
        </div>
        <div id="on-map">
          <div id="left">
            <a target="_blank" href="https://www.google.com/maps/place/University+of+Colorado+Boulder/@40.0074755,-105.2751627,17.24z/data=!4m6!3m5!1s0x876bec346a9c1ec1:0x328d5a4a8f431d9!8m2!3d40.0073499!4d-105.2659871!16zL20vMDFxZF9y?entry=ttu&g_ep=EgoyMDI0MTAyMy4wIKXMDSoASAFQAw%3D%3D">look at google maps</a>
            <h1 id="header">Contact me</h1>
          </div>
          <div id="cont-form">
            <form onSubmit={sendEmail}>
              <h3>GET IN TOUCH</h3>
              <input type="text" id="name" name="name" placeholder="name" required />
              <input type="email" id="email" name="email" placeholder="email" required />
              <input type="text" id="phone" name="number" placeholder="phone no." />
              <textarea id="message" name="message" rows={4} placeholder="message"></textarea>
              <button type="submit" id="form-btn">
                send
              </button>
            </form>
          </div>
        </div>
      </div>
      <ContInfo></ContInfo>
    </div>
  );
};

export default ContBack;
