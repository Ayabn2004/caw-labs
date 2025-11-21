import React, { useState } from "react";

function ToggleClick() {
  const [count, setCount] = useState(0);

  const text = count % 2 === 1 ? "Clicked" : "Not Clicked";

  return (
    <div>
      <button onClick={() => setCount(prev => prev + 1)}>Toggle</button>
      <p>{text}</p>
    </div>
  );
}

export default ToggleClick;
