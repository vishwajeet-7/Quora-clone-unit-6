import { Route, Routes } from "react-router-dom";
import Answer from "../Components/AnswerPage/Answer/Answer";
function Allroutes() {
  return (
    <div>
      <Routes>
        <Route path="/answer" element={<Answer />} />
      </Routes>
    </div>
  );
}

export default Allroutes;
