import './App.css';
import { useState } from "react";

function App() {
  const [inputText, setInputText] = useState();
  const [resultSpan, setResultSpan] = useState("");
  const checkValue = () => {
    setResultSpan(inputText);
  }
  const handleChange = (event) => {
    setInputText(event.target.value);
  }
  return (
    <div>
      <input type="text" onChange={handleChange}/>
      <button type="button" onClick={checkValue}>출력</button>
      <h1>Result: <span>{resultSpan}</span></h1>
    </div>
  );
}

export default App;
