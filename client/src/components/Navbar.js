import React from "react";
import { useHistory } from "react-router-dom";
import logo from "../images/AD_logo.png";

function Navbar() {
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

export default Navbar;
