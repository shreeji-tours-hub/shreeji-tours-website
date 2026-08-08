"use client";

import Navbar from "./Navbar";
import Footer from "./Footer";

import HeroSection from "./home/HeroSection";
import ForeignToursSection from "./home/ForeignToursSection";
import PopularToursSection from "./home/PopularToursSection";
import CabHireSection from "./home/CabHireSection";
import TravelStatsSection from "./home/TravelStatsSection";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />
        <ForeignToursSection />
        <PopularToursSection />
        <CabHireSection />
        <TravelStatsSection />
      </main>

      <Footer />
    </>
  );
}