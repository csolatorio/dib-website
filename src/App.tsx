import "./App.css";
import "./index.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./components/homePage";
import Navbar from "./components/navbar";
import FinancialJourneyBanner from "./components/financial-journey-banner";
import Services from "./components/services";
import Awards from "./components/awards-recognition";
import About from "./components/about-me";
import Footer from "./components/footer";
// import PromoPage from "./components/promo-page";
// import ContactGym from "./components/contact-gym";
// import PersonalTraining from "./components/personal-training";
// import Locations from "./components/locations";
// import GroupClass from "./components/group-classes";
import ContactUs from "./components/contact-us";
import TestimonialsCarousel from "./components/testimonials";
// import BookBoxingClass from "./components/book-now";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route
            path="/financial-journey-banner"
            element={<FinancialJourneyBanner />}
          />
          <Route path="/services" element={<Services />} />
          <Route path="/about-me" element={<About />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/awards-recognition" element={<Awards />} />
          <Route path="/testimonials" element={<TestimonialsCarousel />} />
          <Route path="/footer" element={<Footer />} />
          {/* Uncomment the following routes as needed */}
          {/* <Route path="/hero-page" element={<HeroPage />} /> */}
          {/* 
          <Route path="/corporate-wellness" element={<CorporateWellness />} />
          
          <Route path="/cta-banner" element={<CTABanner />} />
          <Route path="/promo-page" element={<PromoPage />} />
          <Route path="/contact-gym" element={<ContactGym />} />
          <Route path="/personal-training" element={<PersonalTraining />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/group-classes" element={<GroupClass />} />
          
          <Route path="/book-now" element={<BookBoxingClass />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
