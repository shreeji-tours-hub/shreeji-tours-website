export type CabService = {
  slug: string;
  title: string;
  description: string;
  image: string;
};

export const cabServices: CabService[] = [
  {
    slug: "mumbai-local",
    title: "Mumbai Local",
    description:
      "Best cabs for local travel in Mumbai. 4 / 8 / 12 hour packages available.",
    image:
      "https://images.unsplash.com/photo-1595658658481-d53d3f999875?auto=format&fit=crop&w=800&q=85",
  },

  {
    slug: "outstation-cabs",
    title: "Outstation Cabs",
    description:
      "Comfortable and affordable outstation cabs for one way or round trips.",
    image:
      "https://images.unsplash.com/photo-1473445361085-b9a07f55608b?auto=format&fit=crop&w=800&q=85",
  },

  {
    slug: "airport-transfer",
    title: "Airport Transfer",
    description:
      "On-time pickup and drop to Mumbai Airport with 24×7 availability.",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=85",
  },

  {
    slug: "luxury-car-hire",
    title: "Luxury Car Hire",
    description:
      "Travel in style with luxury cars perfect for business trips and events.",
    image:
      "https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=800&q=85",
  },
];