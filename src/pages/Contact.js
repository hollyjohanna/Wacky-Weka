import {
  Telephone,
  Envelope,
  People,
  Instagram,
  Facebook,
  Twitter,
  Clock,
  GeoAlt,
} from "react-bootstrap-icons";
import ContactForm from "../components/ContactForm";
import map from "./../img/map.png";

const Contact = () => {
  return (
    <div>
      <h1 id="contact-heading">Contact</h1>
      <p id="contact-text">
        Welcome to the contact page! Here you will find many different ways to
        reach us if you would like to contact us for any reason. We are always
        happy to hear from you and help in any way, so please get in contact if
        you have specific questions about a service, general inquiries, or just
        want a chat!
      </p>
      <div id="contact-form-and-info-container">
        <div id="reach-out-container">
          <h2>Reach Out</h2>
          <div className="reach-out-item">
            <div className="heading-container">
              <Telephone />
              <h3>Phone</h3>
            </div>
            <p>James (Director): 027123456</p>
            <p>Carl (Director): 021123345</p>
          </div>
          <div className="reach-out-item">
            <div className="heading-container">
              <Envelope />
              <h3>Email</h3>
            </div>
            <p>General Inquiries: wackyweka@gmail.com</p>
            <p>Nursery Inquiries: wackewekanursery@gmail.com</p>
          </div>
          <div className="reach-out-item">
            <div className="heading-container">
              <People />
              <h3>Follow Us</h3>
            </div>
            <p>
              Follow us on Instagram, Facebook and Twitter to get the most up to
              date photos and news!
            </p>
            <div id="reach-out-socials">
              <a
                href="https://www.instagram.com/wacky_weka_nursery/"
                target="_blank"
                rel="noreferrer"
              >
                <Instagram />
              </a>
              <Facebook />
              <Twitter />
            </div>
          </div>
        </div>
        <div id="contact-form-container">
          <h2>Contact Directly</h2>
          <p>
            Use the contact form below to send us a specific message about our
            services or any general inquiry.
          </p>
          <ContactForm />
        </div>
      </div>
      <div id="location-container">
        <div id="location-content">
          <div id="location-text">
            <h2>Location</h2>
            <div className="location-heading-container">
              <Clock />
              <h4>Opening Hours</h4>
            </div>
            <p id="opening-hours">7:00am - 4:00pm daily</p>
            <div className="location-heading-container">
              <GeoAlt />
              <h4>Address</h4>
            </div>
            <p>103 Masterton Road,</p>
            <p>Masterton, 6072</p>
            <p>Wellington Region</p>
          </div>
          <div id="map-container">
            <img src={map} alt="map placeholder"></img>
            <a
              href="https://www.google.co.nz/maps/place/Masterton/@-40.921177,175.647543,13.62z/data=!4m5!3m4!1s0x6d413ec2d8c79e93:0x500ef6143a29916!8m2!3d-40.9463736!4d175.667234"
              target="_blank"
              rel="noreferrer"
            >
              <button>Open In Google Maps</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
