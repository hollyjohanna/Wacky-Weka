// Import Styles
import "../css/styles.css";
// Import Components
import ScrollToTop from "../components/ScrollToTop";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// Import Pages
import Home from "./../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Services from "../pages/Services";
import PlantList from "../pages/PlantList";
import PlantItem from "../pages/PlantItem";
import PlantTypes from "../pages/PlantTypes";
// Import dependencies
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/plantlist" element={<PlantList />} />
          <Route path="/plant/:id" element={<PlantItem />} />
          <Route path="/planttype/:id" element={<PlantTypes />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
