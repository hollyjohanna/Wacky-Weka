import { Link } from "react-router-dom";
import gardendesign from "./../img/gardendesign.jpg";
import wholesale from "./../img/wholesale.jpg";
import delivery from "./../img/delivery.jpg";
import plantsupply from "./../img/plantsupply.jpg";

const HomePgServices = () => {
  return (
    <div id="hm-pg-services-container">
      <Link to="/services">
        <h2 id="services-title">Our Services</h2>
        <div className="hm-pg-services">
          <div className="hm-pg-services-image services-gardendesign">
            <img src={gardendesign} alt="A native floral plant"></img>
            <div className="hm-pg-img-overlay">
              <div className="hm-pg-services-title">
                <h3>Garden Design</h3>
                <p>
                  Our team of knowledgable staff can help you design your dream
                  garden
                </p>
              </div>
            </div>
          </div>
          <div className="hm-pg-services-image services-wholesale">
            <img src={wholesale} alt="A native floral plant"></img>
            <div className="hm-pg-img-overlay">
              <div className="hm-pg-services-title">
                <h3>Wholesale Plant Supply</h3>
                <p>Large order plant supplies of 100+ plants for buisnesses</p>
              </div>
            </div>
          </div>
          <div className="hm-pg-services-image services-delivery">
            <img src={delivery} alt="A native floral plant"></img>
            <div className="hm-pg-img-overlay">
              <div className="hm-pg-services-title">
                <h3>Plant Delivery</h3>
                <p>
                  Deliveries of purchased plants throughout the Wellington
                  Region
                </p>
              </div>
            </div>
          </div>
          <div className="hm-pg-services-image services-plantsupply">
            <img src={plantsupply} alt="A native floral plant"></img>
            <div className="hm-pg-img-overlay">
              <div className="hm-pg-services-title">
                <h3>Individual Plant Supply</h3>
                <p>Small scale plant supplies, single plants or saplings</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default HomePgServices;
