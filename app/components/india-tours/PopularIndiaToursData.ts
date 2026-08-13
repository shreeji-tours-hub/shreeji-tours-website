export interface IndiaTour {
  slug: string;
  tag: string;
  title: string;
  location: string;
  duration: string;
  image: string;

  overview: string;
  highlights: string[];

  itinerary: {
    day: number;
    title: string;
    description: string;
    overnight: string;
  }[];

  inclusions: string[];
  exclusions: string[];

  tourImage: string;
}

export const indiaTours: IndiaTour[] = [
  {
    slug: "golden-triangle-tour",
    tag: "Best Seller",
    title: "Golden Triangle Tour",
    location: "Delhi - Agra - Jaipur",
    duration: "5 Days / 4 Nights",
    image:
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=700&q=80",

    overview:
      "Discover India's iconic Golden Triangle covering Delhi, Agra and Jaipur. Experience magnificent monuments, royal palaces, vibrant markets and India's rich cultural heritage on this unforgettable journey.",

    highlights: [
      "Explore historic Delhi and its famous landmarks",
      "Visit the magnificent Taj Mahal in Agra",
      "Discover the royal palaces of Jaipur",
      "Experience traditional Indian culture and cuisine",
      "Private sightseeing with comfortable transportation",
      "Professional local assistance throughout the tour",
    ],

    itinerary: [
      {
        day: 1,
        title: "Arrival in Delhi & Delhi Sightseeing",
        description:
          "Arrive in Delhi and explore major attractions including India Gate, Parliament House, Qutub Minar and Humayun's Tomb.",
        overnight: "Delhi",
      },
      {
        day: 2,
        title: "Delhi to Agra",
        description:
          "Travel to Agra and visit the impressive Agra Fort. Enjoy the evening exploring local markets.",
        overnight: "Agra",
      },
      {
        day: 3,
        title: "Taj Mahal & Jaipur",
        description:
          "Visit the Taj Mahal in the morning before travelling towards Jaipur, the Pink City.",
        overnight: "Jaipur",
      },
      {
        day: 4,
        title: "Jaipur Sightseeing",
        description:
          "Explore Amber Fort, City Palace, Hawa Mahal and Jantar Mantar. Experience Jaipur's colourful markets.",
        overnight: "Jaipur",
      },
      {
        day: 5,
        title: "Jaipur Departure",
        description:
          "Enjoy breakfast and some free time before departure, concluding your Golden Triangle journey.",
        overnight: "Departure",
      },
    ],

    inclusions: [
      "Accommodation in selected hotels",
      "Daily breakfast",
      "Private air-conditioned transportation",
      "Professional driver",
      "Sightseeing as mentioned in itinerary",
      "Pickup and drop-off services",
    ],

    exclusions: [
      "International or domestic flights",
      "Monument entrance fees",
      "Personal expenses",
      "Lunch and dinner",
      "Travel insurance",
      "Anything not mentioned in inclusions",
    ],

    tourImage:
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1000&q=80",
  },

  {
    slug: "char-dham-yatra",
    tag: "Spiritual",
    title: "Char Dham Yatra",
    location: "Yamunotri - Gangotri - Kedarnath - Badrinath",
    duration: "10 Days / 9 Nights",
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=700&q=80",

    overview:
      "Embark on a spiritually enriching journey through the sacred Char Dham of Uttarakhand. Visit Yamunotri, Gangotri, Kedarnath and Badrinath while experiencing the breathtaking Himalayan landscape.",

    highlights: [
      "Visit all four sacred Char Dham temples",
      "Experience the beauty of the Himalayas",
      "Visit the sacred Kedarnath Temple",
      "Explore Badrinath and Mana Village",
      "Spiritual and cultural experiences",
      "Comfortable transportation and assistance",
    ],

    itinerary: [
      {
        day: 1,
        title: "Haridwar to Barkot",
        description:
          "Begin the pilgrimage journey towards Barkot through scenic Himalayan roads.",
        overnight: "Barkot",
      },
      {
        day: 2,
        title: "Yamunotri Darshan",
        description:
          "Travel towards Janki Chatti and proceed for the sacred Yamunotri temple visit.",
        overnight: "Barkot",
      },
      {
        day: 3,
        title: "Barkot to Uttarkashi",
        description:
          "Drive towards Uttarkashi and explore the peaceful surroundings.",
        overnight: "Uttarkashi",
      },
      {
        day: 4,
        title: "Gangotri Darshan",
        description:
          "Visit the sacred Gangotri Temple and enjoy the beautiful Himalayan scenery.",
        overnight: "Uttarkashi",
      },
      {
        day: 5,
        title: "Uttarkashi to Guptkashi",
        description:
          "Continue towards Guptkashi through beautiful mountain valleys.",
        overnight: "Guptkashi",
      },
      {
        day: 6,
        title: "Kedarnath Yatra",
        description:
          "Proceed towards Kedarnath for darshan of the sacred Kedarnath Temple.",
        overnight: "Kedarnath",
      },
      {
        day: 7,
        title: "Kedarnath to Guptkashi",
        description:
          "Complete the return journey from Kedarnath and rest at Guptkashi.",
        overnight: "Guptkashi",
      },
      {
        day: 8,
        title: "Guptkashi to Badrinath",
        description:
          "Travel towards Badrinath through scenic mountain routes.",
        overnight: "Badrinath",
      },
      {
        day: 9,
        title: "Badrinath Darshan",
        description:
          "Visit Badrinath Temple and explore Mana Village and nearby attractions.",
        overnight: "Badrinath",
      },
      {
        day: 10,
        title: "Departure",
        description:
          "Begin the return journey after breakfast.",
        overnight: "Departure",
      },
    ],

    inclusions: [
      "Hotel accommodation",
      "Daily breakfast",
      "Transportation",
      "Driver services",
      "Temple visits as mentioned",
      "Tour assistance",
    ],

    exclusions: [
      "Flights",
      "Helicopter services",
      "Personal expenses",
      "Travel insurance",
      "Meals not mentioned",
      "Anything not mentioned above",
    ],

    tourImage:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80",
  },

  {
    slug: "kerala-backwaters-tour",
    tag: "Popular",
    title: "Kerala Backwaters Tour",
    location: "Cochin - Munnar - Alleppey - Kovalam",
    duration: "6 Days / 5 Nights",
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=700&q=80",

    overview:
      "Explore Kerala's lush landscapes, peaceful backwaters, tea plantations and tropical beaches. This journey combines nature, culture and relaxation across some of Kerala's most beautiful destinations.",

    highlights: [
      "Explore the tea plantations of Munnar",
      "Enjoy a traditional Kerala houseboat",
      "Experience Alleppey's peaceful backwaters",
      "Relax at Kovalam Beach",
      "Explore Cochin's heritage attractions",
      "Experience authentic Kerala cuisine",
    ],

    itinerary: [
      {
        day: 1,
        title: "Arrival in Cochin",
        description:
          "Arrive in Cochin and explore the city's historic landmarks and waterfront.",
        overnight: "Cochin",
      },
      {
        day: 2,
        title: "Cochin to Munnar",
        description:
          "Drive through scenic landscapes towards Munnar and explore the surrounding tea plantations.",
        overnight: "Munnar",
      },
      {
        day: 3,
        title: "Munnar Sightseeing",
        description:
          "Explore tea gardens, viewpoints and natural attractions around Munnar.",
        overnight: "Munnar",
      },
      {
        day: 4,
        title: "Munnar to Alleppey",
        description:
          "Travel to Alleppey and board a traditional Kerala houseboat.",
        overnight: "Alleppey",
      },
      {
        day: 5,
        title: "Alleppey to Kovalam",
        description:
          "Continue towards Kovalam and relax by the Arabian Sea.",
        overnight: "Kovalam",
      },
      {
        day: 6,
        title: "Kovalam Departure",
        description:
          "Enjoy breakfast before departure.",
        overnight: "Departure",
      },
    ],

    inclusions: [
      "Hotel accommodation",
      "Daily breakfast",
      "Private transportation",
      "Houseboat experience",
      "Sightseeing",
      "Driver assistance",
    ],

    exclusions: [
      "Flights",
      "Personal expenses",
      "Lunch and dinner",
      "Travel insurance",
      "Entry tickets",
      "Anything not mentioned",
    ],

    tourImage:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=80",
  },

  {
    slug: "rajasthan-heritage-tour",
    tag: "Heritage",
    title: "Rajasthan Heritage Tour",
    location: "Jaipur - Jodhpur - Udaipur - Jaisalmer",
    duration: "7 Days / 6 Nights",
    image:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=700&q=80",

    overview:
      "Experience the royal heritage of Rajasthan through magnificent forts, grand palaces, colourful markets and desert landscapes.",

    highlights: [
      "Explore Jaipur's royal palaces",
      "Visit the magnificent Mehrangarh Fort",
      "Discover beautiful Udaipur lakes",
      "Experience Jaisalmer's golden architecture",
      "Explore traditional Rajasthan markets",
      "Experience authentic Rajasthani culture",
    ],

    itinerary: [
      {
        day: 1,
        title: "Arrival in Jaipur",
        description: "Arrive in Jaipur and explore the Pink City.",
        overnight: "Jaipur",
      },
      {
        day: 2,
        title: "Jaipur Sightseeing",
        description:
          "Visit Amber Fort, City Palace, Hawa Mahal and Jantar Mantar.",
        overnight: "Jaipur",
      },
      {
        day: 3,
        title: "Jaipur to Jodhpur",
        description:
          "Travel to Jodhpur and explore the Blue City.",
        overnight: "Jodhpur",
      },
      {
        day: 4,
        title: "Jodhpur to Udaipur",
        description:
          "Visit Mehrangarh Fort before continuing towards Udaipur.",
        overnight: "Udaipur",
      },
      {
        day: 5,
        title: "Udaipur Sightseeing",
        description:
          "Explore City Palace, Lake Pichola and the beautiful streets of Udaipur.",
        overnight: "Udaipur",
      },
      {
        day: 6,
        title: "Udaipur to Jaisalmer",
        description:
          "Travel towards the golden city of Jaisalmer.",
        overnight: "Jaisalmer",
      },
      {
        day: 7,
        title: "Jaisalmer Departure",
        description:
          "Explore the city before departure.",
        overnight: "Departure",
      },
    ],

    inclusions: [
      "Hotel accommodation",
      "Daily breakfast",
      "Private transportation",
      "Driver services",
      "Sightseeing",
      "Tour assistance",
    ],

    exclusions: [
      "Flights",
      "Monument entrance fees",
      "Personal expenses",
      "Meals not mentioned",
      "Travel insurance",
      "Anything not mentioned",
    ],

    tourImage:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=1000&q=80",
  },

  {
    slug: "himachal-tour-package",
    tag: "Nature",
    title: "Himachal Tour Package",
    location: "Shimla - Manali - Dharamshala - Dalhousie",
    duration: "6 Days / 5 Nights",
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=700&q=80",

    overview:
      "Discover the spectacular mountains of Himachal Pradesh through charming hill stations, scenic valleys and peaceful Himalayan landscapes.",

    highlights: [
      "Explore Shimla's colonial charm",
      "Visit Manali's beautiful valleys",
      "Experience Dharamshala's Tibetan culture",
      "Discover Dalhousie's scenic landscapes",
      "Enjoy Himalayan mountain views",
      "Experience local food and culture",
    ],

    itinerary: [
      {
        day: 1,
        title: "Arrival in Shimla",
        description: "Arrive in Shimla and explore the Mall Road.",
        overnight: "Shimla",
      },
      {
        day: 2,
        title: "Shimla Sightseeing",
        description:
          "Visit Kufri, Jakhoo Temple and major attractions.",
        overnight: "Shimla",
      },
      {
        day: 3,
        title: "Shimla to Manali",
        description:
          "Travel through scenic mountain roads towards Manali.",
        overnight: "Manali",
      },
      {
        day: 4,
        title: "Manali Sightseeing",
        description:
          "Explore Solang Valley, Hadimba Temple and Old Manali.",
        overnight: "Manali",
      },
      {
        day: 5,
        title: "Manali to Dharamshala",
        description:
          "Travel towards Dharamshala and explore the town.",
        overnight: "Dharamshala",
      },
      {
        day: 6,
        title: "Departure",
        description:
          "Enjoy breakfast before departure.",
        overnight: "Departure",
      },
    ],

    inclusions: [
      "Hotel accommodation",
      "Breakfast",
      "Private transportation",
      "Driver",
      "Sightseeing",
      "Tour assistance",
    ],

    exclusions: [
      "Flights",
      "Personal expenses",
      "Adventure activities",
      "Travel insurance",
      "Entry fees",
      "Anything not mentioned",
    ],

    tourImage:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1000&q=80",
  },

  {
    slug: "wildlife-tour",
    tag: "Wildlife",
    title: "Wildlife Tour",
    location: "Jim Corbett - Nainital - Ranikhet",
    duration: "5 Days / 4 Nights",
    image:
      "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=700&q=80",

    overview:
      "Experience India's fascinating wildlife and Himalayan scenery on a journey combining Jim Corbett National Park with Nainital and Ranikhet.",

    highlights: [
      "Wildlife safari in Jim Corbett",
      "Explore Nainital Lake",
      "Visit scenic Ranikhet",
      "Experience Himalayan landscapes",
      "Spot native wildlife",
      "Enjoy peaceful nature experiences",
    ],

    itinerary: [
      {
        day: 1,
        title: "Arrival in Jim Corbett",
        description:
          "Arrive at Jim Corbett and relax amidst nature.",
        overnight: "Jim Corbett",
      },
      {
        day: 2,
        title: "Corbett Safari",
        description:
          "Enjoy an exciting wildlife safari through the national park.",
        overnight: "Jim Corbett",
      },
      {
        day: 3,
        title: "Corbett to Nainital",
        description:
          "Travel to Nainital and explore the beautiful lake town.",
        overnight: "Nainital",
      },
      {
        day: 4,
        title: "Nainital to Ranikhet",
        description:
          "Explore Ranikhet's peaceful mountain scenery.",
        overnight: "Ranikhet",
      },
      {
        day: 5,
        title: "Departure",
        description:
          "Enjoy breakfast before departure.",
        overnight: "Departure",
      },
    ],

    inclusions: [
      "Hotel accommodation",
      "Breakfast",
      "Private transportation",
      "Safari assistance",
      "Sightseeing",
      "Driver",
    ],

    exclusions: [
      "Flights",
      "Safari fees",
      "Personal expenses",
      "Travel insurance",
      "Meals not mentioned",
      "Anything not mentioned",
    ],

    tourImage:
      "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1000&q=80",
  },

  {
    slug: "goa-holiday-package",
    tag: "Beach",
    title: "Goa Holiday Package",
    location: "North Goa - South Goa",
    duration: "4 Days / 3 Nights",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=700&q=80",

    overview:
      "Enjoy a relaxing Goa holiday filled with beautiful beaches, Portuguese heritage, local cuisine and vibrant coastal culture.",

    highlights: [
      "Relax on Goa's beautiful beaches",
      "Explore North Goa",
      "Discover South Goa",
      "Visit Portuguese heritage sites",
      "Enjoy local Goan cuisine",
      "Experience Goa's vibrant nightlife",
    ],

    itinerary: [
      {
        day: 1,
        title: "Arrival in Goa",
        description:
          "Arrive in Goa and relax at the hotel before exploring nearby beaches.",
        overnight: "Goa",
      },
      {
        day: 2,
        title: "North Goa Sightseeing",
        description:
          "Visit popular beaches, forts and attractions across North Goa.",
        overnight: "Goa",
      },
      {
        day: 3,
        title: "South Goa Sightseeing",
        description:
          "Explore peaceful beaches and heritage attractions in South Goa.",
        overnight: "Goa",
      },
      {
        day: 4,
        title: "Departure",
        description:
          "Enjoy breakfast and free time before departure.",
        overnight: "Departure",
      },
    ],

    inclusions: [
      "Hotel accommodation",
      "Breakfast",
      "Private transportation",
      "Sightseeing",
      "Airport transfers",
      "Tour assistance",
    ],

    exclusions: [
      "Flights",
      "Personal expenses",
      "Water sports",
      "Travel insurance",
      "Entry fees",
      "Anything not mentioned",
    ],

    tourImage:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1000&q=80",
  },

  {
    slug: "south-india-temple-tour",
    tag: "Pilgrimage",
    title: "South India Temple Tour",
    location: "Chennai - Tirupati - Rameshwaram - Madurai",
    duration: "6 Days / 5 Nights",
    image:
      "https://images.unsplash.com/photo-1602643163983-ed0babc39797?auto=format&fit=crop&w=700&q=80",

    overview:
      "Explore the spiritual and architectural heritage of South India through magnificent temples, sacred cities and centuries-old traditions.",

    highlights: [
      "Visit Tirupati Temple",
      "Explore the sacred city of Rameshwaram",
      "Visit the Meenakshi Temple in Madurai",
      "Experience South Indian culture",
      "Discover magnificent temple architecture",
      "Enjoy traditional South Indian cuisine",
    ],

    itinerary: [
      {
        day: 1,
        title: "Arrival in Chennai",
        description:
          "Arrive in Chennai and explore important city attractions.",
        overnight: "Chennai",
      },
      {
        day: 2,
        title: "Chennai to Tirupati",
        description:
          "Travel to Tirupati and visit the sacred temple.",
        overnight: "Tirupati",
      },
      {
        day: 3,
        title: "Tirupati to Rameshwaram",
        description:
          "Continue the spiritual journey towards Rameshwaram.",
        overnight: "Rameshwaram",
      },
      {
        day: 4,
        title: "Rameshwaram Sightseeing",
        description:
          "Visit Ramanathaswamy Temple and other important attractions.",
        overnight: "Rameshwaram",
      },
      {
        day: 5,
        title: "Rameshwaram to Madurai",
        description:
          "Travel to Madurai and visit the famous Meenakshi Temple.",
        overnight: "Madurai",
      },
      {
        day: 6,
        title: "Madurai Departure",
        description:
          "Enjoy breakfast before departure.",
        overnight: "Departure",
      },
    ],

    inclusions: [
      "Hotel accommodation",
      "Breakfast",
      "Private transportation",
      "Temple sightseeing",
      "Driver",
      "Tour assistance",
    ],

    exclusions: [
      "Flights",
      "Temple special darshan tickets",
      "Personal expenses",
      "Travel insurance",
      "Meals not mentioned",
      "Anything not mentioned",
    ],

    tourImage:
      "https://images.unsplash.com/photo-1602643163983-ed0babc39797?auto=format&fit=crop&w=1000&q=80",
  },
];