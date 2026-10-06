import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import IndiaToursHero from "../components/india-tours/IndiaToursHero";
import WhyTravelWithUs from "../components/india-tours/WhyTravelWithUs";
import IndiaToursCTA from "../components/india-tours/IndiaToursCTA";

import TourHighlights from "../components/home/TourHighlights";
import ToursGrid from "../components/common/tours-grid/tours-grid";
import { getTours } from "../controller/tour.controller";
import { SearcPageProps } from "@/lib/types/common.types";
import TourSearch from "../components/common/tour-search/tour-search";

export default async function IndiaToursPage({ searchParams }: SearcPageProps) {
  const params = await searchParams;
  const tours = await getTours("India Tours", params);

  return (
    <main>
      <Navbar />
      <IndiaToursHero />
      <TourSearch {...params} />
      <ToursGrid tours={tours} />
      <WhyTravelWithUs />
      <TourHighlights />
      <IndiaToursCTA />
      <Footer />
    </main>
  );
}
