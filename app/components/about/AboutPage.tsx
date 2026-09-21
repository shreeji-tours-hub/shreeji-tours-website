"use client";

import Navbar from "../Navbar";
import Footer from "../Footer";

import AboutHero from "./AboutHero";
import OurStory from "./OurStory";
import ValuesSection from "./ValuesSection";
import LeadershipSection from "./LeadershipSection";
import OfferSection from "./OfferSection";
import WhyChooseUs from "./WhyChooseUs";
import JourneyCTA from "./JourneyCTA";

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