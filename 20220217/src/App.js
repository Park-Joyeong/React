import { useEffect } from "react";
import useAnyKeyToRender from "./components/useAnyKeyToRender";

function App() {
  useAnyKeyToRender();

  useEffect(() => {
    console.log("fresh render");
  });

  return <h1>Open the console</h1>;
}

export default App;
