import React, { useState } from "react";

function DivCreator() {
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");
  const [color, setColor] = useState("");
  const [divs, setDivs] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!height || !width || !color) return;

    const newDiv = {
      id: Date.now(),
      height: Number(height),
      width: Number(width),
      color,
    };

    setDivs([...divs, newDiv]);

    // Clear inputs
    setHeight("");
    setWidth("");
    setColor("");
  };

  return (
    <div>
      <h2>Div Creator</h2>

      <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
        <div>
          <label>Height (px) : </label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>

        <div>
          <label>Width (px) : </label>
          <input
            type="number"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
          />
        </div>

        <div>
          <label>Background Color : </label>
          <input
            type="text"
            placeholder="ex: red, blue, #ff1234"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>

        <button type="submit" style={{ marginTop: 10 }}>Create Div</button>
      </form>

      {/* Display Divs */}
      <div>
        {divs.map((box) => (
          <div
            key={box.id}
            style={{
              height: box.height,
              width: box.width,
              backgroundColor: box.color,
              marginBottom: 15,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default DivCreator;
