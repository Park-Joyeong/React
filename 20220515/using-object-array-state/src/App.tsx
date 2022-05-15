import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState<number>();
  const [personInfoArray, setPersonInfoArray] = useState<
    {
      name: string;
      age: number;
    }[]
  >([]);
  const insertPersonInfo = () => {
    setPersonInfoArray([...personInfoArray, { name: name, age: age }])
    setName("");
    setAge(null);
  }
  return (
    <div>
      <table>
        <tr>
          <td>이름: </td>
          <td><input type="text" value={name} onChange={e => setName(e.currentTarget.value)}></input></td>
        </tr>
        <tr>
          <td>나이: </td>
          <td><input type="number" min="1" value={age || ''} onChange={e => setAge(parseInt(e.currentTarget.value))}></input></td>
        </tr>
        <tr>
          <td><button onClick={insertPersonInfo}>입력</button></td>
        </tr>
      </table>
      <br />
      <div>
        ===Result===
        <br />
        {personInfoArray.map(personInfo => <div>이름: {personInfo.name}, 나이: {personInfo.age}</div>)}
      </div>
    </div>
  );
}

export default App;
