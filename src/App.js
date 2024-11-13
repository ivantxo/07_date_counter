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

  function resetStates() {
    setStep(1);
    setCount(0);
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
        <button onClick={() => increaseCount()}>-</button>
      </div>
      <div>
        {day} is {today.toDateString()}
      </div>

      {count !== 0 || step !== 1 ? (
        <div>
          <button onClick={() => resetStates()}>Reset</button>
        </div>
      ) : null}
    </div>
  );
}

export default App;
