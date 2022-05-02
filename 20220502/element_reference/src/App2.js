import './App.css';
import { useRef } from "react";

function App() {
  const inputText = useRef(null);
  const resultSpan = useRef(null);
  const checkValue = () => {
    const result = inputText.current.value;
    resultSpan.current.textContent = result;
  }
  return (
    <div>
      <input type="text" ref={inputText} />
      <button type="button" onClick={checkValue}>출력</button>
      <h1>Result: <span ref={resultSpan}></span></h1>
    </div>
  );
}

export default App;
