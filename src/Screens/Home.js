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

function Home() {
  return (
    <>
      <SocialHeader />
      <Header />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Hero />
            <Stats />

            <Manager />
            <SCFeed />

            <ServicesGraph />
            <NewT />
            <Contact />
          </main>
        </div>
      </div>
    </>
  );
}

export default Home;
