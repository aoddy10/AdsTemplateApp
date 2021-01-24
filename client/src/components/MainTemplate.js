import React from "react";
import "./MainTemplate.css";
import logo from "../images/AD_logo.png";
import { useHistory } from "react-router-dom";

function MainTemplate() {
  const history = useHistory();

  const handleLogoClick = () => {
    history.push("/main");
  };

  return (
    <div className="">
      <nav className="Navbar navbar navbar-light bg-dark">
        <img
          src={logo}
          className="Navbar__logo"
          alt=""
          onClick={handleLogoClick}
        />
      </nav>
    </div>
  );
}

export default MainTemplate;
