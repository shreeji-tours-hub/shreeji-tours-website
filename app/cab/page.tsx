"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import CabHero from "../components/cab-hire/CabHero";
import CabRates from "../components/cab-hire/CabRates";
import CabServices from "../components/cab-hire/CabServices";
import CabFleet from "../components/cab-hire/CabFleet";
import WhyChooseCab from "../components/cab-hire/WhyChooseCab";
import CabBooking from "../components/cab-hire/CabBooking";
import CabCTA from "../components/cab-hire/CabCTA";
import ContactCTA from "../components/contact/ContactCTA";



export default function CabPage() {
  return (
    <main>
      <Navbar />

      <CabHero />

      <CabRates />

      <CabFleet />

      <CabServices />

      

      <div className="cab-bottom-grid">
        <WhyChooseCab />
        <CabBooking />
      </div>

      <CabCTA />

      <ContactCTA/>

      <Footer />
    </main>
  );
}