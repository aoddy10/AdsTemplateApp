import React from "react";
import "./MainTemplate.css";
import { useHistory } from "react-router-dom";
import Navbar from "./Navbar";
import CardTemplate from "./CardTemplate";
import templates from "./Data";
import { useStateValue } from "../utils/StateProvider";

function MainTemplate() {
  const [{ template }, dispatch] = useStateValue();
  console.log(template);

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
            <div key={index} className="col-6 col-md-3">
              <CardTemplate
                name={item.name}
                picture={item.picture}
                element={item.element}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainTemplate;
