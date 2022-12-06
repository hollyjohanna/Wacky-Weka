import HomePgServices from "../components/HomePgServices";
import Hero from "./../components/Hero";
import HomePgTestimonials from "../components/HomePgTestimonials";
import PlantListBanner from "../components/PlantListBanner";
import Gallery from "../components/Gallery";

const Home = () => {
  return (
    <div>
      <Hero />
      <HomePgServices />
      <HomePgTestimonials />
      <PlantListBanner />
      <Gallery />
    </div>
  );
};

export default Home;
