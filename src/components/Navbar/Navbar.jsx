import logo from "../../assets/logo.png";
import cart from "../../assets/cart.png";

import { useState } from "react";

import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

import "./Navbar.css";
import CustomButton from "../CustomButton/CustomButton";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="navbar">
      <div className="navbar__links">
        <p>
          <a href="#home">HOME</a>
        </p>
        <p>
          <a href="#about">ABOUT</a>
        </p>
        <p>
          <a href="#shop">SHOP</a>
        </p>
        <p>
          <a href="#menu">MENU</a>
        </p>
        <p>
          <a href="#contact">CONTACT</a>
        </p>
      </div>
      <div className="navbar__logo">
        <img src={logo} alt="coffee shop logo" />
      </div>
      <div className="navbar__buttons">
        <p>SUBSCRIPTION</p>
        <CustomButton className="btn" title="SIGN IN" />
        <img src={cart} alt="" />
      </div>
      <div className="navbar__menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#000"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#000"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="navbar__menu_container">
            <div className="navbar__menu_container-links">
              <p>
                <a href="#home">HOME</a>
              </p>
              <p>
                <a href="#about">ABOUT</a>
              </p>
              <p>
                <a href="#shop">SHOP</a>
              </p>
              <p>
                <a href="#menu">MENU</a>
              </p>
              <p>
                <a href="#contact">CONTACT</a>
              </p>
            </div>
            <div className="navbar__menu_container-links-sign">
              <p>SUBSCRIPTIONS</p>
              <button type="button">SIGN IN</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
