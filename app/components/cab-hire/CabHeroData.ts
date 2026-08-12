export type CabHeroFeature = {
  title: string;
  text: string;
  icon: "shield" | "driver" | "car" | "price";
};

export type CabHeroData = {
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  features: CabHeroFeature[];
};

export const cabHero: CabHeroData = {
  eyebrow: "RELIABLE & COMFORTABLE",
  title: "Cab Hire in",
  highlight: "Mumbai",
  description:
    "Book the best cabs for local, outstation, airport transfers and luxury car hire at best prices.",

  features: [
    {
      title: "Safe & Secure",
      text: "Travel",
      icon: "shield",
    },
    {
      title: "Professional",
      text: "Drivers",
      icon: "driver",
    },
    {
      title: "Well Maintained",
      text: "Vehicles",
      icon: "car",
    },
    {
      title: "Best Price",
      text: "Guaranteed",
      icon: "price",
    },
  ],
};