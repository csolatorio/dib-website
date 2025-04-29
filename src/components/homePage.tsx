// import React, { useState } from 'react';
import HeroPage from "../components/hero-page";
import FinancialJourneyBanner from "../components/financial-journey-banner";
import Services from "../components/services";

const HomePage = () => {
  return (
    <div className="min-h-[50vh] bg-[#EAE6DC]">
      <HeroPage />
      <FinancialJourneyBanner />
      <Services />
    </div>
  );
};

export default HomePage;
