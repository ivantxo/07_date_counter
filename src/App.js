import { useState } from "react";

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  function decreaseStep() {
    setStep((c) => c - 1);
  }

  function increaseStep() {
    setStep((c) => c + 1);
  }

  function decreaseCount() {
    setCount((c) => c - step);
  }

  function increaseCount() {
    setCount((c) => c + step);
  }

  let day = count === 0 ? "Today" : `${count} days from today`;

  const today = new Date();
  today.setDate(today.getDate() + count);
  return (
    <div style={{ textAlign: "center", fontSize: "26px" }}>
      <div>
        <button onClick={() => decreaseStep()}>-</button> Step {step}{" "}
        <button onClick={() => increaseStep()}>+</button>
      </div>
      <div>
        <button onClick={() => decreaseCount()}>-</button> Count {count}{" "}
        <button onClick={() => increaseCount()}>+</button>
      </div>
      <div>
        {day} is {today.toDateString()}
      </div>
    </div>
  );
}

export default App;
