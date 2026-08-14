export type TourDetail = {
  slug: string;
  title: string;
  duration: string;
  image: string;
  description: string;
  destinations: string[];
  highlights: string[];
  itinerary: {
    day: string;
    title: string;
    description: string;
  }[];
  inclusions: string[];
  exclusions: string[];
};

export const tourDetails: TourDetail[] = [
  {
    slug: "rajasthan-heritage",
    title: "Royal Rajasthan Heritage Tour",
    duration: "7 Days / 6 Nights",
    image:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1600&q=80",

    description:
      "Experience the royal heritage, magnificent forts, colourful markets and rich culture of Rajasthan on this unforgettable journey through India's land of kings.",

    destinations: [
      "Jaipur",
      "Jodhpur",
      "Udaipur",
    ],

    highlights: [
      "Explore the magnificent Amber Fort",
      "Visit the City Palace of Jaipur",
      "Discover the Blue City of Jodhpur",
      "Visit the majestic Mehrangarh Fort",
      "Enjoy the romantic lakes of Udaipur",
      "Experience traditional Rajasthani culture",
    ],

    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Jaipur",
        description:
          "Arrive in Jaipur and check into your hotel. Spend the evening exploring the local markets.",
      },
      {
        day: "Day 2",
        title: "Jaipur Sightseeing",
        description:
          "Visit Amber Fort, City Palace, Hawa Mahal and Jantar Mantar.",
      },
      {
        day: "Day 3",
        title: "Jaipur to Jodhpur",
        description:
          "Travel to Jodhpur and explore the vibrant streets of the Blue City.",
      },
      {
        day: "Day 4",
        title: "Jodhpur Sightseeing",
        description:
          "Visit Mehrangarh Fort, Jaswant Thada and the old city.",
      },
      {
        day: "Day 5",
        title: "Jodhpur to Udaipur",
        description:
          "Travel towards Udaipur and enjoy the beautiful landscapes of Rajasthan.",
      },
      {
        day: "Day 6",
        title: "Udaipur Sightseeing",
        description:
          "Visit City Palace, Lake Pichola and Jagdish Temple.",
      },
      {
        day: "Day 7",
        title: "Departure",
        description:
          "Enjoy breakfast before your departure from Udaipur.",
      },
    ],

    inclusions: [
      "Hotel accommodation",
      "Daily breakfast",
      "Airport / railway station transfers",
      "Sightseeing as mentioned in itinerary",
      "Experienced local guide",
    ],

    exclusions: [
      "Flights or train tickets",
      "Personal expenses",
      "Travel insurance",
      "Meals not mentioned",
    ],
  },

  {
    slug: "golden-triangle",
    title: "Golden Triangle India Tour",
    duration: "6 Days / 5 Nights",
    image:
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1600&q=80",

    description:
      "Discover India's iconic Golden Triangle covering Delhi, Agra and Jaipur, combining history, architecture, culture and unforgettable experiences.",

    destinations: [
      "Delhi",
      "Agra",
      "Jaipur",
    ],

    highlights: [
      "Visit the Taj Mahal",
      "Explore India Gate and Delhi",
      "Discover Agra Fort",
      "Explore Amber Fort",
      "Visit Jaipur's City Palace",
      "Experience local markets",
    ],

    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Delhi",
        description:
          "Arrive in Delhi and explore the city's major landmarks.",
      },
      {
        day: "Day 2",
        title: "Delhi Sightseeing",
        description:
          "Visit India Gate, Qutub Minar, Humayun's Tomb and other attractions.",
      },
      {
        day: "Day 3",
        title: "Delhi to Agra",
        description:
          "Travel to Agra and visit Agra Fort.",
      },
      {
        day: "Day 4",
        title: "Taj Mahal and Jaipur",
        description:
          "Visit the Taj Mahal before travelling to Jaipur.",
      },
      {
        day: "Day 5",
        title: "Jaipur Sightseeing",
        description:
          "Explore Amber Fort, City Palace, Hawa Mahal and local markets.",
      },
      {
        day: "Day 6",
        title: "Departure",
        description:
          "Breakfast and departure from Jaipur.",
      },
    ],

    inclusions: [
      "Hotel accommodation",
      "Daily breakfast",
      "Private transportation",
      "Sightseeing",
      "Local guide",
    ],

    exclusions: [
      "Flights",
      "Personal expenses",
      "Travel insurance",
      "Lunch and dinner",
    ],
  },

  {
    slug: "mumbai-sightseeing",
    title: "Mumbai Sightseeing Tour",
    duration: "2 Days / 1 Night",
    image:
      "https://images.unsplash.com/photo-1595658658481-d53d3f999875?auto=format&fit=crop&w=1600&q=80",

    description:
      "Experience the vibrant city of Mumbai with its iconic landmarks, colonial architecture, seaside promenades and energetic local culture.",

    destinations: [
      "Gateway of India",
      "Marine Drive",
      "Colaba",
      "Bandra",
    ],

    highlights: [
      "Gateway of India",
      "Marine Drive",
      "Chhatrapati Shivaji Maharaj Terminus",
      "Colaba Causeway",
      "Bandra Bandstand",
      "Mumbai street food",
    ],

    itinerary: [
      {
        day: "Day 1",
        title: "South Mumbai",
        description:
          "Explore Gateway of India, Colaba, CST and Marine Drive.",
      },
      {
        day: "Day 2",
        title: "Mumbai City",
        description:
          "Visit Bandra, Bandstand and other popular city attractions before departure.",
      },
    ],

    inclusions: [
      "Hotel accommodation",
      "Breakfast",
      "Local transportation",
      "Sightseeing",
    ],

    exclusions: [
      "Personal expenses",
      "Travel insurance",
      "Meals not mentioned",
    ],
  },

  {
    slug: "goa-beach-tour",
    title: "Goa Beach Holiday",
    duration: "4 Days / 3 Nights",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1600&q=80",

    description:
      "Relax on Goa's beautiful beaches, explore its Portuguese heritage and enjoy the perfect combination of beaches, culture and nightlife.",

    destinations: [
      "North Goa",
      "South Goa",
      "Panaji",
    ],

    highlights: [
      "Relax at beautiful beaches",
      "Explore Old Goa",
      "Visit Basilica of Bom Jesus",
      "Enjoy Goa's local cuisine",
      "Explore Panaji",
      "Sunset beach experience",
    ],

    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Goa",
        description:
          "Arrive in Goa and relax at your hotel and nearby beach.",
      },
      {
        day: "Day 2",
        title: "North Goa",
        description:
          "Explore popular beaches and attractions across North Goa.",
      },
      {
        day: "Day 3",
        title: "South Goa",
        description:
          "Discover the peaceful beaches and heritage attractions of South Goa.",
      },
      {
        day: "Day 4",
        title: "Departure",
        description:
          "Enjoy breakfast before departure.",
      },
    ],

    inclusions: [
      "Hotel accommodation",
      "Breakfast",
      "Airport transfers",
      "Sightseeing",
    ],

    exclusions: [
      "Flights",
      "Personal expenses",
      "Water sports",
      "Travel insurance",
    ],
  },

  {
    slug: "kerala-backwaters",
    title: "Kerala Backwaters Tour",
    duration: "5 Days / 4 Nights",
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1600&q=80",

    description:
      "Experience the serene beauty of Kerala through its lush landscapes, peaceful backwaters, traditional villages and rich culture.",

    destinations: [
      "Kochi",
      "Munnar",
      "Alleppey",
    ],

    highlights: [
      "Kerala backwaters",
      "Houseboat experience",
      "Munnar tea plantations",
      "Kochi sightseeing",
      "Traditional Kerala cuisine",
    ],

    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Kochi",
        description:
          "Arrive in Kochi and explore the city's major attractions.",
      },
      {
        day: "Day 2",
        title: "Kochi to Munnar",
        description:
          "Travel through scenic landscapes to Munnar.",
      },
      {
        day: "Day 3",
        title: "Munnar Sightseeing",
        description:
          "Explore tea plantations and the beautiful hills of Munnar.",
      },
      {
        day: "Day 4",
        title: "Munnar to Alleppey",
        description:
          "Travel to Alleppey and enjoy a peaceful backwater experience.",
      },
      {
        day: "Day 5",
        title: "Departure",
        description:
          "Breakfast followed by departure.",
      },
    ],

    inclusions: [
      "Hotel accommodation",
      "Breakfast",
      "Houseboat experience",
      "Transportation",
      "Sightseeing",
    ],

    exclusions: [
      "Flights",
      "Personal expenses",
      "Travel insurance",
      "Meals not mentioned",
    ],
  },

  {
    slug: "himachal-tour",
    title: "Himachal Pradesh Tour",
    duration: "6 Days / 5 Nights",
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1600&q=80",

    description:
      "Explore the breathtaking mountains of Himachal Pradesh with scenic valleys, charming hill stations and unforgettable Himalayan landscapes.",

    destinations: [
      "Shimla",
      "Manali",
      "Solang Valley",
    ],

    highlights: [
      "Shimla sightseeing",
      "Manali Mall Road",
      "Solang Valley",
      "Himalayan landscapes",
      "Mountain views",
      "Local Himachali culture",
    ],

    itinerary: [
      {
        day: "Day 1",
        title: "Arrival in Shimla",
        description:
          "Arrive in Shimla and spend the evening exploring Mall Road.",
      },
      {
        day: "Day 2",
        title: "Shimla Sightseeing",
        description:
          "Visit popular attractions around Shimla.",
      },
      {
        day: "Day 3",
        title: "Shimla to Manali",
        description:
          "Travel through scenic Himalayan landscapes towards Manali.",
      },
      {
        day: "Day 4",
        title: "Manali Sightseeing",
        description:
          "Explore the major attractions of Manali.",
      },
      {
        day: "Day 5",
        title: "Solang Valley",
        description:
          "Enjoy the beautiful landscapes and activities at Solang Valley.",
      },
      {
        day: "Day 6",
        title: "Departure",
        description:
          "Breakfast followed by departure.",
      },
    ],

    inclusions: [
      "Hotel accommodation",
      "Breakfast",
      "Transportation",
      "Sightseeing",
      "Driver",
    ],

    exclusions: [
      "Flights",
      "Personal expenses",
      "Adventure activities",
      "Travel insurance",
    ],
  },
];