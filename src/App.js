import { useState } from "react";

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  function handleStep(localStep) {
    setStep(localStep);
  }

  function decreaseCount() {
    setCount((c) => c - step);
  }

  function increaseCount() {
    setCount((c) => c + step);
  }

  function handleCount(localCount) {
    setCount(localCount);
  }

  let day = count === 0 ? "Today" : `${count} days from today`;

  const today = new Date();
  today.setDate(today.getDate() + count);
  return (
    <div style={{ textAlign: "center", fontSize: "26px" }}>
      <div>
        <input
          style={{ width: "230px", margin: "0 auto" }}
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => handleStep(Number(e.target.value))}
        />
        {step}
      </div>
      <div>
        <button onClick={() => decreaseCount()}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => handleCount(e.target.value)}
        />
        <button onClick={() => increaseCount()}>+</button>
      </div>
      <div>
        {day} is {today.toDateString()}
      </div>
    </div>
  );
}

export default App;
