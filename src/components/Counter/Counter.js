import "./Counter.css";
import React, { useState } from "react";

function Counter() {
  const [clicks, setClicks] = useState(0);
  function countClicks() {
    setClicks(clicks + 1);
  }
  let iButton = document.getElementsByClassName("Button");
  iButton[0].addEventListener("click", countClicks);
  return (
    <div className="Counter">
      <h3 className="Title">Contador</h3>
      <p className="Number">{clicks} cliques!</p>
      <div className="Button noselect">Clique!</div>
    </div>
  );
}

export default Counter;
