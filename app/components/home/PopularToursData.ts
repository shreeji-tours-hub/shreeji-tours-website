export type PopularTour = {
  slug: string;
  title: string;
  duration: string;
  image: string;
  description?: string;
  featured?: boolean;
};

export const popularTours: PopularTour[] = [
  {
    slug: "mumbai-sightseeing",
    title: "Mumbai Sightseeing Tours",
    duration: "2 Days / 1 Night",
    description:
      "Explore the vibrant city of Mumbai with our specially designed sightseeing experience.",
    image:
      "https://images.unsplash.com/photo-1595658658481-d53d3f999875?auto=format&fit=crop&w=1200&q=80",
    featured: true,
  },

  {
    slug: "kerala-backwaters",
    title: "Kerala Package",
    duration: "5 Days / 4 Nights",
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80",
  },

  {
    slug: "rajasthan-heritage",
    title: "Rajasthan Package",
    duration: "7 Days / 6 Nights",
    image:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1200&q=80",
  },

  {
    slug: "himachal-tour",
    title: "Himachal Package",
    duration: "5 Days / 4 Nights",
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=80",
  },

  {
    slug: "goa-beach-tour",
    title: "Goa Package",
    duration: "5 Days / 4 Nights",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80",
  },

  {
    slug: "golden-triangle",
    title: "South India Package",
    duration: "5 Days / 4 Nights",
    image:
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80",
  },
];