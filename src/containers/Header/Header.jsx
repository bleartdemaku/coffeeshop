import CustomButton from "../../components/CustomButton/CustomButton";
import coffee1 from "../../assets/coffee1.jpg";
import coffee2 from "../../assets/coffee2.jpg";

import "./Header.css";

const Header = () => {
  return (
    <div className="container">
      <div className="header">
        <p className="header__title">
          We Delivery The <br />
          Best Coffee Bean <br />
          To Your Home
        </p>
        <p className="header__subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          <br />
          purus sit amet luctus venenatis, lectus magna fringilla urna, <br />
          porttitor rhoncus dolor purus non enim
        </p>
        <CustomButton title={"SHOP NOW"} />
      </div>
      <div className="header__photos">
        <img className="img1" src={coffee1} alt="coffee" />
        <img className="img2" src={coffee2} alt="coffee" />
      </div>
    </div>
  );
};

export default Header;
