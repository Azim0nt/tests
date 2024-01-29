import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";

function App() {
  const [count, setCount] = useState({
    div1: 1,
    div2: 10,
    div3: 0,
    div4: 100,
    div5: 1,
  });
  const IncFunc = (param, increment) => {
    setCount((prevCount) => ({
      ...prevCount,
      [param]: prevCount[param] + increment,
    }));
  };
  return (
    <div className="App">
      <div className="app-grid">
        <div className="card">
          <div className="top">
            <div
              className="dot"
              style={{ transform: `rotate(${count.div1}deg)` }}
            ></div>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div className="bottom">
            <button onClick={() => IncFunc("div1", 10)}>Нажми!</button>
          </div>
        </div>
        <div className="card" style={{ fontSize: `${count.div2}px` }}>
          <div className="top">
            <div className="dot"></div>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div className="bottom">
            <button onClick={() => IncFunc("div2", 5)}>Нажми!</button>
          </div>
        </div>
        <div className="card">
          <div className="top">
            <div
              className="dot"
              style={{ transform: `rotate(-${count.div3}deg)` }}
            ></div>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div className="bottom">
            <button onClick={() => IncFunc("div3", 10)}>Нажми!</button>
          </div>
        </div>
        <div className="card" style={{ fontWeight: `${count.div4}` }}>
          <div className="top">
            <div className="dot"></div>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div className="bottom">
            <button onClick={() => IncFunc("div4", 100)}>Нажми!</button>
          </div>
        </div>
        <div className="card">
          <div className="top">
            <div
              className="dot"
              style={{ transform: `scale(${count.div5})` }}
            ></div>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div className="bottom">
            <button onClick={() => IncFunc("div5", 0.1)}>Нажми!</button>
          </div>
        </div>



      </div>
    </div>
  );
}

export default App;
