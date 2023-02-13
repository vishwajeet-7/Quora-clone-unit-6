import { Route, Routes } from "react-router-dom";
import Login from "../Components/loginSignup/Login";
import QuoraHeader from "../Components/QuoraHeader/QuoraHeader";
import Quora from "../Components/Quora/Quora";
import Answer from "../Components/AnswerPage/Answer/Answer";
import SingleQuestion from "../Components/AnswerPage/SingleQuestion/SingleQuestion";
import Spaces from "../Components/Spaces/Spaces";
import Following from "../Components/Following/Following";

function Allroutes() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            // <PrivateRoute>
            <>
              <QuoraHeader />
              <Quora />
            </>
            // </PrivateRoute>
          }
        />
        <Route
          path="/answer"
          element={
            // <PrivateRoute>
            <>
              <QuoraHeader />
              <Answer />
            </>
            // </PrivateRoute>
          }
        />
        <Route
          path="/answer/:id"
          element={
            // <PrivateRoute>
            <>
              <QuoraHeader />
              <SingleQuestion />
            </>
            // </PrivateRoute>
          }
        />
        <Route
          path="/spaces"
          element={
            // <PrivateRoute>
            <>
              <QuoraHeader />
              <Spaces />
            </>
            // </PrivateRoute>
          }
        />
        <Route
          path="/following"
          element={
            // <PrivateRoute>
            <>
              <QuoraHeader />
              <Following />
            </>
            // </PrivateRoute>
          }
        />

        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </div>
  );
}

export default Allroutes;
