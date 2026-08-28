"use client";

import Navbar from "./Navbar";
import Footer from "./Footer";

import AboutHero from "./about/AboutHero";
import OurStory from "./about/OurStory";
import ValuesSection from "./about/ValuesSection";
import LeadershipSection from "./about/LeadershipSection";
import OfferSection from "./about/OfferSection";
import WhyChooseUs from "./about/WhyChooseUs";
import ContactCTA from "../components/contact/ContactCTA";

import TourHighlights from "./home/TourHighlights";

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      <AboutHero />

      <OurStory />

      <ValuesSection />

      <LeadershipSection />

      <OfferSection />

      <WhyChooseUs />

      <TourHighlights />

      <ContactCTA />

      <Footer />
    </main>
  );
}