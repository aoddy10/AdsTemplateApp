import React, { useState } from "react";
import "./Canvas.css";
import Navbar from "./Navbar";
import { useStateValue } from "../utils/StateProvider";
import { useHistory } from "react-router-dom";
import ToolboxText from "./toolbox/ToolboxText";

function Canvas() {
  const [{ template }, dispatch] = useStateValue();
  const [defaultTemplate, setDefaultTemplate] = useState(template);

  const history = useHistory();

  const handleGoBackClick = () => {
    history.push("/main");
  };

  const handleDownload = () => {};

  return (
    <div className="Canvas bg-secondary">
      <Navbar />
      <div className="container">
        <div className="d-flex p-2">
          <h2 className="text-white">{template[0].name}</h2>
          <button className="btn btn-warning ml-auto" onClick={handleDownload}>
            Download
          </button>
          <button className="btn btn-warning ml-2" onClick={handleGoBackClick}>
            Go back
          </button>
        </div>

        <div className="d-flex bg-dark">
          <div className="d-flex justify-content-center">
            <div className="Canvas__layout">
              {/* display background */}
              {template[0].element
                .filter((item, index) => {
                  return item.type === "background";
                })
                .map((item) => {
                  return (
                    <img
                      className="Canvas__background"
                      src={
                        `${process.env.PUBLIC_URL}/templates/` + item.filePath
                      }
                      alt=""
                    />
                  );
                })}
              {/* display text */}
              {template[0].element
                .filter((item, index) => {
                  return item.type === "text";
                })
                .map((item) => {
                  return (
                    <div
                      className="Canvas__text"
                      style={{
                        fontFamily: item.fontFamily,
                        fontSize: item.fontSize,
                        zIndex: item.zIndex,
                        left: item.location.x,
                        top: item.location.y,
                        color: item.color,
                      }}
                    >
                      {item.text}
                    </div>
                  );
                })}
            </div>
          </div>

          <div className="Toolbox d-flex flex-column bg-white ml-auto">
            <div className="bg-primary text-light text-center">Tool Box</div>
            <div className="">
              {/* display tool element in tool box */}
              {template[0].element
                .filter((item, index) => {
                  return item.type === "text";
                })
                .map((item, index) => {
                  return (
                    <div className="d-flex flex-column">
                      <ToolboxText index={index} templateElement={item} />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Canvas;
