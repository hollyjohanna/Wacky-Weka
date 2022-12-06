import { CCircle, Instagram, Facebook, Twitter } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div id="footer-background">
        <div id="main-footer">
          <Link to="/">
            <div id="footer-logo">
              <span>WW</span>
              <p id="lower-logo-component">Wacky Weka Nurseries</p>
            </div>
          </Link>
          <p id="tagline">
            Located in Te Whanganui a Tara, we provide an excellent service of
            fresh native trees for your home, buisness or city.
          </p>
          <div id="footer-link-container">
            <Link to="/contact">
              <div id="contact-links">
                <h5>Contact Us</h5>
                <p>Ph: +64 123 456789</p>
                <p>Em: wackywekanurseries@gmail.com</p>
                <p id="location">103 Masterton Road,</p>
                <p id="location2">Masterton, 6072</p>
              </div>
            </Link>
            <Link to="/about">
              <div id="about-links">
                <h5>About Us</h5>
                <ul>
                  <li>Privacy Policy</li>
                  <li>Our Story</li>
                  <li>Ecology and Restoration</li>
                  <li>Nursery</li>
                </ul>
              </div>
            </Link>
            <Link to="/services">
              <div id="services-links">
                <h5>Services</h5>
                <ul>
                  <li>Wholesale Plant Supply</li>
                  <li>Garden Design</li>
                  <li>Plant Deliveries</li>
                  <li>Individual Sale</li>
                </ul>
              </div>
            </Link>
            <div id="socials-links">
              <h5>Follow Us</h5>
              <a
                href="https://www.instagram.com/wacky_weka_nursery/"
                target="_blank"
                rel="noreferrer"
              >
                <Instagram id="instagram" />
              </a>
              <Facebook id="facebook" />
              <Twitter id="twitter" />
            </div>
          </div>
        </div>
      </div>
      <div id="lower-footer-background">
        <div id="lower-footer">
          <p>Copyright Wacky Weka 2022</p>
          <CCircle />
        </div>
      </div>
    </div>
  );
};

export default Footer;
