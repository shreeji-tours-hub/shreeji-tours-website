export type PopularTour = {
  slug: string;
  title: string;
  duration: string;
  image: string;
  featured?: boolean;
};

export const popularTours: PopularTour[] = [
  {
    slug: "rajasthan-heritage",
    title: "Royal Rajasthan Heritage Tour",
    duration: "7 Days / 6 Nights",
    image:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=80",
    featured: true,
  },

  {
    slug: "golden-triangle",
    title: "Golden Triangle India Tour",
    duration: "6 Days / 5 Nights",
    image:
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80",
  },

  {
    slug: "mumbai-sightseeing",
    title: "Mumbai Sightseeing Tour",
    duration: "2 Days / 1 Night",
    image:
      "https://images.unsplash.com/photo-1595658658481-d53d3f999875?auto=format&fit=crop&w=1200&q=80",
  },

  {
    slug: "goa-beach-tour",
    title: "Goa Beach Holiday",
    duration: "4 Days / 3 Nights",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80",
  },

  {
    slug: "kerala-backwaters",
    title: "Kerala Backwaters Tour",
    duration: "5 Days / 4 Nights",
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
  },

  {
    slug: "himachal-tour",
    title: "Himachal Pradesh Tour",
    duration: "6 Days / 5 Nights",
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80",
  },
];