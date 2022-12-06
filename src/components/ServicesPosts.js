import { useAxios } from "use-axios-client";
import { Link } from "react-router-dom";

const baseUrl = process.env.REACT_APP_WP_API_BASEURL;

const AllServices = () => {
  const endpoint = `${baseUrl}services?_embed`;
  const {
    data: servicesPosts,
    error,
    loading,
  } = useAxios({
    url: endpoint,
  });

  // check if the services posts have been returned
  if (loading) return <p>Loading...</p>;
  if (!servicesPosts) return "No posts found";
  if (error) return "Error";
  console.log(servicesPosts);

  const showServicesPosts = servicesPosts.map((post, index) => {
    return (
      <div className="service-post-section" key={index}>
        <h3>{post.title.rendered}</h3>
        <div className="content-container">
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />
        </div>
        <Link to="/contact">
          <button>Enquire About This Service</button>
        </Link>
      </div>
    );
  });
  return showServicesPosts;
};

const ServicesPosts = () => {
  return (
    <div id="services-posts-container">
      <AllServices />
    </div>
  );
};

export default ServicesPosts;
