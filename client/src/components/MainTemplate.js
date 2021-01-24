import React from "react";
import "./MainTemplate.css";
import { useHistory } from "react-router-dom";
import Navbar from "./Navbar";
import CardTemplate from "./CardTemplate";
import templates from "./Data";

function MainTemplate() {
  const history = useHistory();

  return (
    <div className="bg-white mb-4">
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col mt-4">
            <h2>Choose template...</h2>
          </div>
        </div>
        <div className="row">
          {templates.map((item, index) => (
            <div className="col-12 col-md-3">
              <CardTemplate
                key={index}
                title={item.name}
                imageName={item.picture}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainTemplate;
