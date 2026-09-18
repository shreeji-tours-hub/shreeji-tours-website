import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import ForeignTourHero from "../components/foreign-tours/ForeignTourHero";
import ForeignTourSearch from "../components/foreign-tours/ForeignTourSearch";
import PopularForeignTours from "../components/foreign-tours/PopularForeignTours";
import WhyTravelForeign from "../components/foreign-tours/WhyTravelForeign";
import ForeignTourCTA from "../components/foreign-tours/ForeignTourCTA";

import TourHighlights from "../components/home/TourHighlights";

type PageProps = {
  searchParams: Promise<{
    destination?: string;
    duration?: string;
    tourType?: string;
  }>;
};

export default async function ForeignersPage({ searchParams }: PageProps) {
  const params = await searchParams;

  return (
    <main>
      <Navbar />
      <ForeignTourHero />
      <ForeignTourSearch />
      <PopularForeignTours />
      <WhyTravelForeign />
      <TourHighlights />
      <ForeignTourCTA />
      <Footer />
    </main>
  );
}
