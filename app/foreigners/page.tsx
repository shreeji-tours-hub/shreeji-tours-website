import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import ForeignTourHero from "../components/foreign-tours/ForeignTourHero";
import WhyTravelForeign from "../components/foreign-tours/WhyTravelForeign";
import ForeignTourCTA from "../components/foreign-tours/ForeignTourCTA";

import TourHighlights from "../components/home/TourHighlights";
import { getTours } from "../controller/tour.controller";
import ToursGrid from "../components/common/tours-grid/tours-grid";
import { SearcPageProps } from "@/lib/types/common.types";
import TourSearch from "../components/common/tour-search/tour-search";

export default async function ForeignersPage({ searchParams }: SearcPageProps) {
  const params = await searchParams;
  const tours = await getTours("Tour for foreigners", params);

  return (
    <main>
      <Navbar />
      <ForeignTourHero />
      <TourSearch {...params} />
      <ToursGrid tours={tours} />
      <WhyTravelForeign />
      <TourHighlights />
      <ForeignTourCTA />
      <Footer />
    </main>
  );
}
