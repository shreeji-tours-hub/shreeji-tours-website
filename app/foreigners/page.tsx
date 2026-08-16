"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import ForeignTourHero from "../components/foreign-tours/ForeignTourHero";
import ForeignTourSearch from "../components/foreign-tours/ForeignTourSearch";
import PopularForeignTours from "../components/foreign-tours/PopularForeignTours";
import WhyTravelForeign from "../components/foreign-tours/WhyTravelForeign";
import IndiaDestinations from "../components/foreign-tours/IndiaDestinations";
import ForeignTestimonials from "../components/foreign-tours/ForeignTestimonials";
import ForeignTourCTA from "../components/foreign-tours/ForeignTourCTA";
import ContactCTA from "../components/contact/ContactCTA";


export default function ForeignersPage() {
  return (
    <main>
      <Navbar />

      <ForeignTourHero />

      <ForeignTourSearch />

      <PopularForeignTours />

      <WhyTravelForeign />

      <IndiaDestinations />

      <ForeignTestimonials />

      <ForeignTourCTA />

      <ContactCTA/>

      <Footer />
    </main>
  );
}