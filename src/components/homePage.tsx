// import React, { useState } from 'react';
import HeroPage from "../components/hero-page";
import FinancialJourneyBanner from "../components/financial-journey-banner";
import Services from "../components/services";
import AboutMeCard from "../components/about-me";
import ContactUs from "../components/contact-us";
// import Awards from "../components/awards-recognition";
import Footer from "../components/footer";
import TestimonialsCarousel from "../components/testimonials";
import NewsletterSignup from "../components/newsletter";

const HomePage = () => {
  return (
    <div className="min-h-[50vh] bg-[#EAE6DC]">
      <HeroPage />
      <FinancialJourneyBanner />
      <Services />
      <AboutMeCard />
      {/* <Awards /> */}
      <TestimonialsCarousel />
      <ContactUs />
      <NewsletterSignup />
      <Footer />
    </div>
  );
};

export default HomePage;
