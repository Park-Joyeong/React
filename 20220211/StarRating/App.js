import StarRating from "./components/StarRating";

export default function App() {
    return (
        <StarRating
            style={{ backgroundColor: "lightblue" }}
            onDoubleClick={e => alert("double click")}
        />
    );
}