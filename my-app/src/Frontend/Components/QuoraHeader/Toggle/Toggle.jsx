import "./Toggle.css";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useSelector } from "react-redux";

const Toggle = () => {
  // const dispatch = useDispatch()
  const theme = useSelector((store) => store.themereducer.theme);
  return (
    <div className="toggle">
      <DarkModeIcon
        style={theme === "dark" ? { fill: "white" } : { fill: "none" }}
      />
      <LightModeIcon
        style={theme === "light" ? { fill: "orangeRed" } : { fill: "none" }}
      />
      <div
        className="t-button"
        style={theme === "light" ? { left: "2px" } : { right: "2px" }}
      ></div>
    </div>
  );
};

export default Toggle;
