import React from "react";
import "./LandingPage.css";
import logo from "../images/AD_logo.png";
import { useHistory } from "react-router-dom";

function LandingPage() {
  const history = useHistory();

  const handleHomeButtonClick = () => {
    history.push("/main");
  };

  return (
    <div className="bg-primary">
      <div className="wrapper fadeInDown">
        <div className="LandingBox">
          <div className="fadeIn first mt-4 mb-4">
            <img src={logo} className="LandingBox__logo" alt="MAR Logo" />
          </div>

          <h2 className="LandingBox__title">
            Welcom to Ad Template Application
          </h2>
          <p className="LandingBox__text">
            Easy way to create your Ad. Simple and Quick to get in touch with
            your follower.
          </p>
          <button
            className="LandingBox__button btn"
            onClick={handleHomeButtonClick}
          >
            Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
