"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import IndiaToursHero from "../components/india-tours/IndiaToursHero";
import TourSearch from "../components/india-tours/TourSearch";
import PopularIndiaTours from "../components/india-tours/PopularIndiaTours";
import WhyTravelWithUs from "../components/india-tours/WhyTravelWithUs";
import IndiaToursCTA from "../components/india-tours/IndiaToursCTA";
import ContactCTA from "../components/contact/ContactCTA";


export default function IndiaToursPage() {
  return (
    <main>
      <Navbar />

      <IndiaToursHero />

      <TourSearch/>

      <PopularIndiaTours/>

      <WhyTravelWithUs />

    <IndiaToursCTA />

      
      <Footer />
    </main>
  );
}