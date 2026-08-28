"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import ContactHero from "../components/contact/ContactHero";
import ContactInfo from "../components/contact/ContactInfo";
import ContactFormMap from "../components/contact/ContactFormMap";
import WhyContact from "../components/contact/WhyContact";
import ContactCTA from "../components/contact/ContactCTA";

import TourHighlights from "../components/home/TourHighlights";

export default function ContactPage() {
  return (
    <main>
      <Navbar />

      <ContactHero />

      <ContactInfo />

      <ContactFormMap />

      <WhyContact />

      <TourHighlights />

      <ContactCTA />

      <Footer />
    </main>
  );
}