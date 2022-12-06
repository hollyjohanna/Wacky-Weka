import { Link } from "react-router-dom";

const MobileMenu = ({ closeMethod }) => {
  return (
    <div id="mobile-menu">
      <ul>
        <li>
          <Link to="/" onClick={closeMethod}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={closeMethod}>
            About
          </Link>
        </li>
        <li>
          <Link to="/services" onClick={closeMethod}>
            Services
          </Link>
        </li>
        <li>
          <Link to="/plantlist" onClick={closeMethod}>
            Plants
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={closeMethod}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
