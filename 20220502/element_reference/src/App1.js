import './App.css';

function App() {
  const checkValue = () => {
    const result = document.getElementById("inputText").value;
    document.getElementById("result").textContent = result;
  }
  return (
    <div>
      <input type="text" id="inputText" />
      <button type="button" onClick={checkValue}>출력</button>
      <h1>Result: <span id="result"></span></h1>
    </div>
  );
}

export default App;
