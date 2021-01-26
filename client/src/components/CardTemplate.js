import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../utils/StateProvider";

const CardTemplate = ({ title, imageName }) => {
  const [{ template }, dispatch] = useStateValue();

  // const [title, setTitle] = useState(props.title);
  // const [imageName, setImageName] = useState(props.imageName);
  const history = useHistory();

  const handleCreateClick = () => {
    // add Template to data layer
    dispatch({
      type: "REPLACE_TO_TEMPLATE",
      item: {
        title: title,
        imageName: imageName,
      },
    });

    // history.push("/canvas");
  };

  return (
    <div className="Card card mt-3">
      <img
        className="card-img-top"
        src={`${process.env.PUBLIC_URL}/templates/` + imageName}
        alt="Card image"
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <div className="btn btn-primary" onClick={handleCreateClick}>
          Create Ad.
        </div>
      </div>
    </div>
  );
};

export default CardTemplate;
