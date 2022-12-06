import { useAxios } from "use-axios-client";

const baseUrl = process.env.REACT_APP_WP_API_BASEURL;

const AllAboutPosts = () => {
  const endpoint = `${baseUrl}about?_embed`;
  const {
    data: aboutPosts,
    error,
    loading,
  } = useAxios({
    url: endpoint,
  });

  // check if the services posts have been returned
  if (loading) return <p>Loading...</p>;
  if (!aboutPosts) return "No posts found";
  if (error) return "Error";
  //   console.log(aboutPosts);

  const showAboutPosts = aboutPosts.map((post, index) => {
    return (
      <div className="about-post-content" key={index}>
        <h3>{post.title.rendered}</h3>
        <div className="content">
          <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </div>
        <img
          className="featured-img"
          src={post._embedded["wp:featuredmedia"][0].source_url}
          alt={post.title.rendered}
        ></img>
      </div>
    );
  });
  return showAboutPosts;
};

const AboutPosts = () => {
  return (
    <div id="about-post-container">
      <AllAboutPosts />
    </div>
  );
};

export default AboutPosts;
