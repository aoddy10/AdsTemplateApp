import React, { useState } from "react";
import "./Toolbox.css";
import { useStateValue } from "../../utils/StateProvider";

const ToolboxText = ({ index, templateElement }) => {
  const [element, setElement] = useState(templateElement);

  const [{ template }, dispatch] = useStateValue();

  const updateTemplate = () => {
    // update element in data layer
    dispatch({
      type: "UPDATE_ELEMENT",
      item: {
        index: index,
        element: element,
      },
    });
  };

  const handleTextChange = (text) => {
    let newElement = element;
    newElement.text = text;
    setElement(newElement);

    // update template
    updateTemplate();
  };

  const handleFontSizeChange = (fontSize) => {
    console.log(fontSize);
    let newElement = element;
    newElement.fontSize = parseInt(fontSize);
    setElement(newElement);
    console.log(element);

    // update template
    updateTemplate();
  };

  const handleLocationXChange = (locationX) => {
    let newElement = element;
    newElement.location.x = parseInt(locationX);
    setElement(newElement);

    // update template
    updateTemplate();
  };

  const handleLocationYChange = (locationY) => {
    let newElement = element;
    newElement.location.y = parseInt(locationY);
    setElement(newElement);

    // update template
    updateTemplate();
  };

  const handleColorChange = (color) => {
    let newElement = element;
    newElement.color = color;
    setElement(newElement);

    // update template
    updateTemplate();
  };

  return (
    <div className="Toolbox d-flex flex-column" key={index}>
      <div className="card Toolbox__card">
        <div
          className="card-header btn"
          id={"heading" + index}
          data-toggle="collapse"
          data-target={"#collapse" + index}
          aria-expanded="true"
          aria-controls={"collapse" + index}
        >
          <div>{element.text}</div>
        </div>

        <div
          id={"collapse" + index}
          className="collapse"
          aria-labelledby={"heading" + index}
          data-parent="#accordion"
        >
          <div className="card-body">
            <div className="Toolbox__element d-flex pb-1 pt-1">
              <label htmlFor="text">Text</label>
              <input
                type="text"
                name="text"
                value={element.text}
                onChange={(e) => handleTextChange(e.target.value)}
              />
            </div>

            <div className="d-flex pb-1 pt-1">
              <label htmlFor="fontSize">Font size</label>
              <input
                type="number"
                name="fontSize"
                value={element.fontSize}
                onChange={(e) => handleFontSizeChange(e.target.value)}
              />
            </div>

            <div className="d-flex pb-1 pt-1">
              <label htmlFor="">Localtion</label>
              <div className="d-flex flex-column">
                <div>
                  <input
                    type="number"
                    name="text"
                    value={element.location.x}
                    onChange={(e) => handleLocationXChange(e.target.value)}
                  />
                </div>
                <div>
                  <input
                    type="number"
                    name="text"
                    value={element.location.y}
                    onChange={(e) => handleLocationYChange(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="d-flex pb-1 pt-1">
              <label htmlFor="color">Color</label>
              <input
                type="text"
                name="text"
                value={element.color}
                onChange={(e) => handleColorChange(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolboxText;
