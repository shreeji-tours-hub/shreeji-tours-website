import { notFound } from "next/navigation";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

import TourDetail from "@/app/components/tours/TourDetail";
import { tourDetails } from "@/app/components/tours/TourDetailsData";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function TourPage({ params }: Props) {
  const { slug } = await params;

  const tour = tourDetails.find(
    (item) => item.slug === slug
  );

  if (!tour) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <TourDetail tour={tour} />

      <Footer />
    </>
  );
}