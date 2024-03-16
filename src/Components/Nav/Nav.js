import { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import logo from "../../Assets/logo.png";
import { FaBars } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import CareerPage from "../Careers/Careers";
function Navbar() {
  const [navlist, Setnavlist] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  function handlelist() {
    Setnavlist(!navlist);
  }
  return (
    <>
      <div className={navbar ? "navcontainer active" : "navcontainer"}>
        <div className="logo_container">
          <img src={logo} />
        </div>
        <ul className="navlists">
          <Link to="/" smooth={true} duration={900} offset={-960}>
            {" "}
            <li>Home</li>
          </Link>
          <Link to="about" smooth={true} duration={900} offset={-55}>
            <li>About</li>
          </Link>
          <Link to="product" smooth={true} duration={900} offset={-50}>
            <li className="products">
              Products
              <ul>
                <li>product1</li>
                <li>productdfsdf2</li>
                <li>product3</li>
              </ul>
            </li>
          </Link>
          <Link to="service" smooth={true} duration={900} offset={-55}>
            <li>Our Customers</li>
          </Link>
          <Link to="CareerPage" smooth={true} duration={900} offset={-50}>
            <li>Careers</li>
          </Link>
          <Link to="contact" smooth={true} duration={900} offset={-50}>
            <li>Contact</li>
          </Link>
        </ul>
        <FaBars
          className="navexpand-btn"
          onClick={() => {
            Setnavlist(!navlist);
          }}
          style={{ display: navlist ? "none" : "" }}
        />
        <IoCloseSharp
          id="navclosebtn"
          className="navexpand-btn"
          onClick={handlelist}
          style={{ display: navlist ? "block" : "none" }}
        />
      </div>
      <div
        className="navcontainer_mobileview"
        style={{ display: navlist ? "block" : "none" }}
      >
        <ul className="navlists_mobileview">
          <Link to="/" smooth={true} duration={900} offset={-960}>
            {" "}
            <li
              onClick={handlelist}
              style={{ display: navlist ? "block" : "none" }}
            >
              Home
            </li>
          </Link>
          <Link to="about" smooth={true} duration={900} offset={-55}>
            <li
              onClick={handlelist}
              style={{ display: navlist ? "block" : "none" }}
            >
              About
            </li>
          </Link>
          <Link to="product" smooth={true} duration={900} offset={-50}>
            <li
              onClick={handlelist}
              style={{ display: navlist ? "block" : "none" }}
            >
              Products
            </li>
          </Link>
          <Link to="product" smooth={true} duration={900} offset={-50}>
            <li className="products">
              Products
              <ul>
                <li>product1</li>
                <li>productdfsdf2</li>
                <li>product3</li>
              </ul>
            </li>
          </Link>
          <Link to="service" smooth={true} duration={900} offset={-55}>
            <li
              onClick={handlelist}
              style={{ display: navlist ? "block" : "none" }}
            >
              Services
            </li>
          </Link>
          <Link to="CareerPage" smooth={true} duration={900} offset={-50}>
            <li
              onClick={handlelist}
              style={{ display: navlist ? "block" : "none" }}
            >
              Careers
            </li>
          </Link>
          <Link to="contact" smooth={true} duration={900} offset={-50}>
            <li
              onClick={handlelist}
              style={{ display: navlist ? "block" : "none" }}
            >
              Contact
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
}
export default Navbar;
