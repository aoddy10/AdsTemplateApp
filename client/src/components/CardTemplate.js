import React, { useState } from "react";

const CardTemplate = (props) => {
  const [title, setTitle] = useState(props.title);
  const [imageName, setImageName] = useState(props.imageName);

  return (
    <div className="Card card mt-3">
      <img
        className="card-img-top"
        src={`${process.env.PUBLIC_URL}/templates/` + imageName}
        alt="Card image"
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <a href="#" className="btn btn-primary">
          Create Ad.
        </a>
      </div>
    </div>
  );
};

export default CardTemplate;
