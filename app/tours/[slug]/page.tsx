import { notFound } from "next/navigation";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { getTour } from "@/app/controller/tour.controller";
import TourDetails from "@/app/components/common/tour-details/tour-details";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function TourPage({ params }: Props) {
  const { slug } = await params;

  const tour = await getTour(slug);

  console.log(JSON.stringify(tour));

  if (!tour) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <TourDetails tour={tour} />
      <Footer />
    </>
  );
}
