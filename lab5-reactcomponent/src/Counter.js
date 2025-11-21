import React, { useState } from "react";

function Counter() {
  const [n, setN] = useState(0);

  return (
    <div>
      <h1>{n}</h1>
      <button onClick={() => setN(n + 1)}>Inc</button>
      <button onClick={() => setN(n - 1)}>Dec</button>
    </div>
  );
}

export default Counter;
