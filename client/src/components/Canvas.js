import React from "react";
import "./Canvas.css";
import Navbar from "./Navbar";
import { useStateValue } from "../utils/StateProvider";

function Canvas() {
  const [{ template }, dispatch] = useStateValue();
  console.log(template);

  return (
    <div className="Canvas">
      <Navbar />
      <div className="container">
        <h1>{template[0].name}</h1>
        <div className="row">
          <div className="Canvas__layout bg-secondary">
            {/* display background */}
            {template[0].element
              .filter((item, index) => {
                return item.type === "background";
              })
              .map((item) => {
                return (
                  <img
                    className="Canvas__background"
                    src={`${process.env.PUBLIC_URL}/templates/` + item.filePath}
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
          <div className="Canvas__edit d-flex flex-column bg-secondary">
            <div className="bg-primary text-light text-center">Edit</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Canvas;
