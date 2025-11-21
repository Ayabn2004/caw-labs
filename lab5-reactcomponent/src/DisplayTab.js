import React, { useState } from "react";

function DisplayTab({ items }) {
  // On stocke les items dans un state pour pouvoir les modifier
  const [tab, setTab] = useState(items);

  // Supprimer un élément lorsqu'on clique dessus
  const handleRemove = (index) => {
    setTab((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <ul>
      {tab.map((el, index) => (
        <li 
          key={index} 
          onClick={() => handleRemove(index)}
          style={{ cursor: "pointer" }}
        >
          Element {index + 1} is: {el}
        </li>
      ))}
    </ul>
  );
}

export default DisplayTab;
