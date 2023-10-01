import React from "react";
import Contact from "../components/Contact";
import Header from "../components/Header";
import SocialHeader from "../components/socialheader";

function ContactScreen() {
  return (
    <>
      <a href="https://api.whatsapp.com/send/?phone=919821219819&text&type=phone_number&app_absent=0" class="float" target="_blank">
        <i class="fab fa-whatsapp xl"></i>
      </a>
      <SocialHeader />
      <Header />
      <div className="pt-24">
        {" "}
        <Contact />
      </div>
    </>
  );
}

export default ContactScreen;
