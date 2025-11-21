import React, { useState } from "react";

function DivCreator() {
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [color, setColor] = useState("");
  const [boxes, setBoxes] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!width || !height || !color) {
      alert("Please fill all fields");
      return;
    }

    const newBox = {
      id: Date.now(),
      width: parseInt(width),
      height: parseInt(height),
      color
    };

    setBoxes((prev) => [...prev, newBox]);

    // Reset fields
    setWidth("");
    setHeight("");
    setColor("");
  };

  const deleteBox = (id) => {
    setBoxes((prev) => prev.filter((box) => box.id !== id));
  };

  return (
    <div>
      <h2>Create a styled div</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Width (px): </label>
          <input
            type="number"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
          />
        </div>

        <div>
          <label>Height (px): </label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>

        <div>
          <label>Background Color: </label>
          <input
            type="text"
            value={color}
            placeholder="red or #ff0000"
            onChange={(e) => setColor(e.target.value)}
          />
        </div>

        <button type="submit">Add Div</button>
      </form>

      <h3>Generated Divs</h3>
      <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
        {boxes.map((box) => (
          <div key={box.id}>
            <div
              style={{
                width: box.width,
                height: box.height,
                backgroundColor: box.color,
                border: "1px solid black"
              }}
            ></div>
            <button onClick={() => deleteBox(box.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DivCreator;
