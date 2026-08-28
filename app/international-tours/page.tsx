"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import InternationalTourHero from "../components/international-tours/InternationalTourHero";
import InternationalTourSearch from "../components/international-tours/InternationalTourSearch";
import PopularInternationalTours from "../components/international-tours/PopularInternationalTours";
import WhyInternationalTravel from "../components/international-tours/WhyInternationalTravel";
import InternationalTourCTA from "../components/international-tours/InternationalTourCTA";

import TourHighlights from "../components/home/TourHighlights";

export default function InternationalPage() {
  return (
    <main>
      <Navbar />

      <InternationalTourHero />

      <InternationalTourSearch />

      <PopularInternationalTours />

      <WhyInternationalTravel />

      <TourHighlights />

      <InternationalTourCTA />

      <Footer />
    </main>
  );
}