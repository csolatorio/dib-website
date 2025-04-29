import "./App.css";
import "./index.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./components/homePage";
import Navbar from "./components/navbar";
import FinancialJourneyBanner from "./components/financial-journey-banner";
import Services from "./components/services";
// import CorporateWellness from "./components/corporate-wellness";
// import AboutUs from "./components/about-us";
// import CTABanner from "./components/ctabanner";
// import PromoPage from "./components/promo-page";
// import ContactGym from "./components/contact-gym";
// import PersonalTraining from "./components/personal-training";
// import Locations from "./components/locations";
// import GroupClass from "./components/group-classes";
// import ContactUs from "./components/contact-us";
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
          {/* Uncomment the following routes as needed */}
          {/* <Route path="/hero-page" element={<HeroPage />} /> */}
          {/* <Route path="/footer" element={<Footer />} />
          <Route path="/corporate-wellness" element={<CorporateWellness />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/cta-banner" element={<CTABanner />} />
          <Route path="/promo-page" element={<PromoPage />} />
          <Route path="/contact-gym" element={<ContactGym />} />
          <Route path="/personal-training" element={<PersonalTraining />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/group-classes" element={<GroupClass />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/book-now" element={<BookBoxingClass />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
