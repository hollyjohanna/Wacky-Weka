import PlantPosts from "../components/PlantPosts";
import { Link } from "react-router-dom";
import { ArrowRightShort, ArrowLeftShort } from "react-bootstrap-icons";

const PlantList = () => {
  return (
    <div>
      <h2 id="plant-list-heading">Plant List</h2>
      <div id="plant-list-heading-container">
        <p id="plant-list-about-text">
          Below is our full list of plants offered at the nursery. We offer a
          wide range of both exotic and native plants. If you wish to enquire
          further about any of the plants or our services feel free to get in
          touch!
        </p>
        <Link to="/contact">
          <button id="plant-list-pg-button">Get In Touch</button>
        </Link>
        <h3>All Plants</h3>
      </div>
      <PlantPosts />
      <div id="plant-list-button-container">
        <Link to="/">
          <button id="plantlist-back-btn">
            <ArrowLeftShort />
            Back To Home
          </button>
        </Link>
        <Link to="/services">
          <button id="plantlist-toservices-btn">
            To Services Page
            <ArrowRightShort />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PlantList;
