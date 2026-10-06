"use client";

import Navbar from "@/app/components/Navbar";
import AboutHero from "../components/about/about/AboutHero";
import OurStory from "../components/about/OurStory";
import ValuesSection from "../components/about/ValuesSection";
import LeadershipSection from "../components/about/LeadershipSection";
import OfferSection from "../components/about/OfferSection";
import WhyChooseUs from "../components/about/WhyChooseUs";
import JourneyCTA from "../components/about/JourneyCTA";
import Footer from "../components/Footer";

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
