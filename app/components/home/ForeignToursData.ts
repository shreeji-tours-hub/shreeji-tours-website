export type ForeignTourDay = {
  day: number;
  title: string;
  description: string;
  overnight?: string;
};

export type ForeignTour = {
  slug: string;
  title: string;
  description: string;
  image: string;
  alt: string;

  duration: string;
  route: string;
  rating: string;
  travelers: string;

  highlights: string[];
  overview: string;
  tourImage: string;

  itinerary: ForeignTourDay[];

  inclusions: string[];
  exclusions: string[];
};

export const foreignTours: ForeignTour[] = [
  {
    slug: "mumbai-sightseeing",

    title: "Mumbai Sightseeing Tours",

    description:
      "Explore the vibrant city of Mumbai",

    image:
      "https://images.unsplash.com/photo-1595658658481-d53d3f999875?auto=format&fit=crop&w=1600&q=80",

    alt: "Mumbai Sightseeing",

    duration: "2 Days / 1 Night",

    route:
      "Gateway of India – Marine Drive – Colaba – CST",

    rating: "4.8/5",

    travelers: "300+",

    highlights: [
      "Explore the Gateway of India",
      "Experience Marine Drive",
      "Discover Historic South Mumbai",
      "Visit Chhatrapati Shivaji Terminus",
      "Taste Authentic Mumbai Street Food",
    ],

    overview:
      "Discover the energetic city of Mumbai, India's financial capital and a fascinating blend of colonial architecture, modern skyscrapers, Bollywood culture and seaside charm. This specially designed tour allows international travelers to experience the best of Mumbai in a comfortable and well-organized journey.",

    tourImage:
      "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?auto=format&fit=crop&w=800&q=80",

    itinerary: [
      {
        day: 1,
        title: "Mumbai City Sightseeing",
        description:
          "Arrival in Mumbai followed by hotel transfer. Visit Gateway of India, Colaba Causeway, Chhatrapati Shivaji Terminus, Marine Drive and other important landmarks.",

        overnight: "Mumbai",
      },

      {
        day: 2,
        title: "Mumbai Experience & Departure",
        description:
          "Enjoy breakfast followed by local sightseeing and shopping. Explore Mumbai's markets and enjoy famous local food before departure.",

        overnight: "Tour Ends",
      },
    ],

    inclusions: [
      "Hotel accommodation",
      "Daily breakfast",
      "Private AC vehicle",
      "Airport / railway station transfers",
      "Professional driver",
      "Mumbai sightseeing",
      "All applicable taxes",
    ],

    exclusions: [
      "Airfare / Train fare",
      "Monument entry fees",
      "Lunch and dinner",
      "Personal expenses",
      "Travel insurance",
      "Anything not mentioned in inclusions",
    ],
  },

  {
    slug: "elephanta-caves",

    title: "Elephanta Caves Tours",

    description:
      "UNESCO World Heritage Site Experience",

    image:
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1600&q=80",

    alt: "Elephanta Caves",

    duration: "1 Day",

    route:
      "Mumbai – Gateway of India – Elephanta Caves",

    rating: "4.8/5",

    travelers: "250+",

    highlights: [
      "Boat Ride from Gateway of India",
      "Explore UNESCO World Heritage Caves",
      "Discover Ancient Shiva Sculptures",
      "Learn India's Ancient History",
      "Enjoy Scenic Arabian Sea Views",
    ],

    overview:
      "Explore the historic Elephanta Caves, one of India's most fascinating UNESCO World Heritage Sites. Enjoy a scenic ferry ride from Mumbai and discover ancient rock-cut temples, impressive sculptures and centuries of Indian history.",

    tourImage:
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80",

    itinerary: [
      {
        day: 1,
        title: "Mumbai – Elephanta Caves",
        description:
          "Begin the tour from Gateway of India and enjoy a ferry ride to Elephanta Island. Explore the ancient cave temples and magnificent sculptures before returning to Mumbai.",

        overnight: "Tour Ends",
      },
    ],

    inclusions: [
      "Private AC vehicle",
      "Gateway of India transfer",
      "Elephanta ferry assistance",
      "Professional driver",
      "Tour assistance",
      "All applicable taxes",
    ],

    exclusions: [
      "Ferry tickets",
      "Cave entry fees",
      "Food and beverages",
      "Personal expenses",
      "Travel insurance",
    ],
  },

  {
    slug: "food-culture",

    title: "Food & Culture Tours",

    description:
      "Taste India's rich culture & food",

    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1600&q=80",

    alt: "Indian Food and Culture",

    duration: "2 Days / 1 Night",

    route:
      "Mumbai – Local Markets – Heritage Areas – Food Streets",

    rating: "4.9/5",

    travelers: "350+",

    highlights: [
      "Taste Authentic Indian Cuisine",
      "Explore Traditional Markets",
      "Discover Indian Culture",
      "Experience Local Lifestyle",
      "Enjoy Guided Food Walks",
    ],

    overview:
      "Experience India through its food, traditions and everyday culture. Explore vibrant markets, taste authentic local dishes and discover the stories behind India's diverse culinary traditions.",

    tourImage:
      "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",

    itinerary: [
      {
        day: 1,
        title: "Mumbai Food & Heritage Walk",
        description:
          "Explore historic areas of Mumbai and visit traditional food markets. Taste popular Indian snacks, sweets and local specialties.",

        overnight: "Mumbai",
      },

      {
        day: 2,
        title: "Culture & Local Experience",
        description:
          "Discover traditional markets, local crafts and cultural landmarks before enjoying a final Indian meal and departure.",

        overnight: "Tour Ends",
      },
    ],

    inclusions: [
      "Private transportation",
      "Professional local guide",
      "Food tasting experiences",
      "Heritage sightseeing",
      "Breakfast",
      "All applicable taxes",
    ],

    exclusions: [
      "International airfare",
      "Personal shopping",
      "Additional food and beverages",
      "Travel insurance",
      "Personal expenses",
    ],
  },

  {
    slug: "bollywood-experience",

    title: "Bollywood Experience",

    description:
      "Step into the world of Indian cinema",

    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1600&q=80",

    alt: "Bollywood Experience",

    duration: "1 Day",

    route:
      "Mumbai – Bollywood Studio – Film City",

    rating: "4.9/5",

    travelers: "200+",

    highlights: [
      "Visit Bollywood Film Locations",
      "Explore Film City",
      "Learn About Indian Cinema",
      "Experience Bollywood Dance",
      "Discover Behind-the-Scenes Stories",
    ],

    overview:
      "Step into the colourful world of Bollywood and discover why Mumbai is known as the heart of Indian cinema. Visit famous film locations, learn about movie production and experience the energy of India's entertainment industry.",

    tourImage:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=80",

    itinerary: [
      {
        day: 1,
        title: "Bollywood Experience",
        description:
          "Visit Bollywood-related locations and experience the world of Indian cinema. Explore film sets, learn about movie production and enjoy a Bollywood-themed experience.",

        overnight: "Tour Ends",
      },
    ],

    inclusions: [
      "Private AC vehicle",
      "Professional guide",
      "Bollywood experience",
      "Sightseeing",
      "Hotel pickup and drop",
      "All applicable taxes",
    ],

    exclusions: [
      "Studio entry charges where applicable",
      "Food and beverages",
      "Personal expenses",
      "Travel insurance",
    ],
  },

  {
    slug: "golden-triangle",

    title: "Golden Triangle Tours",

    description:
      "Delhi – Agra – Jaipur Experience",

    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1600&q=80",

    alt: "Golden Triangle India",

    duration: "6 Days / 5 Nights",

    route:
      "Delhi – Agra – Jaipur",

    rating: "4.9/5",

    travelers: "500+",

    highlights: [
      "Explore Historic Delhi",
      "Visit the Magnificent Taj Mahal",
      "Discover Jaipur's Royal Palaces",
      "Experience Indian Heritage",
      "Enjoy Traditional Indian Cuisine",
    ],

    overview:
      "Experience India's iconic Golden Triangle covering Delhi, Agra and Jaipur. This carefully planned journey introduces international travelers to India's history, architecture, royal heritage, colorful markets and unforgettable cultural experiences.",

    tourImage:
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80",

    itinerary: [
      {
        day: 1,
        title: "Arrive Delhi",
        description:
          "Arrival in Delhi followed by airport or railway station transfer to the hotel. Evening at leisure.",

        overnight: "Delhi",
      },

      {
        day: 2,
        title: "Delhi Sightseeing",
        description:
          "Visit India Gate, Red Fort, Qutub Minar and other famous historical landmarks.",

        overnight: "Delhi",
      },

      {
        day: 3,
        title: "Delhi – Agra",
        description:
          "Drive to Agra and visit the magnificent Taj Mahal. Explore the local markets in the evening.",

        overnight: "Agra",
      },

      {
        day: 4,
        title: "Agra – Jaipur",
        description:
          "Visit Agra Fort before continuing to Jaipur, the Pink City of India.",

        overnight: "Jaipur",
      },

      {
        day: 5,
        title: "Jaipur Sightseeing",
        description:
          "Visit Amber Fort, City Palace, Hawa Mahal and Jantar Mantar. Explore Jaipur's colorful bazaars.",

        overnight: "Jaipur",
      },

      {
        day: 6,
        title: "Jaipur Departure",
        description:
          "Enjoy breakfast and some final shopping before transfer for departure.",

        overnight: "Tour Ends",
      },
    ],

    inclusions: [
      "Hotel accommodation",
      "Daily breakfast",
      "Private AC vehicle",
      "Airport / railway transfers",
      "Professional driver",
      "Sightseeing",
      "All applicable taxes",
    ],

    exclusions: [
      "International airfare",
      "Monument entry fees",
      "Lunch and dinner",
      "Personal expenses",
      "Travel insurance",
    ],
  },

  {
    slug: "customize-your-own-tour",

    title: "Customize Your Own Tour",

    description:
      "We create tours as per your interest",

    image:
      "https://images.unsplash.com/photo-1577083552431-6e5fd01988a5?auto=format&fit=crop&w=1600&q=80",

    alt: "Customized India Tour",

    duration: "Flexible",

    route:
      "Customized according to your interests",

    rating: "5.0/5",

    travelers: "100+",

    highlights: [
      "Completely Customized Itinerary",
      "Choose Your Destinations",
      "Flexible Travel Duration",
      "Private Transportation",
      "Personalized Travel Experience",
    ],

    overview:
      "Create your own unforgettable Indian journey with a completely customized itinerary. Choose the destinations, experiences, accommodation and travel style that best match your interests and schedule.",

    tourImage:
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80",

    itinerary: [
      {
        day: 1,
        title: "Your Customized Journey Begins",
        description:
          "Your tour starts according to your selected destination, activities and travel preferences.",

        overnight: "As Selected",
      },

      {
        day: 2,
        title: "Personalized Experiences",
        description:
          "Continue exploring the destinations and experiences selected specifically for your trip.",

        overnight: "As Selected",
      },

      {
        day: 3,
        title: "Continue Your Journey",
        description:
          "Enjoy more sightseeing, cultural experiences, food and activities according to your personalized itinerary.",

        overnight: "As Selected",
      },
    ],

    inclusions: [
      "Customized itinerary",
      "Private transportation",
      "Hotel accommodation as selected",
      "Professional driver",
      "Personalized sightseeing",
      "Travel assistance",
    ],

    exclusions: [
      "International airfare",
      "Monument entry fees",
      "Personal expenses",
      "Activities not included in itinerary",
      "Travel insurance",
    ],
  },
];