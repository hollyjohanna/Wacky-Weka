import { Link } from "react-router-dom";

const PlantListBanner = () => {
  return (
    <div id="plant-list-banner-container">
      <div id="plant-list-content-container">
        <h2>Plant List</h2>
        <p>
          We offer a wide range of both native and introduced plants for
          individual or wholesale supply. Click here to see the full list.
        </p>
        <Link to="/plantlist">
          <button>See Plants</button>
        </Link>
      </div>
    </div>
  );
};

export default PlantListBanner;
