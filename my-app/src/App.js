import "./App.css";
import Allroutes from "../src/Frontend/Routes/Allroutes";
import { useSelector } from "react-redux";

function App() {
  const theme = useSelector((store) => store.themereducer.theme);
  const style =
    theme === "dark"
      ? { backgroundColor: "var(--darkComp)", border: "none" }
      : {};
  return (
    <div className="App" style={style}>
      <Allroutes />
    </div>
  );
}

export default App;
