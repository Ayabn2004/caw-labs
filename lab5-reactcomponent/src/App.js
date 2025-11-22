import React from "react";

// EXO 1
import ClickMe from "./ClickMe";
import ToggleClick from "./ToggleClick";
import ThreeButtons from "./ThreeButtons";
import Counter from "./Counter";

// EXO 2
import DisplayTab from "./DisplayTab";

// EXO 3
import AuthForm from "./AuthForm";

// EXO 4
import DivCreator from "./DivCreator";

function App() {
  const tab1 = ["hello", "world", "from", "react"];
  const tab2 = ["apple", "banana", "orange", "kiwi"];

  return (
    <div style={{ padding: 20 }}>
      {/* EXO 1  */}
      <div style={{ marginBottom: 40 }}>
        <h1>Exercise 1</h1>
        <ClickMe />
        <ToggleClick />
        <ThreeButtons />
        <Counter />
      </div>

      {/* EXO 2  */}
      <div style={{ marginBottom: 40 }}>
        <h1>Exercise 2</h1>
        <h3>First List</h3>
        <DisplayTab items={tab1} />

        <h3>Second List</h3>
        <DisplayTab items={tab2} />
      </div>

      {/*  EXO 3*/}
      <div style={{ marginBottom: 40 }}>
        <h1>Exercise 3</h1>
        <AuthForm />
      </div>

      {/*  EXO 4  */}
      <div style={{ marginBottom: 40 }}>
        <h1>Exercise 4</h1>
        <DivCreator />
      </div>
    </div>
  );
}

export default App;
