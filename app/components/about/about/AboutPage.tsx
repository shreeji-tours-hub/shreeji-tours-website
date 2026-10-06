"use client";

import Footer from "../../Footer";
import Navbar from "../../Navbar";
import JourneyCTA from "../JourneyCTA";
import LeadershipSection from "../LeadershipSection";
import OfferSection from "../OfferSection";
import OurStory from "../OurStory";
import ValuesSection from "../ValuesSection";
import WhyChooseUs from "../WhyChooseUs";
import AboutHero from "./AboutHero";

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="aboutPage">
        <AboutHero />

        <OurStory />

        <ValuesSection />

        <LeadershipSection />

        <OfferSection />

        <WhyChooseUs />

        <JourneyCTA />
      </main>

      <Footer />
    </>
  );
}
