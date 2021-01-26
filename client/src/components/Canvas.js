import React from "react";
import "./Canvas.css";
import Navbar from "./Navbar";
import { useStateValue } from "../utils/StateProvider";

function Canvas() {
  const [{ template }, dispatch] = useStateValue();

  return (
    <div className="Canvas">
      <Navbar />
      <div className="container">
        <h1>{template[0].title}</h1>
        <div className="row">
          <div className="Canvas__layout bg-secondary">display</div>
          <div className="Canvas__edit bg-secondary">edit layer</div>
        </div>
      </div>
    </div>
  );
}

export default Canvas;
