import { useAxios } from "use-axios-client";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "react-bootstrap-icons";

const baseUrl = process.env.REACT_APP_WP_API_BASEURL;

const RenderedPlant = () => {
  // declare params to find id
  const params = useParams();
  //declare endpoint
  const endpoint = `${baseUrl}plants/${params.id}?_embed`;

  const {
    data: plant,
    error,
    loading,
  } = useAxios({
    url: endpoint,
  });
  if (loading) return "Loading...";
  if (!plant) return "No data...";
  if (plant.length === 0) return "No results found!";
  if (error) return "Error!";

  //   console.log(plant);

  const PlantType = () => {
    const taxonomyEndpoint = plant._links["wp:term"][0].href;

    const {
      data: taxonomies,
      error,
      loading,
    } = useAxios({
      url: taxonomyEndpoint,
    });
    if (loading) return "Loading...";
    if (!taxonomies) return "No data...";
    if (taxonomies.length === 0) return "No results found!";
    if (error) return "Error!";

    // console.log(taxonomies);

    const showPlantType = taxonomies.map((taxonomies, index) => {
      return (
        <Link to={`/planttype/${taxonomies.id}`} key={index}>
          <span key={index} className="plant-type-pill">
            {taxonomies.name}
          </span>
        </Link>
      );
    });
    return showPlantType;
  };

  return (
    <div id="indiv-plant-container">
      <h2>{plant.title.rendered}</h2>
      <div className="indiv-plant-content">
        <div dangerouslySetInnerHTML={{ __html: plant.content.rendered }} />
      </div>
      <PlantType />
      <img
        id="plant-img-indiv-pg"
        src={plant._embedded["wp:featuredmedia"][0].source_url}
        alt={plant.title.rendered}
      />
      <Link to="/plantlist">
        <button id="indiv-plant-back-btn">
          <ArrowLeft />
          All Plants
        </button>
      </Link>
    </div>
  );
};

const PlantItem = () => {
  return (
    <div>
      <h2 id="plant-item-heading">Plant Details</h2>
      <RenderedPlant />
    </div>
  );
};

export default PlantItem;
