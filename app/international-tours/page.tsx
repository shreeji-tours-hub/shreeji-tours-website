import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import InternationalTourHero from "../components/international-tours/InternationalTourHero";
import WhyInternationalTravel from "../components/international-tours/WhyInternationalTravel";
import InternationalTourCTA from "../components/international-tours/InternationalTourCTA";

import TourHighlights from "../components/home/TourHighlights";
import { SearcPageProps } from "@/lib/types/common.types";
import { getTours } from "../controller/tour.controller";
import TourSearch from "../components/common/tour-search/tour-search";
import ToursGrid from "../components/common/tours-grid/tours-grid";

export default async function InternationalPage({
  searchParams,
}: SearcPageProps) {
  const params = await searchParams;
  const tours = await getTours("International Tours", params);

  return (
    <main>
      <Navbar />
      <InternationalTourHero />
      <TourSearch {...params} />
      <ToursGrid tours={tours} />
      <WhyInternationalTravel />
      <TourHighlights />
      <InternationalTourCTA />
      <Footer />
    </main>
  );
}
