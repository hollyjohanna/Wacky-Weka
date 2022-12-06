import deliverygallery from "./../img/delivery-gallery.png";
import landscapegallery from "./../img/landscape-gallery.png";
import plantsgallery from "./../img/plants-gallery.png";
import rosesgallery from "./../img/roses-gallery.png";
import { Instagram } from "react-bootstrap-icons";

const Gallery = () => {
  return (
    <div id="hm-pg-gallery">
      <h2>Gallery</h2>
      <div id="gallery-container">
        <img id="roses" src={rosesgallery} alt="roses"></img>
        <img id="landscape" src={landscapegallery} alt="landscape"></img>
        <img id="plants" src={plantsgallery} alt="Plants"></img>
        <img id="delivery" src={deliverygallery} alt="Delivery"></img>
      </div>
      <a
        href="https://www.instagram.com/wacky_weka_nursery/"
        target="_blank"
        rel="noreferrer"
      >
        <button>
          See Our Instagram <Instagram />
        </button>
      </a>
    </div>
  );
};

export default Gallery;
