"use client";

import {
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  MessageCircle,
  CheckCircle2,
  Users,
  ShieldCheck,
  Headphones,
  Award,
  Clock3,
  Car,
  Star,
  Menu,
  X,
} from "lucide-react";

import { useState } from "react";

const foreignTours = [
  {
    title: "Mumbai",
    subtitle: "Sightseeing Tours",
    description: "Explore the vibrant city of Mumbai",
    image:
      "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=800&q=85",
    icon: "📷",
  },
  {
    title: "Elephanta Caves",
    subtitle: "Tours",
    description: "UNESCO World Heritage Site Experience",
    image:
      "https://images.unsplash.com/photo-1595658658481-d53d3f999875?auto=format&fit=crop&w=800&q=85",
    icon: "⚓",
  },
  {
    title: "Food & Culture",
    subtitle: "Tours",
    description: "Taste India's rich culture & food",
    image:
      "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=85",
    icon: "🍴",
  },
  {
    title: "Bollywood",
    subtitle: "Experience",
    description: "Step into the world of Indian cinema",
    image:
      "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?auto=format&fit=crop&w=800&q=85",
    icon: "🎬",
  },
  {
    title: "Golden Triangle",
    subtitle: "Tours",
    description: "Delhi – Agra – Jaipur Experience",
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=85",
    icon: "🏛️",
  },
  {
    title: "Customize Your",
    subtitle: "Own Tour",
    description: "We create tours as per your interest",
    image:
      "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=800&q=85",
    icon: "👥",
  },
];

const indiaTours = [
  {
    title: "Kerala",
    subtitle: "Package",
    days: "6 Days / 5 Nights",
    image:
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=700&q=85",
  },
  {
    title: "Rajasthan",
    subtitle: "Package",
    days: "7 Days / 6 Nights",
    image:
      "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=700&q=85",
  },
  {
    title: "Himachal",
    subtitle: "Package",
    days: "6 Days / 4 Nights",
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=700&q=85",
  },
  {
    title: "Gujarat",
    subtitle: "Package",
    days: "6 Days / 5 Nights",
    image:
      "https://images.unsplash.com/photo-1600100397608-f0103b7f9e20?auto=format&fit=crop&w=700&q=85",
  },
  {
    title: "South India",
    subtitle: "Package",
    days: "8 Days / 7 Nights",
    image:
      "https://images.unsplash.com/photo-1602643163983-ed0babc39797?auto=format&fit=crop&w=700&q=85",
  },
];

const reviews = [
  {
    name: "David Lee",
    country: "Australia",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    text: "Excellent service and well planned tour. Thank you Shreeji Tours!",
  },
  {
    name: "Sophie Martin",
    country: "France",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    text: "Our India trip was wonderful. Everything was perfectly organized.",
  },
  {
    name: "Luca Romano",
    country: "Italy",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    text: "Highly professional and supportive team. Best tour experience!",
  },
];

const gallery = [
  "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1595658658481-d53d3f999875?auto=format&fit=crop&w=500&q=80",
];

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <main>

      {/* ================= TOP BAR ================= */}

      <div className="topbar">
        <div className="container topbar-inner">

          <div className="top-contact">
            <span>
              <Phone size={13} />
              +91 9969422936
            </span>

            <span>
              <Phone size={13} />
              +91 9324622153
            </span>

            <span>
              <Mail size={13} />
              contact@shreejitourstravels.in
            </span>

            <span className="desktop-only">
              🌐 www.shreejitourstravels.in
            </span>
          </div>

          <div className="social-top">
            <span>English</span>

            <MessageCircle size={14} />
          </div>

        </div>
      </div>


      {/* ================= NAVBAR ================= */}

      <header className="navbar">

        <div className="container nav-inner">

          <div className="logo-area">
            <div className="logo-symbol">🦚</div>

            <div>
              <div className="logo-text">
                Shreeji Tours & Travels
              </div>

              <div className="logo-tagline">
                Make Tour Easy
              </div>
            </div>
          </div>


          <nav className={`nav-links ${mobileOpen ? "mobile-active" : ""}`}>

            <a className="active" href="#">
              Home
            </a>

            <a href="#about">
              About Us
            </a>

            <a href="#tours">
              India Tours <ChevronDown size={12} />
            </a>

            <a href="#foreigners">
              Tours for Foreigners
            </a>

            <a href="#international">
              International Tours <ChevronDown size={12} />
            </a>

            <a href="#cab">
              Cab Hire
            </a>

            <a href="#groups">
              Group Tours
            </a>

            <a href="#reviews">
              Happy Clients
            </a>

            <a href="#contact">
              Contact Us
            </a>

          </nav>


          <button
            className="mobile-menu"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>

        </div>

      </header>


      {/* ================= WHATSAPP ================= */}

      <a
        href="https://wa.me/919969422936"
        className="whatsapp-top"
        target="_blank"
      >
        <MessageCircle size={16} />
        WhatsApp Us
      </a>


      {/* ================= HERO ================= */}

      <section className="hero">

        <div className="hero-overlay"></div>

        <div className="container hero-content">

          <div className="hero-copy">

            <div className="hero-title">
              Explore Incredible India
            </div>

            <div className="hero-script">
              With Local Travel Experts
            </div>

            <div className="hero-services">
              Customized Tours
              <span>•</span>
              Mumbai Sightseeing
              <br />
              India Packages
              <span>•</span>
              Airport Transfers
              <span>•</span>
              Group Tours
            </div>


            <div className="hero-trust">

              <div>
                <span>🏆</span>
                <strong>Trusted by</strong>
                <small>Thousands</small>
              </div>

              <div>
                <span>😊</span>
                <strong>500+</strong>
                <small>Happy Guests</small>
              </div>

              <div>
                <span>⭐</span>
                <strong>Excellent</strong>
                <small>Tripadvisor Rating</small>
              </div>

              <div>
                <span>💰</span>
                <strong>Best Price</strong>
                <small>Guaranteed</small>
              </div>

              <div>
                <span>☎</span>
                <strong>24x7</strong>
                <small>Support</small>
              </div>

            </div>


            <div className="hero-buttons">

              <a href="#tours" className="btn-primary">
                Explore Tours
              </a>

              <a
                href="https://wa.me/919969422936"
                className="btn-outline"
              >
                WhatsApp Us
              </a>

            </div>

          </div>

        </div>


        <div className="tripadvisor-badge">

          <div className="excellent">
            EXCELLENT
          </div>

          <div className="tripadvisor-logo">
            ◎
          </div>

          <strong>Tripadvisor</strong>

          <div className="stars">
            ★★★★★
          </div>

          <small>500+ Reviews</small>

        </div>

      </section>


      {/* ================= FOREIGN TOURS ================= */}

      <section
        className="foreign-section"
        id="foreigners"
      >

        <div className="section-heading">

          <div className="eyebrow">
            TOURS FOR FOREIGNERS
          </div>

          <h2>
            Specially Designed for International Travelers
          </h2>

          <div className="heading-line">
            <span></span>
            <i>●</i>
            <span></span>
          </div>

        </div>


        <div className="container foreign-grid">

          {foreignTours.map((tour) => (

            <div className="foreign-card" key={tour.title}>

              <div className="foreign-image">

                <img
                  src={tour.image}
                  alt={tour.title}
                />

                <div className="card-icon">
                  {tour.icon}
                </div>

              </div>

              <h3>{tour.title}</h3>

              <h4>{tour.subtitle}</h4>

              <p>{tour.description}</p>

            </div>

          ))}

        </div>

      </section>


      {/* ================= POPULAR INDIA TOURS ================= */}

      <section
        className="popular-section"
        id="tours"
      >

        <div className="section-heading">

          <div className="eyebrow">
            EXPLORE THE BEST OF INDIA
          </div>

          <h2>
            Popular India Tours
          </h2>

          <div className="heading-line">
            <span></span>
            <i>●</i>
            <span></span>
          </div>

        </div>


        <div className="container popular-layout">

          {/* Mumbai card */}

          <div className="featured-tour">

            <img
              src="https://images.unsplash.com/photo-1595658658481-d53d3f999875?auto=format&fit=crop&w=800&q=85"
              alt="Mumbai"
            />

            <div className="featured-overlay">

              <h3>
                Mumbai
                <br />
                Sightseeing Tours
              </h3>

              <p>
                Explore the vibrant city
                <br />
                with expert local guides
              </p>

              <button>
                View All Tours
              </button>

            </div>

          </div>


          {/* India cards */}

          <div className="tour-cards">

            {indiaTours.map((tour) => (

              <div className="india-card" key={tour.title}>

                <img
                  src={tour.image}
                  alt={tour.title}
                />

                <div className="india-card-info">

                  <strong>{tour.title}</strong>

                  <span>{tour.subtitle}</span>

                  <small>{tour.days}</small>

                </div>

              </div>

            ))}

          </div>


          {/* International card */}

          <div className="international-card">

            <div className="international-title">
              International Tours
            </div>

            <p>
              Specially designed
              <br />
              for international travelers
            </p>

            <div className="mini-images">

              <img
                src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=300&q=80"
                alt=""
              />

              <img
                src="https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=300&q=80"
                alt=""
              />

              <img
                src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=300&q=80"
                alt=""
              />

              <img
                src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=300&q=80"
                alt=""
              />

            </div>

            <button>
              Explore Now
            </button>

          </div>

        </div>

      </section>


      {/* ================= CAB ================= */}

      <section className="cab-section" id="cab">

        <div className="container cab-inner">

          <div className="cab-title">

            <h2>
              Cab Hire &
              <br />
              Luxury Car Rental
              <br />
              In Mumbai
            </h2>

          </div>


          <div className="cars">

            <img
              src="https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=85"
              alt="Luxury cars"
            />

          </div>


          <div className="cab-features">

            <div>
              <CheckCircle2 />
              Well Maintained Vehicles
            </div>

            <div>
              <CheckCircle2 />
              Professional Drivers
            </div>

            <div>
              <CheckCircle2 />
              On-Time Service
            </div>

            <div>
              <CheckCircle2 />
              Best Price Guaranteed
            </div>

          </div>

        </div>

      </section>


      {/* ================= TRUST LOGOS ================= */}

      <section className="trust-section">

        <div className="container trust-logos">

          <span>Tripadvisor</span>
          <span>Google</span>
          <span>Incredible India</span>
          <span>TATA</span>
          <span>IRCTC</span>
          <span>MakeMyTrip</span>

        </div>

      </section>


      {/* ================= GALLERY + REVIEWS ================= */}

      <section
        className="reviews-section"
        id="reviews"
      >

        <div className="container reviews-layout">


          {/* Gallery */}

          <div className="gallery-area">

            <div className="section-small-heading">

              <div className="eyebrow">
                MOMENTS FROM OUR TOURS
              </div>

              <a href="#">
                View Gallery
              </a>

            </div>

            <div className="gallery-grid">

              {gallery.map((image, index) => (

                <img
                  key={index}
                  src={image}
                  alt={`Tour memory ${index + 1}`}
                />

              ))}

            </div>

          </div>


          {/* Reviews */}

          <div className="reviews-area">

            <div className="section-small-heading">

              <div>
                <div className="eyebrow">
                  HAPPY CLIENTS
                </div>

                <h2>
                  What Our Guests Say
                </h2>
              </div>

            </div>


            <div className="review-grid">

              {reviews.map((review) => (

                <div className="review-card" key={review.name}>

                  <div className="review-person">

                    <img
                      src={review.image}
                      alt={review.name}
                    />

                    <div>

                      <strong>
                        {review.name}
                      </strong>

                      <small>
                        🇦🇺 {review.country}
                      </small>

                    </div>

                  </div>

                  <div className="review-stars">
                    ★★★★★
                  </div>

                  <p>
                    {review.text}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* ================= FEATURES ================= */}

      <section className="features-section">

        <div className="container features-grid">

          <div>
            <Users />
            <strong>1000+</strong>
            <span>Happy Travelers</span>
          </div>

          <div>
            <Award />
            <strong>15+</strong>
            <span>Years of Experience</span>
          </div>

          <div>
            <Headphones />
            <strong>24x7</strong>
            <span>Customer Support</span>
          </div>

          <div>
            <ShieldCheck />
            <strong>Safe & Secure</strong>
            <span>Travel</span>
          </div>

          <div>
            <Clock3 />
            <strong>Customizable</strong>
            <span>Tour Packages</span>
          </div>

          <div>
            <Star />
            <strong>Best Price</strong>
            <span>Guaranteed</span>
          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer
        className="footer"
        id="contact"
      >

        <div className="container footer-grid">


          <div className="footer-about">

            <h3>
              About Shreeji Tours n Travels
            </h3>

            <p>
              We are a trusted travel company based
              in Mumbai providing the best tour
              experiences across India and
              international destinations.
            </p>

            <div className="footer-trip">
              ◎ Tripadvisor
              <small>500+ Reviews</small>
            </div>

            <div className="footer-social">

             
              <MessageCircle />

            </div>

          </div>


          <div>

            <h3>Quick Links</h3>

            <a href="#">Home</a>
            <a href="#about">About Us</a>
            <a href="#tours">India Tours</a>
            <a href="#foreigners">Tours for Foreigners</a>
            <a href="#international">International Tours</a>
            <a href="#cab">Cab Hire</a>
            <a href="#">Group Tours</a>
            <a href="#reviews">Happy Clients</a>
            <a href="#contact">Contact Us</a>

          </div>


          <div>

            <h3>Popular Tours</h3>

            <a href="#">Mumbai Sightseeing Tours</a>
            <a href="#">Kashmir Tours</a>
            <a href="#">Rajasthan Tours</a>
            <a href="#">Kerala Tours</a>
            <a href="#">Gujarat Tours</a>
            <a href="#">Golden Triangle Tours</a>
            <a href="#">Char Dham Yatra</a>
            <a href="#">South India Tours</a>

          </div>


          <div>

            <h3>Our Services</h3>

            <a href="#">Airport Transfers</a>
            <a href="#">Hotel Bookings</a>
            <a href="#">Cab Hire</a>
            <a href="#">Group Tours</a>
            <a href="#">Customized Tours</a>
            <a href="#">Visa Assistance</a>
            <a href="#">Travel Insurance</a>
            <a href="#">Corporate Tour</a>

          </div>


          <div>

            <h3>Contact Us</h3>

            <p className="contact-item">
              <Phone />
              +91 9969422936
            </p>

            <p className="contact-item">
              <Phone />
              +91 9324622153
            </p>

            <p className="contact-item">
              <Mail />
              contact@shreejitourstravels.in
            </p>

            <p className="contact-item">
              <MapPin />
              Supershva Theatre, E Wing,
              Flat No: 403, Old Nagardas Rd,
              Andheri East, Mumbai
            </p>

          </div>

        </div>


        <div className="footer-bottom">

          <span>
            © 2026 Shreeji Tours n Travels.
            All Rights Reserved.
          </span>

          <div>
            Privacy Policy
            <span> | </span>
            Terms & Conditions
          </div>

        </div>

      </footer>


      {/* ================= FLOATING WHATSAPP ================= */}

      <a
        href="https://wa.me/919969422936"
        target="_blank"
        className="floating-whatsapp"
      >
        <MessageCircle size={27} />
      </a>

    </main>
  );
}