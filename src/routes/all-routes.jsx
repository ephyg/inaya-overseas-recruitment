import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/landingPage/landing-page";
import AboutUs from "../pages/about-us/about-us";
import ContactUsPage from "../pages/contactUsPage/contact-us-page";
import Services from "../pages/services/services";
function AllRoutes() {
  return (
    <Routes>
      <Route path="/" Component={LandingPage} />
      <Route path="/about" Component={AboutUs} />
      <Route path="/contact" Component={ContactUsPage} />
      <Route path="/services" Component={Services} />
    </Routes>
  );
}

export default AllRoutes;
