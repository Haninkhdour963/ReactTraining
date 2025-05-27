import { useState } from "react";

function UseStateHooksfun() {
  const [name, setName] = useState("heno");

  const handleButtonClick = () => {
    if (name === "heno") {
      setName("Haneeno Khaddour after change state");
    } else {
      setName("heno");
    }
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Click me to change state</button>
      <h1>{name}</h1>
    </div>
  );
}

export default UseStateHooksfun;
