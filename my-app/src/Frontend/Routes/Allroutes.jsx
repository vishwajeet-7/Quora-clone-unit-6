import { Route, Routes } from "react-router-dom";
import Answer from "../Components/AnswerPage/Answer/Answer";
import SingleQuestion from "../Components/AnswerPage/SingleQuestion/SingleQuestion";
function Allroutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Answer />} />
        <Route path="/:id" element={<SingleQuestion />} />
      </Routes>
    </div>
  );
}

export default Allroutes;
