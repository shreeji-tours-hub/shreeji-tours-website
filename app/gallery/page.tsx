"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GalleryPage from "../components/gallery/GalleryPage";
import GalleryCTA from "../components/gallery/GalleryCTA";

export default function Gallery() {
  return (
    <>
      <Navbar />

      <main>
        <GalleryPage />
        <GalleryCTA />
      </main>

      <Footer />
    </>
  );
}