import { Link } from "react-router-dom";
import ServicesPosts from "../components/ServicesPosts";
import { ArrowLeftShort, ArrowRightShort } from "react-bootstrap-icons";
import PlantListBanner from "../components/PlantListBanner";

// import { useAxios } from "use-axios-client";

// const baseUrl = process.env.REACT_APP_WP_API_BASEURL;

// const ServicesButtons = () => {
//   const endpoint = `${baseUrl}services?_embed`;
//   const {
//     data: servicesBtns,
//     error,
//     loading,
//   } = useAxios({
//     url: endpoint,
//   });

//   // check if the services posts have been returned
//   if (loading) return <p>Loading...</p>;
//   if (!servicesBtns) return "No posts found";
//   if (error) return "Error";
//   console.log(servicesBtns);

//   const showServicesBtns = servicesBtns.map((post, index) => {
//     return (
//       <div className="service-btn-section" key={index}>
//         <a href="#">
//           <button id={post.title.rendered}>{post.title.rendered}</button>
//         </a>
//       </div>
//     );
//   });
//   return showServicesBtns;
// };

const Services = () => {
  return (
    <div>
      <h1 id="services-heading">Services</h1>
      <div id="services-page">
        <p id="services-heading-text">
          Here at Wacky Weka we offer a range of services to meet your needs
          from garden design and individual plant sale, to wholesale and bulk
          plant sales. Read below to find out more about what services we offer.
        </p>
        <div id="services-OTP-container">
          <h3>On This Page:</h3>
          {/* <ServicesButtons /> */}
          <a href="#plantsupply">
            <button id="plantsupply-btn">Plant Supply</button>
          </a>
          <a href="#gardendesign">
            <button id="gardendesign-btn">Garden Design</button>
          </a>
          <a href="#wholesale">
            <button id="wholesale-btn">Wholesale Plant Supply</button>
          </a>
          <a href="#deliveries">
            <button id="deliveries-btn">Plant Deliveries</button>
          </a>
        </div>
        <ServicesPosts />
        <div id="button-container">
          <Link to="/">
            <button id="services-back-btn">
              <ArrowLeftShort />
              Back To Home
            </button>
          </Link>
          <Link to="/about">
            <button id="services-toabout-btn">
              To About Page
              <ArrowRightShort />
            </button>
          </Link>
        </div>
      </div>
      <PlantListBanner />
    </div>
  );
};

export default Services;
