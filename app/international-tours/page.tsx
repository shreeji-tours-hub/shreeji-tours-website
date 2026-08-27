"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import InternationalTourHero from "../components/international-tours/InternationalTourHero";
import InternationalTourSearch from "../components/international-tours/InternationalTourSearch";
import PopularInternationalTours from "../components/international-tours/PopularInternationalTours";
import WhyInternationalTravel from "../components/international-tours/WhyInternationalTravel";
import InternationalDestinations from "../components/international-tours/InternationalDestinations";
import InternationalTestimonials from "../components/international-tours/InternationalTestimonials";
import InternationalTourCTA from "../components/international-tours/InternationalTourCTA";
import ContactCTA from "../components/contact/ContactCTA";

export default function InternationalPage() {
  return (
    <main>
      <Navbar />

      <InternationalTourHero />
      <InternationalTourSearch />
      <PopularInternationalTours />
      <WhyInternationalTravel />
     
      <InternationalTourCTA />
      <Footer />
    </main>
  );
}