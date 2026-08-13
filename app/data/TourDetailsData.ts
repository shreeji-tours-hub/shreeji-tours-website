export type TourDay = {
  day: number;
  title: string;
  description: string;
  overnight?: string;
};

export type TourDetail = {
  slug: string;
  title: string;
  duration: string;
  route: string;
  image: string;
  rating: string;
  travelers: string;

  highlights: string[];

  overview: string;

  tourImage: string;

  itinerary: TourDay[];

  inclusions: string[];

  exclusions: string[];
};

export const tourDetails: TourDetail[] = [
  // =====================================================
  // POPULAR TOUR 1
  // =====================================================

  {
    slug: "rajasthan-heritage",

    title: "Royal Rajasthan Heritage Tour",

    duration: "7 Days / 6 Nights",

    route: "Jaipur – Jodhpur – Jaisalmer – Udaipur",

    image:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1600&q=80",

    rating: "4.9/5",

    travelers: "500+",

    highlights: [
      "Explore Majestic Forts & Palaces",
      "Enjoy Camel Safari in the Thar Desert",
      "Boat Ride at Lake Pichola",
      "Discover Rich Culture & Heritage",
      "Rajasthani Cuisine Experience",
    ],

    overview:
      "Discover the royal heritage, vibrant culture and golden deserts of Rajasthan. This 7-day journey takes you through magnificent forts, colorful bazaars, serene lakes and unforgettable cultural experiences.",

    tourImage:
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80",

    itinerary: [
      {
        day: 1,
        title: "Arrive Jaipur",
        description:
          "Arrival at Jaipur Airport/Railway Station. Transfer to hotel. Evening visit to Birla Temple and local markets.",
        overnight: "Jaipur",
      },
      {
        day: 2,
        title: "Jaipur Sightseeing",
        description:
          "Visit Amber Fort, City Palace, Hawa Mahal, Jantar Mantar and explore local bazaars.",
        overnight: "Jaipur",
      },
      {
        day: 3,
        title: "Jaipur – Jodhpur",
        description:
          "Drive to Jodhpur. Visit Mehrangarh Fort, Jaswant Thada and local markets.",
        overnight: "Jodhpur",
      },
      {
        day: 4,
        title: "Jodhpur – Jaisalmer",
        description:
          "Drive to Jaisalmer. Check-in at hotel and enjoy an evening at leisure.",
        overnight: "Jaisalmer",
      },
      {
        day: 5,
        title: "Jaisalmer Sightseeing",
        description:
          "Visit Jaisalmer Fort, Patwon Ki Haveli and Gadisar Lake. Enjoy a camel safari at Sam Sand Dunes.",
        overnight: "Jaisalmer",
      },
      {
        day: 6,
        title: "Jaisalmer – Udaipur",
        description:
          "Drive to Udaipur. On arrival, check-in at the hotel and relax.",
        overnight: "Udaipur",
      },
      {
        day: 7,
        title: "Udaipur Sightseeing & Departure",
        description:
          "Visit City Palace, Jagdish Temple and Saheliyon Ki Bari. Enjoy a boat ride at Lake Pichola before departure.",
        overnight: "Tour Ends",
      },
    ],

    inclusions: [
      "Accommodation in 3*/4* hotels",
      "Daily breakfast & dinner",
      "Private AC vehicle for sightseeing & transfers",
      "Toll, parking and driver allowance",
      "Camel Safari in Jaisalmer",
      "Boat Ride in Udaipur",
      "All applicable taxes",
    ],

    exclusions: [
      "Airfare / Train fare",
      "Lunch & personal expenses",
      "Monument entry fees / Camera fees",
      "Adventure activities",
      "Travel insurance",
      "Anything not mentioned in inclusions",
    ],
  },

  // =====================================================
  // POPULAR TOUR 2
  // =====================================================

  {
    slug: "golden-triangle",

    title: "Golden Triangle India Tour",

    duration: "6 Days / 5 Nights",

    route: "Delhi – Agra – Jaipur",

    image:
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1600&q=80",

    rating: "4.8/5",

    travelers: "400+",

    highlights: [
      "Explore Delhi's Historic Landmarks",
      "Visit the Magnificent Taj Mahal",
      "Discover Jaipur's Royal Palaces",
      "Experience Indian Culture",
      "Enjoy Traditional Indian Cuisine",
    ],

    overview:
      "Experience India's famous Golden Triangle covering Delhi, Agra and Jaipur. Explore historic monuments, royal palaces, colorful markets and India's rich cultural heritage.",

    tourImage:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80",

    itinerary: [
      {
        day: 1,
        title: "Arrive Delhi",
        description:
          "Arrival in Delhi followed by hotel transfer and leisure.",
        overnight: "Delhi",
      },
      {
        day: 2,
        title: "Delhi Sightseeing",
        description:
          "Explore India Gate, Red Fort, Qutub Minar and other famous landmarks.",
        overnight: "Delhi",
      },
      {
        day: 3,
        title: "Delhi – Agra",
        description:
          "Drive to Agra and visit the magnificent Taj Mahal.",
        overnight: "Agra",
      },
      {
        day: 4,
        title: "Agra – Jaipur",
        description:
          "Visit Agra Fort and continue towards Jaipur.",
        overnight: "Jaipur",
      },
      {
        day: 5,
        title: "Jaipur Sightseeing",
        description:
          "Visit Amber Fort, City Palace, Hawa Mahal and Jantar Mantar.",
        overnight: "Jaipur",
      },
      {
        day: 6,
        title: "Jaipur Departure",
        description:
          "Morning shopping followed by transfer for departure.",
        overnight: "Tour Ends",
      },
    ],

    inclusions: [
      "Hotel accommodation",
      "Daily breakfast",
      "Private AC vehicle",
      "Airport/railway transfers",
      "Professional driver",
      "All applicable taxes",
    ],

    exclusions: [
      "Airfare / Train fare",
      "Monument entry fees",
      "Lunch and dinner",
      "Personal expenses",
      "Travel insurance",
    ],
  },

  // =====================================================
  // POPULAR TOUR 3
  // =====================================================

  {
    slug: "mumbai-sightseeing",

    title: "Mumbai Sightseeing Tour",

    duration: "2 Days / 1 Night",

    route: "Mumbai – Gateway of India – Marine Drive",

    image:
      "https://images.unsplash.com/photo-1595658658481-d53d3f999875?auto=format&fit=crop&w=1600&q=80",

    rating: "4.8/5",

    travelers: "300+",

    highlights: [
      "Gateway of India",
      "Marine Drive",
      "Chhatrapati Shivaji Terminus",
      "Elephanta Caves",
      "Mumbai Street Food",
    ],

    overview:
      "Explore the vibrant city of Mumbai with its iconic landmarks, colonial architecture, seaside promenades and famous local food.",

    tourImage:
      "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?auto=format&fit=crop&w=800&q=80",

    itinerary: [
      {
        day: 1,
        title: "Mumbai City Tour",
        description:
          "Visit Gateway of India, CST, Marine Drive, Colaba and other important attractions.",
        overnight: "Mumbai",
      },
      {
        day: 2,
        title: "Elephanta Caves & Departure",
        description:
          "Enjoy a boat ride to Elephanta Caves followed by departure.",
        overnight: "Tour Ends",
      },
    ],

    inclusions: [
      "Hotel accommodation",
      "Breakfast",
      "Private AC vehicle",
      "Sightseeing",
      "Driver allowance",
    ],

    exclusions: [
      "Entry tickets",
      "Lunch and dinner",
      "Personal expenses",
      "Travel insurance",
    ],
  },

  // =====================================================
  // FOREIGN TOUR 1
  // =====================================================

  {
    slug: "elephanta-caves",

    title: "Elephanta Caves Tour",

    duration: "1 Day",

    route: "Mumbai – Gateway of India – Elephanta Caves",

    image:
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1600&q=80",

    rating: "4.8/5",

    travelers: "250+",

    highlights: [
      "Gateway of India",
      "Ferry Ride",
      "UNESCO World Heritage Site",
      "Ancient Rock-Cut Temples",
      "Local Mumbai Experience",
    ],

    overview:
      "Discover the historic Elephanta Caves on a fascinating day trip from Mumbai. Enjoy a ferry ride from the Gateway of India and explore ancient rock-cut temples and sculptures.",

    tourImage:
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80",

    itinerary: [
      {
        day: 1,
        title: "Mumbai – Elephanta Caves",
        description:
          "Meet your guide at Gateway of India and take a ferry to Elephanta Island. Explore the famous rock-cut caves and return to Mumbai by evening.",
        overnight: "Tour Ends",
      },
    ],

    inclusions: [
      "Professional English-speaking guide",
      "Ferry tickets",
      "Local sightseeing",
      "Pickup and drop-off",
      "All applicable taxes",
    ],

    exclusions: [
      "Meals",
      "Personal expenses",
      "Camera fees",
      "Tips",
      "Anything not mentioned",
    ],
  },

  // =====================================================
  // FOREIGN TOUR 2
  // =====================================================

  {
    slug: "food-culture",

    title: "India Food & Culture Tour",

    duration: "3 Days / 2 Nights",

    route: "Delhi – Local Markets – Cultural Experiences",

    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1600&q=80",

    rating: "4.9/5",

    travelers: "200+",

    highlights: [
      "Traditional Indian Food",
      "Local Markets",
      "Cultural Performances",
      "Indian Cooking Experience",
      "Heritage Walk",
    ],

    overview:
      "Experience the flavors and traditions of India through local food, colorful markets, heritage walks and authentic cultural experiences.",

    tourImage:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",

    itinerary: [
      {
        day: 1,
        title: "Arrival & Food Walk",
        description:
          "Meet your local guide and explore traditional Indian street food and local markets.",
        overnight: "Delhi",
      },
      {
        day: 2,
        title: "Culture & Cooking Experience",
        description:
          "Participate in a traditional Indian cooking experience followed by a cultural performance.",
        overnight: "Delhi",
      },
      {
        day: 3,
        title: "Heritage Walk & Departure",
        description:
          "Enjoy a heritage walk through historic streets and transfer for departure.",
        overnight: "Tour Ends",
      },
    ],

    inclusions: [
      "Local English-speaking guide",
      "Food tasting experiences",
      "Cooking demonstration",
      "Heritage walk",
      "Local transportation",
    ],

    exclusions: [
      "International airfare",
      "Personal expenses",
      "Travel insurance",
      "Tips",
    ],
  },

  // =====================================================
  // FOREIGN TOUR 3
  // =====================================================

  {
    slug: "bollywood-experience",

    title: "Bollywood Experience Tour",

    duration: "1 Day",

    route: "Mumbai – Film City – Bollywood Experience",

    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1600&q=80",

    rating: "4.7/5",

    travelers: "180+",

    highlights: [
      "Bollywood Film City",
      "Behind-the-Scenes Experience",
      "Indian Cinema",
      "Film Sets",
      "Traditional Bollywood Dance",
    ],

    overview:
      "Step into the colorful world of Indian cinema with a Bollywood experience in Mumbai. Discover film sets, learn about Indian movies and enjoy a fun-filled cultural experience.",

    tourImage:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80",

    itinerary: [
      {
        day: 1,
        title: "Bollywood Experience",
        description:
          "Visit film locations and experience the world of Bollywood cinema. Enjoy a traditional dance performance and behind-the-scenes tour.",
        overnight: "Tour Ends",
      },
    ],

    inclusions: [
      "Bollywood tour",
      "Professional guide",
      "Film studio experience",
      "Dance performance",
      "Transportation",
    ],

    exclusions: [
      "Meals",
      "Personal expenses",
      "Photography charges",
      "Tips",
    ],
  },

  // =====================================================
  // FOREIGN TOUR 4
  // =====================================================

  {
    slug: "golden-triangle-foreign",

    title: "Golden Triangle Tours",

    duration: "6 Days / 5 Nights",

    route: "Delhi – Agra – Jaipur",

    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1600&q=80",

    rating: "4.9/5",

    travelers: "350+",

    highlights: [
      "Delhi Sightseeing",
      "Taj Mahal",
      "Agra Fort",
      "Amber Fort",
      "Indian Culture & Markets",
    ],

    overview:
      "Explore India's most iconic destinations on a specially designed Golden Triangle journey covering Delhi, Agra and Jaipur.",

    tourImage:
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80",

    itinerary: [
      {
        day: 1,
        title: "Arrive Delhi",
        description:
          "Airport pickup, hotel transfer and leisure time.",
        overnight: "Delhi",
      },
      {
        day: 2,
        title: "Delhi Sightseeing",
        description:
          "Explore India Gate, Red Fort, Qutub Minar and local markets.",
        overnight: "Delhi",
      },
      {
        day: 3,
        title: "Delhi – Agra",
        description:
          "Travel to Agra and visit the Taj Mahal.",
        overnight: "Agra",
      },
      {
        day: 4,
        title: "Agra – Jaipur",
        description:
          "Visit Agra Fort and continue towards Jaipur.",
        overnight: "Jaipur",
      },
      {
        day: 5,
        title: "Jaipur Sightseeing",
        description:
          "Visit Amber Fort, City Palace, Hawa Mahal and Jantar Mantar.",
        overnight: "Jaipur",
      },
      {
        day: 6,
        title: "Jaipur Departure",
        description:
          "Enjoy morning shopping before departure.",
        overnight: "Tour Ends",
      },
    ],

    inclusions: [
      "4-star hotel accommodation",
      "Daily breakfast",
      "Private AC vehicle",
      "English-speaking driver",
      "Airport transfers",
      "Sightseeing",
    ],

    exclusions: [
      "International airfare",
      "Monument entry fees",
      "Lunch and dinner",
      "Personal expenses",
      "Travel insurance",
    ],
  },

  // =====================================================
  // FOREIGN TOUR 5
  // =====================================================

  {
    slug: "mumbai-foreign-tour",

    title: "Mumbai Sightseeing Tours",

    duration: "2 Days / 1 Night",

    route: "Mumbai – Gateway of India – Marine Drive",

    image:
      "https://images.unsplash.com/photo-1595658658481-d53d3f999875?auto=format&fit=crop&w=1600&q=80",

    rating: "4.8/5",

    travelers: "300+",

    highlights: [
      "Gateway of India",
      "Marine Drive",
      "CST",
      "Colaba",
      "Mumbai Street Food",
    ],

    overview:
      "Explore the vibrant city of Mumbai with an international traveler-friendly itinerary covering its iconic landmarks, colonial architecture and local culture.",

    tourImage:
      "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?auto=format&fit=crop&w=800&q=80",

    itinerary: [
      {
        day: 1,
        title: "Mumbai Sightseeing",
        description:
          "Visit Gateway of India, Colaba, CST and Marine Drive.",
        overnight: "Mumbai",
      },
      {
        day: 2,
        title: "Local Experience & Departure",
        description:
          "Enjoy local food and shopping before departure.",
        overnight: "Tour Ends",
      },
    ],

    inclusions: [
      "Hotel accommodation",
      "Breakfast",
      "Private AC vehicle",
      "English-speaking guide",
      "Sightseeing",
    ],

    exclusions: [
      "Airfare",
      "Entry tickets",
      "Lunch and dinner",
      "Personal expenses",
    ],
  },

  // =====================================================
  // CUSTOM TOUR
  // =====================================================

  {
    slug: "customize-your-own-tour",

    title: "Customize Your Own India Tour",

    duration: "Flexible",

    route: "India – Customized Itinerary",

    image:
      "https://images.unsplash.com/photo-1577083552431-6e5fd01988a5?auto=format&fit=crop&w=1600&q=80",

    rating: "5.0/5",

    travelers: "100+",

    highlights: [
      "Fully Customized Itinerary",
      "Choose Your Destinations",
      "Flexible Duration",
      "Private Transportation",
      "Personalized Experiences",
    ],

    overview:
      "Create your own India journey according to your interests, travel style, budget and available time. Our travel experts will design a personalized itinerary for you.",

    tourImage:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80",

    itinerary: [
      {
        day: 1,
        title: "Customized Arrival",
        description:
          "Arrival and transfer according to your personalized itinerary.",
        overnight: "As Selected",
      },
      {
        day: 2,
        title: "Personalized Sightseeing",
        description:
          "Explore destinations and experiences selected specifically for you.",
        overnight: "As Selected",
      },
      {
        day: 3,
        title: "Continue Your Journey",
        description:
          "Enjoy additional destinations and activities according to your custom plan.",
        overnight: "As Selected",
      },
    ],

    inclusions: [
      "Customized itinerary",
      "Private transportation",
      "Hotel accommodation",
      "Personalized sightseeing",
      "Travel assistance",
    ],

    exclusions: [
      "International airfare",
      "Personal expenses",
      "Optional activities",
      "Travel insurance",
    ],
  },
];