import { useState } from "react";

function App() {
  const [firstEle, setFirstEle] = useState(0);
  const [secondEle, setSecondEle] = useState(0);
  const addOneAndTrigger = () => {
    const targetValue = firstEle + 1;
    setFirstEle(targetValue);
    setSecondEle(targetValue);
  }
  return (
    <table>
      <tbody>
        <tr>
          <td>
            First Element: <span>{firstEle}</span>
          </td>
          <td>
            <button onClick={addOneAndTrigger}>Add +1 (First Element) & trigger</button>
          </td>
        </tr>
        <tr>
          <td>
            Second Element: <span>{secondEle}</span>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default App;
