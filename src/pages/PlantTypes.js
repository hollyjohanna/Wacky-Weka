import { useAxios } from "use-axios-client";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "react-bootstrap-icons";

const baseUrl = process.env.REACT_APP_WP_API_BASEURL;

const RenderPlantTypeName = () => {
  const params = useParams();
  // declare the endpoint for this specific genre
  //   console.log(params);
  const plantTypeEndpoint = `${baseUrl}plant_type/${params.id}`;
  //query the end point using wordpress API
  const {
    data: planttype,
    error,
    loading,
  } = useAxios({
    url: plantTypeEndpoint,
  });
  if (loading) return "Loading...";
  if (!planttype) return "No data...";
  if (planttype.length === 0) return "No results found!";
  if (error) return "Error!";

  //   console.log(planttype);
  return (
    <div>
      <h2 id="planttype-name">"{planttype.name}" Plants</h2>
    </div>
  );
};

const RenderedPlantTypes = () => {
  const params = useParams();
  // get endpoint for specific news stories
  const plantsEndpoint = `${baseUrl}plants?plant_type=${params.id}&_embed`;

  const {
    data: plantsPosts,
    error,
    loading,
  } = useAxios({
    url: plantsEndpoint,
  });
  if (loading) return "Loading...";
  if (!plantsPosts) return "No data...";
  if (plantsPosts.length === 0) return "No results found!";
  if (error) return "Error!";

  //   console.log(plantsPosts);

  const renderedPlants = plantsPosts.map((post, index) => {
    return (
      <div className="plant-post-container" key={index}>
        <Link to={`/plant/${post.id}`}>
          <h2>{post.title.rendered}</h2>
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          ></div>
          <img
            className="featured-img"
            src={post._embedded["wp:featuredmedia"][0].source_url}
            alt={post.title.rendered}
          ></img>
          <span>{post._embedded["wp:term"][0][0].name}</span>
          <span>{post._embedded["wp:term"][0][1].name}</span>
        </Link>
      </div>
    );
  });
  return renderedPlants;
};

const PlantTypes = () => {
  return (
    <div>
      <h2 id="plant-type-heading">Plant Types</h2>
      <RenderPlantTypeName />
      <div id="plant-type-container">
        <RenderedPlantTypes />
      </div>
      <div id="planttype-back-btn-container">
        <Link to="/plantlist">
          <button id="planttype-back-btn">
            <ArrowLeft />
            All Plants
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PlantTypes;
