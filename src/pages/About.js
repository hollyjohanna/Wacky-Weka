import { ArrowLeftShort, ArrowRightShort } from "react-bootstrap-icons";
import AboutPosts from "../components/AboutPosts";
import { Link } from "react-router-dom";
import plantsnursery from "./../img/plants-nursery.png";
import mainlandscape from "./../img/main-landscape.jpg";

const About = () => {
  return (
    <>
      <h1 id="about-heading">About</h1>
      <div id="about-pg">
        <p id="about-heading-text">
          Wacky Weka Nursery is a brand new nursery specialising in native trees
          from all over Aotearoa. Led by the values of Kaitiakitanga, the
          guardianship and protection of Aotearoa, we bring you ethically
          sourced trees for your home, buisness or city. Read below to find out
          more about our story, our journey and what we do at Wacky Weka
          Nurseries.
        </p>
        <div id="about-OTP-container">
          <h3>On This Page:</h3>
          <a href="#about-ourstory-container">
            <button id="ourstory-btn">Our Story</button>
          </a>
          <a href="#whatwedo-heading">
            <button id="whatwedo-btn">What We Do</button>
          </a>
        </div>
        <div id="about-ourstory-container">
          <div id="ourstory-heading">
            <h2>Our Story</h2>
            <p>
              Wacky Weka Nurseries began in 2020, in the midst of the pandemic.
              While many were filling their time redoing their homes, finding
              new hobbies and cultivating new interest we were also growing our
              passions. We spent many hours landscaping the land we owned in
              Masterton, originally bought as a lifestyle block but what was
              soon to become much more. Over the many months of planting new
              trees and cultivating those we already had, we began to restore
              the beautiful natural landscape that had been milled many years
              earlier for farmland. As the days stretched to weeks and the weeks
              to months we realised how fulfilling growing, cultivating,
              planting and restoring meant to us and started to envision
              continuing on with our restoration and design pursuits.
            </p>
            <img src={mainlandscape} alt=""></img>
          </div>
          <div id="the-nursery-section">
            <h4>The Nursery</h4>
            <p>
              The nursery began when our neighbours began to notice the changes
              we were making to our land. Shortly after planting our new grows
              we were approached by our neighbout to cultivate a few natives for
              thier land too. And thus our dream started to become a reality. We
              realised how necessary and fulfilling our work was for our
              community and decided to expand, spreading our beautiful natives
              and encouraging others to restore the land with our help.
            </p>
            <img src={plantsnursery} alt=""></img>
            <p>
              Our dream started with no more than 20 new plants but quickly grew
              below is a picture of our first ever cultivation involving several
              flaxes, ferns and some lancewoods.
            </p>
          </div>
        </div>
        <h2 id="whatwedo-heading">What We Do</h2>
        <p id="whatwedo-text">
          Arcu pulvinar vivamus dignissim dignissim cras neque. Lorem cras in
          elementum faucibus ultricies consectetur volutpat.Lorem ipsum dolor
          sit amet consectetur. Arcu pulvinar vivamus dignissim dignissim cras
          neque. Lorem cras in elementum faucibus ultricies consectetur
          volutpat.
        </p>
        <AboutPosts />
        <div id="button-container">
          <Link to="/">
            <button id="about-back-btn">
              <ArrowLeftShort />
              Back To Home
            </button>
          </Link>
          <Link to="/services">
            <button id="about-toservices-btn">
              To Services Page
              <ArrowRightShort />
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default About;
