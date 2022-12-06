import { useAxios } from "use-axios-client";
import { Link } from "react-router-dom";

const baseUrl = process.env.REACT_APP_WP_API_BASEURL;

const AllPlantPosts = () => {
  const endpoint = `${baseUrl}plants?_embed`;
  const {
    data: plantPosts,
    error,
    loading,
  } = useAxios({
    url: endpoint,
  });

  // check if the news posts have been returned
  if (loading) return <p>Loading...</p>;
  if (!plantPosts) return "No posts found";
  if (error) return "Error";
  console.log(plantPosts);

  const showPlantPosts = plantPosts.map((post, index) => {
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
  return showPlantPosts;
};

const PlantPosts = () => {
  return (
    <div id="all-plants-container">
      <AllPlantPosts />
    </div>
  );
};

export default PlantPosts;
