"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import GroupTourHero from "../components/group-tours/GroupTourHero";
import GroupTourSearch from "../components/group-tours/GroupTourSearch";
import PopularGroupTours from "../components/group-tours/PopularGroupTours";
import WhyGroupTravel from "../components/group-tours/WhyGroupTravel";
import GroupDestinations from "../components/group-tours/GroupDestinations";
import GroupTestimonials from "../components/group-tours/GroupTestimonials";
import GroupTourCTA from "../components/group-tours/GroupTourCTA";
import ContactCTA from "../components/contact/ContactCTA";


export default function GroupsPage() {
  return (
    <main>
      <Navbar />

      <GroupTourHero />
      <GroupTourSearch />
      <PopularGroupTours />
      <WhyGroupTravel />
      
      <GroupTourCTA />

      <Footer />
    </main>
  );
}