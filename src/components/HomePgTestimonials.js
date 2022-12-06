import { useAxios } from "use-axios-client";
import { StarFill } from "react-bootstrap-icons";

const baseUrl = process.env.REACT_APP_WP_API_BASEURL;

const AllTestimonials = () => {
  const endpoint = `${baseUrl}testimonials?_embed`;
  const {
    data: TestimonialPosts,
    error,
    loading,
  } = useAxios({
    url: endpoint,
  });

  // check if the services posts have been returned
  if (loading) return <p>Loading...</p>;
  if (!TestimonialPosts) return "No posts found";
  if (error) return "Error";
  // console.log(TestimonialPosts);

  const showTestimonialPosts = TestimonialPosts.map((post, index) => {
    return (
      <div id="testimonial-card" key={index}>
        <div id="img-container">
          <img
            id="testimonial-img"
            className="featured-img"
            src={post._embedded["wp:featuredmedia"][0].source_url}
            alt={post.title.rendered}
          ></img>
        </div>
        <h3 id="testimonial-name">{post.title.rendered}</h3>
        <div className="content">
          <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </div>
        <div id="star-container">
          <StarFill />
          <StarFill />
          <StarFill />
          <StarFill />
          <StarFill />
        </div>
      </div>
    );
  });
  return showTestimonialPosts;
};

const HomePgTestimonials = () => {
  return (
    <div id="testimonials-container">
      <h2>Testimonials</h2>
      <AllTestimonials />
    </div>
  );
};

export default HomePgTestimonials;
