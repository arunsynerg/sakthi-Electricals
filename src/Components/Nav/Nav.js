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
          <Link to="/">
           
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/products">
            <li className="products">
              Products
              <ul>
                <li>
                  product1
                  <ul>
                    <li>product1</li>
                    <li>productdfsdf2</li>
                    <li>product3</li>
                  </ul>
                </li>
                <li>productdfsdf2</li>
                <li>product3</li>
              </ul>
            </li>
          </Link>
          <Link to="Ourcustomer">
            <li>Our Customers</li>
          </Link>
          <Link to="CareerPage">
            <li>Careers</li>
          </Link>
          <Link to="contact">
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
          <Link to="/">
            <li
              onClick={handlelist}
              style={{ display: navlist ? "block" : "none" }}
            >
              Home
            </li>
          </Link>
          <Link to="about">
            <li
              onClick={handlelist}
              style={{ display: navlist ? "block" : "none" }}
            >
              About
            </li>
          </Link>
          <Link to="product">
            <li
              onClick={handlelist}
              style={{ display: navlist ? "block" : "none" }}
            >
              Products
            </li>
          </Link>
          <Link to="product">
            <li className="products">
              Products
              <ul>
                <li>product1</li>
                <li>productdfsdf2</li>
                <li>product3</li>
              </ul>
            </li>
          </Link>
          <Link to="Ourcustomer">
            <li
              onClick={handlelist}
              style={{ display: navlist ? "block" : "none" }}
            >
              ourCustomer
            </li>
          </Link>
          <Link to="CareerPage">
            <li
              onClick={handlelist}
              style={{ display: navlist ? "block" : "none" }}
            >
              Careers
            </li>
          </Link>
          <Link to="contact">
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
