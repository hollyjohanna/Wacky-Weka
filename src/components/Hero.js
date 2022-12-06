import { Link } from "react-router-dom";
// import { ArrowDownCircle } from "react-bootstrap-icons";

const Hero = () => {
  return (
    <div id="hero-container">
      <h3>Welcome To</h3>
      <h1>Wacky Weka</h1>
      <h2>Nurseries</h2>
      <p>
        Wacky Weka Nursery is a brand new nursery specialising in native trees
        from all over Aotearoa. Led by the values of Kaitiakitanga, the
        guardianship and protection of Aotearoa, we bring you ethically sourced
        trees for your home, buisness or city.
      </p>
      <Link to="/about">
        <button>About Us</button>
      </Link>
      {/* <a
        href="#hm-pg-services-container"
        onClick={(e) => {
          let section = document.getElementById("section");
          e.preventDefault();
          section && section.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <ArrowDownCircle />
      </a> */}
    </div>
  );
};

export default Hero;
