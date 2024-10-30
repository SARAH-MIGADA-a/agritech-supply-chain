import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingScreen.css';

const images = [
  '/assets/images/farm-background1.jpg',
  '/assets/images/farm-background2.jpg',
  '/assets/images/farm-background3.jpg',
  '/assets/images/farm-background4.jpg',
  '/assets/images/farm-background5.jpg',
];

const LandingScreen: React.FC = () => {
  const navigate = useNavigate();
  const [showMore, setShowMore] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const aboutRef = useRef<HTMLDivElement | null>(null); // Create ref for About section

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const handleGetStarted = () => {
    navigate('/login');
  };

  const handleViewMore = () => {
    setShowMore(!showMore);
  };

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="landing-screen">
      <img src="/assets/images/agritech-logo.png" alt="Agritech Logo" className="logo" />

      {/* Hero Section */}
      <section className="hero-section" style={{ backgroundImage: `url(${images[currentImageIndex]})` }}>
        <div className="hero-content">
          <h1 className="headline">Pure Agricultural Products</h1>
          <p className="subheadline">Welcome to Agritech. We believe in better agriculture for a better future.</p>
          <p className="welcome-message">Join us on this journey towards sustainable agriculture!</p>
          <button className="cta-button" onClick={scrollToAbout}>
            Discover More
          </button>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-section" ref={aboutRef}>
        <h2>About Agritech</h2>
        <p>
          At Agritech, we are dedicated to delivering high-quality, sustainable agricultural solutions that ensure a healthy future for our planet. Our commitment lies in promoting innovative farming practices that enhance productivity while protecting our environment. By empowering local farmers through education and resources, we foster resilient communities that thrive on biodiversity. We believe in combining modern technology with traditional methods to create a sustainable food system that nourishes people and the planet. Together, we can combat climate change and pave the way for a greener tomorrow.
        </p>

        <div className="about-images">
          <div className="about-card">
            <img src="/assets/images/about1.jpg" alt="Sustainable Farming" />
            <h3>Sustainable Farming</h3>
          </div>
          <div className="about-card">
            <img src="/assets/images/about2.jpg" alt="Green Agriculture" />
            <h3>Green Agriculture</h3>
          </div>
          <div className="about-card">
            <img src="/assets/images/about3.jpg" alt="Organic Produce" />
            <h3>Organic Produce</h3>
          </div>
          <div className="about-card">
            <img src="/assets/images/about4.jpg" alt="Precision Agriculture" />
            <h3>Precision Agriculture</h3>
          </div>
          <div className="about-card">
            <img src="/assets/images/about5.jpg" alt="Hydroponics" />
            <h3>Hydroponics</h3>
          </div>
        </div>
      </section>

      {/* Products Section with Carousel */}
      <section className="products-section">
        <h2>Our Products</h2>
        <div className="products-container">
          {/* Main Products */}
          <div className="product-card">
            <img src="/assets/images/product1.jpg" alt="Fresh Vegetables" />
            <h3>Fresh Vegetables</h3>
            <p>Our organic vegetables are grown sustainably, ensuring health and quality for our customers.</p>
          </div>
          <div className="product-card">
            <img src="/assets/images/product2.jpg" alt="Grains and Pulses" />
            <h3>Grains & Pulses</h3>
            <p>High-quality grains and pulses harvested with care to nourish you.</p>
          </div>
          <div className="product-card">
            <img src="/assets/images/product3.jpg" alt="Dairy Products" />
            <h3>Dairy Products</h3>
            <p>Pure, natural, and fresh dairy products sourced from trusted farms.</p>
          </div>
        </div>

        {/* Scrollable Additional Products */}
        {showMore && (
          <div className="additional-products">
            <div className="product-card">
              <img src="/assets/images/product4.jpg" alt="Herbal Plants" />
              <h3>Herbal Plants</h3>
              <p>Medicinal plants harvested with the utmost care and purity.</p>
            </div>
            <div className="product-card">
              <img src="/assets/images/product5.jpg" alt="Organic Fruits" />
              <h3>Organic Fruits</h3>
              <p>Fresh, organic fruits that are ripe and full of natural flavors.</p>
            </div>
          </div>
        )}

        <button onClick={handleViewMore} className="view-more-button">
          {showMore ? 'View Less' : 'View More'}
        </button>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <h2>Join Us in the Journey</h2>
        <p>Be a part of our mission to transform agriculture. Together, we can create a better future. Join us in promoting sustainable practices that empower local farmers and protect our planet, ensuring a resilient agricultural community for generations to come.</p>
        <button onClick={handleGetStarted} className="cta-button">Get Started with Agritech</button>
      </section>
    </div>
  );
};

export default LandingScreen;
