import React, { useState } from "react";
import colorData from "./components/colorList/color-data.json";
import ColorList from "./components/colorList/ColorList.js";

export default function App() {
    const [colors] = useState(colorData);
    return <ColorList colors={colors} />;
}