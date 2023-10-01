import React from "react";
import Contact from "../components/Contact";
import Header from "../components/Header";
import SocialHeader from "../components/socialheader";

function ContactScreen() {
  return (
    <>
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
