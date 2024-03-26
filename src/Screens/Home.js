import React from "react";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Manager from "../components/Manager";
import NewB from "../components/NewB";
import NewT from "../components/NewT";
import SCFeed from "../components/SCFeed";
import ServicesGraph from "../components/ServicesGraph";
import ServicesHome from "../components/ServicesHome";
import SocialFeed from "../components/SocialFeed";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import Modal from "../components/Modal";
import SocialHeader from "../components/socialheader";
import Media from "../components/media";
import Banks from "../components/banks";
import Reviews from "../components/Reviews";

function Home() {
  return (
    <>
      <a
        href="https://api.whatsapp.com/send/?phone=919821219819&text&type=phone_number&app_absent=0"
        class="float"
        target="_blank"
      >
        <i class="fab fa-whatsapp xl"></i>
      </a>
      <SocialHeader />
      <Header />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Hero />
            <Banks />

            <Reviews />

            <Media />
            <Manager />
            <ServicesGraph />
            <Stats />

            <SCFeed />
            {/* <Contact /> */}
          </main>
        </div>
      </div>
    </>
  );
}

export default Home;
