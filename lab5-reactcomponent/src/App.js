// import React from "react";
// import ClickMe from "./ClickMe";
// import ToggleClick from "./ToggleClick";
// import ThreeButtons from "./ThreeButtons";
// import Counter from "./Counter";

// function App() {
//   return (
//     <div style={{ padding: 20 }}>
//       <h2>Exercise 1</h2>

//       <ClickMe />
//       <ToggleClick />
//       <ThreeButtons />
//       <Counter />
//     </div>
//   );
// }

// export default App;


// exo2
import React from "react";
import DisplayTab from "./DisplayTab";

function App() {
  const tab1 = ["hello", "world", "from", "react"];
  const tab2 = ["apple", "banana", "orange", "kiwi"];

  return (
    <div style={{ padding: 20 }}>
      <h2>Exercise 2</h2>

      <h3>First List</h3>
      <DisplayTab items={tab1} />

      <h3>Second List</h3>
      <DisplayTab items={tab2} />
    </div>
  );
}

export default App;


// exo3
// import React from "react";
// import AuthForm from "./AuthForm";

// function App() {
//   return (
//     <div style={{ padding: 20 }}>
//       <h1>Exercise 3</h1>
//       <AuthForm />
//     </div>
//   );
// }

// export default App;


// exo4
// import React from "react";
// import DivCreator from "./DivCreator";

// function App() {
//   return (
//     <div style={{ padding: 20 }}>
//       <h1>Exercise 4</h1>
//       <DivCreator />
//     </div>
//   );
// }

// export default App;

