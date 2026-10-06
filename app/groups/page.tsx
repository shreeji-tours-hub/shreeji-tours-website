import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import GroupTourHero from "../components/group-tours/GroupTourHero";
import WhyGroupTravel from "../components/group-tours/WhyGroupTravel";
import GroupTourCTA from "../components/group-tours/GroupTourCTA";

import TourHighlights from "../components/home/TourHighlights";
import { SearcPageProps } from "@/lib/types/common.types";
import { getTours } from "../controller/tour.controller";
import TourSearch from "../components/common/tour-search/tour-search";
import ToursGrid from "../components/common/tours-grid/tours-grid";

export default async function GroupsPage({ searchParams }: SearcPageProps) {
  const params = await searchParams;
  const tours = await getTours("Group Tours", params);

  return (
    <main>
      <Navbar />
      <GroupTourHero />
      <TourSearch {...params} />
      <ToursGrid tours={tours} />
      <WhyGroupTravel />
      <TourHighlights />
      <GroupTourCTA />
      <Footer />
    </main>
  );
}
