"use client";

import Navbar from "./Navbar";
import Footer from "./Footer";

import OurStory from "./about/OurStory";
import ValuesSection from "./about/ValuesSection";
import LeadershipSection from "./about/LeadershipSection";
import OfferSection from "./about/OfferSection";
import WhyChooseUs from "./about/WhyChooseUs";

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      <OurStory />

      <ValuesSection />

      <LeadershipSection />

      <OfferSection />

      <WhyChooseUs />

      <Footer />
    </main>
  );
}