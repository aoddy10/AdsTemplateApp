import React from "react";
import "./MainTemplate.css";

import { useHistory } from "react-router-dom";
import Navbar from "./Navbar";

function MainTemplate() {
  const history = useHistory();

  const handleLogoClick = () => {
    history.push("/main");
  };

  return (
    <div className="">
      <Navbar />
    </div>
  );
}

export default MainTemplate;
