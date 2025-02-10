import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';


import {useState} from 'react';
import I18n from  './../../utils/I18n';


import Fruits from '../../assets/HomepageImages/Fruits.jpg';
import Grains from '../../assets/HomepageImages/Grains.jpg';
import Vegetables from '../../assets/HomepageImages/Vegetables.jpg';

function Home() {

  const [lang, setLang] = useState("en");

    return (


     <div>
            {/* Hero Section */}
            <section className="hero-section">


                <h1>{I18n( "WelcomeMessage")} to AgroConnect 🌿</h1>

    




                <p>Your trusted marketplace for fresh, locally-sourced produce directly from farmers.</p>
                <Link to="/productpage">
                    <button className="btn-primary">Shop Fresh Produce</button>
                </Link>
            </section>

          {/* Product Categories Section */}
<section className="categories-section">
  <h2>Our Product Categories</h2>
  <div className="categories-container">
    <div className="category-card">
      <img src={Fruits} alt="Fruits" />
      <h3>Fruits</h3>
    </div>
    <div className="category-card">
      <img src={Vegetables} alt="Vegetables" />
      <h3>Vegetables</h3>
    </div>
    <div className="category-card">
      <img src={Grains} alt="Grains" />
      <h3>Grains</h3>
    </div>
  </div>
</section>


            {/* Why Choose Us Section */}
            <section className="why-choose-section">
                <h2>Why Choose KisanConnect?</h2>
                <ul>
                    <li>Direct access to fresh, farm-grown products.</li>
                    <li>Transparent pricing, benefiting both farmers and consumers.</li>
                    <li>Support local communities and sustainable agriculture.</li>
                    <li>Convenient online shopping and doorstep delivery.</li>
                </ul>
            </section>

            {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>What Our Customers Say</h2>
        <div className="testimonials-container">
          <div className="testimonial-card">
            <p>"Fantastic quality and freshness! I'm glad I can support local farmers."</p>
            <h4>- Srushti Garad</h4>
          </div>
          <div className="testimonial-card">
            <p>"Easy to order, and the produce is delivered fresh to my door!"</p>
            <h4>- Suyash Shinde</h4>
          </div>
          <div className="testimonial-card">
            <p>"Easy to order, and the produce is delivered fresh to my door!"</p>
            <h4>- Nisha Ambike</h4>
          </div>
          <div className="testimonial-card">
            <p>"Easy to order, and the produce is delivered fresh to my door!"</p>
            <h4>- Vaishali Akade</h4>
          </div>
          <div className="testimonial-card">
            <p>"Fantastic quality and freshness! I'm glad I can support local farmers."</p>
            <h4>- Srushti Garad</h4>
          </div>
          <div className="testimonial-card">
            <p>"Fantastic quality and freshness! I'm glad I can support local farmers."</p>
            <h4>- Suyash Shinde</h4>
          </div>
        </div>
      </section>

            {/* Footer Section */}
            <footer className="footer">
                <p>&copy; 2025 AgroConnect. All rights reserved.</p>
                <div className="social-media">
                    <a href="https://facebook.com">Facebook</a>
                    <a href="https://instagram.com">Instagram </a>
                    <a href="https://twitter.com">Twitter</a>
                </div>
            </footer>
        </div>
    );
}

export default Home;
