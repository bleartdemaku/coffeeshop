import logo from "../../assets/logo.png";
import cart from "../../assets/cart.png";

import "./Navbar.css";
import CustomButton from "../CustomButton/CustomButton";

const Navbar = () => {
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
        <CustomButton title="SIGN IN" />
        <img src={cart} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
