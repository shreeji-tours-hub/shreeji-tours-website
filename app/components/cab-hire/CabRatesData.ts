export const cabRates = [
  {
    title: "Mumbai Local",
    subtitle: "8 Hours / 80 KM",
    type: "local",

    vehicles: [
      {
        name: "AC Sedan",
        price: "₹3,000/- per day",
        details: [
          "Package: 8 Hours / 80 KM",
          "Includes: Fuel & Driver Allowance",
          "Extra: Toll & Parking",
          "Extra Hour: ₹140/- per hour",
          "Extra KM: ₹14/- per km",
        ],
      },
      {
        name: "AC Ertiga",
        price: "₹3,500/- per day",
        details: [
          "Package: 8 Hours / 80 KM",
          "Includes: Fuel & Driver Allowance",
          "Extra: Toll & Parking",
          "Extra Hour: ₹170/- per hour",
          "Extra KM: ₹17/- per km",
        ],
      },
      {
        name: "AC Innova Crysta",
        price: "₹4,000/- per day",
        details: [
          "Package: 8 Hours / 80 KM",
          "Includes: Fuel & Driver Allowance",
          "Extra: Toll & Parking",
          "Extra Hour: ₹210/- per hour",
          "Extra KM: ₹21/- per km",
        ],
      },
    ],

    note:
      "For all local Mumbai bookings, time and kilometres are calculated from garage to garage.",
  },

  {
    title: "Outside Mumbai",
    subtitle: "Outstation",
    type: "outstation",

    vehicles: [
      {
        name: "AC Sedan",
        price: "₹5,000/- per day",
        details: [
          "Average: 300 KM per day",
          "Rate: ₹14/- per KM",
          "Driver Allowance: ₹600/- per day",
          "Includes: Fuel & Driver Allowance",
          "Extra: Toll, Border Tax & Parking",
          "Beyond 300 KM: ₹14/- per additional KM",
        ],
      },
      {
        name: "AC Ertiga",
        price: "₹6,000/- per day",
        details: [
          "Average: 300 KM per day",
          "Rate: ₹17/- per KM",
          "Driver Allowance: ₹600/- per day",
          "Includes: Fuel & Driver Allowance",
          "Extra: Toll, Border Tax & Parking",
          "Beyond 300 KM: ₹17/- per additional KM",
        ],
      },
      {
        name: "AC Innova Crysta",
        price: "₹7,000/- per day",
        details: [
          "Average: 300 KM per day",
          "Rate: ₹21/- per KM",
          "Driver Allowance: ₹600/- per day",
          "Includes: Fuel & Driver Allowance",
          "Extra: Toll, Border Tax & Parking",
          "Beyond 300 KM: ₹21/- per additional KM",
        ],
      },
    ],

    note:
      "Kilometres are calculated garage to garage. Rates are based on an average of 300 KM per day.",

    additionalNotes: [
      "Pickup before 6:00 AM from Mumbai: Additional morning driver allowance will apply.",
      "Drop after 11:00 PM in Mumbai: Additional night driver allowance will apply.",
    ],
  },

  {
    title: "Airport Transfer",
    subtitle: "Mumbai Airport",
    type: "airport",

    vehicles: [
      {
        name: "AC Sedan",
        price: "₹2,000/-",
        details: [
          "Airport → Hotel in North Mumbai",
          "Coverage: Andheri to Borivali / Andheri to Bandra",
        ],
      },
      {
        name: "AC Ertiga",
        price: "₹2,500/-",
        details: [
          "Airport → Hotel in North Mumbai",
          "Coverage: Andheri to Borivali / Andheri to Bandra",
        ],
      },
      {
        name: "AC Innova Crysta",
        price: "₹3,000/-",
        details: [
          "Airport → Hotel in North Mumbai",
          "Coverage: Andheri to Borivali / Andheri to Bandra",
        ],
      },
    ],

    note:
      "For South Mumbai, Thane & Navi Mumbai destinations beyond the above coverage, local Mumbai 8 Hours / 80 KM rates apply.",

    additionalNotes: [
      "South Mumbai / Thane / Navi Mumbai: Sedan ₹3,000/- per day",
      "South Mumbai / Thane / Navi Mumbai: Ertiga ₹3,500/- per day",
      "South Mumbai / Thane / Navi Mumbai: Innova Crysta ₹4,000/- per day",
      "Includes: Fuel & Driver Allowance",
      "Extra: Toll, Border Tax & Parking",
    ],
  },
];


/* =========================================================
   VEHICLE LIST
========================================================= */

export const vehicleList = [
  "Swift Dzire",
  "Kia Carens",
  "Ertiga",
  "Innova Crysta",
  "Innova Hycross",
  "Toyota Fortuner",
  "13 Seater Tempo Traveller",
  "13 Seater SML",
  "Force 16 Seater Urbania",
  "17 Seater Tempo Traveller",
  "20 Seater Bus",
  "26 Seater Bus",
  "30 Seater Bus",
  "36 Seater Bus",
  "43 - 45 Seater Bus",
];


/* =========================================================
   LUXURY VEHICLES
========================================================= */

export const luxuryVehicles = [
  "Mercedes S350",
  "Toyota Vellfire",
  "Kia Carnival",
  "Kia Carnival Limousine +",
  "Range Rover Sport HSE",
  "Audi A6",
  "Mercedes GLS350",
  "Mercedes E220",
  "Mercedes V220",
];