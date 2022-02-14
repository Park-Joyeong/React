import React from "react";
import ColorList from "./components/colorList/ColorList.js";
import AddColorForm from "./components/colorList/AddColorForm";

export default function App() {
    return (
        <>
            <AddColorForm />
            <ColorList />
        </>
    );
}