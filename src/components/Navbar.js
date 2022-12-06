// Import Icons
import { List, Search } from "react-bootstrap-icons";
// Import dependencies
import { useState } from "react";
import { Link } from "react-router-dom";
// Import Mobile menu
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [MenuIsOpen, openMenu] = useState(false);
  const [searchString, updateSearch] = useState("");

  const toggleMobileMenu = () => {
    openMenu(!MenuIsOpen);
    if (SearchIsOpen) {
      handleClick();
    }
  };

  const [SearchIsOpen, openSearch] = useState(false);

  const handleClick = () => {
    openSearch(!SearchIsOpen);

    if (MenuIsOpen) {
      toggleMobileMenu();
    }
  };
  let toggleSearch = SearchIsOpen ? " active" : "";

  return (
    <>
      <div className={`outer-container${toggleSearch}`}>
        <div className="navbar">
          <div id="nav-container">
            <span id="logo">
              <Link to="/">WW</Link>
            </span>
            <div id="icon-container">
              <div id="search-btn">
                <Search onClick={handleClick} />
              </div>
              <div id="nav-menu">
                <List onClick={toggleMobileMenu} />
              </div>
            </div>
            <div id="right-nav">
              <ul id="desktop-ul">
                <li id="home-link">
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/plantlist">Plants</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Search onClick={handleClick} />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="search-container">
          <label htmlFor="search">Search Wacky Weka</label>
          <input
            type="text"
            id="search-bar"
            name="search"
            placeholder="Search..."
            onChange={(event) => {
              updateSearch(event.target.value);
            }}
          />
          <Search />
        </div>
        {MenuIsOpen && <MobileMenu closeMethod={toggleMobileMenu} />}
      </div>
    </>
  );
};

export default Navbar;
