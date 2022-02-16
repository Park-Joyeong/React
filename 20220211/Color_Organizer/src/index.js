import React from "react";
import ColorProvider from "./components/colorList/color-hooks";
import { render } from "react-dom";
import App from "./App";

render(
    <ColorProvider>
        <App />
    </ColorProvider>,
    document.getElementById("root")
);