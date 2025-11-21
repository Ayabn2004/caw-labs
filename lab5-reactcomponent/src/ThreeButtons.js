import React, { useState } from "react";

function ThreeButtons() {
  const [last, setLast] = useState(null);

  return (
    <div>
      <button onClick={() => setLast(1)}>Button1</button>
      <button onClick={() => setLast(2)}>Button2</button>
      <button onClick={() => setLast(3)}>Button3</button>

      {last !== null && <p>Button #{last} was clicked</p>}
    </div>
  );
}

export default ThreeButtons;
