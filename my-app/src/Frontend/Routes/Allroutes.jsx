import { Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
// import Login from "../Components/loginSignup/Login";
import Login from "../Components/Login/Login";
import QuoraHeader from "../Components/QuoraHeader/QuoraHeader";
import Quora from "../Components/Quora/Quora";
import Answer from "../Components/AnswerPage/Answer/Answer";
import SingleQuestion from "../Components/AnswerPage/SingleQuestion/SingleQuestion";
import Spaces from "../Components/Spaces/Spaces";
import Following from "../Components/Following/Following";
import PrivateRoute from "../Components/PrivateRoute";
import { user } from "../Api/Url";
function Allroutes() {
  const [Log, setLog] = useState("Loading");
  useEffect(() => {
    fetch(`${user}?login=true`).then((res) => {
      res.json().then((res) => {
        if (res.length > 0) {
          setLog(true);
        } else {
          setLog(false);
        }
      });
    });
  }, []);
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <>
                <QuoraHeader />
                <Quora />
              </>
            </PrivateRoute>
          }
        />

        <Route
          path="/answer"
          element={
            <PrivateRoute>
              <>
                <QuoraHeader />
                <Answer />
              </>
            </PrivateRoute>
          }
        />
        <Route
          path="/answer/:id"
          element={
            <PrivateRoute>
              <>
                <QuoraHeader />
                <SingleQuestion />
              </>
            </PrivateRoute>
          }
        />
        <Route
          path="/spaces"
          element={
            <PrivateRoute>
              <>
                <QuoraHeader />
                <Spaces />
              </>
            </PrivateRoute>
          }
        />
        <Route
          path="/following"
          element={
            <PrivateRoute>
              <>
                <QuoraHeader />
                <Following />
              </>
            </PrivateRoute>
          }
        />

        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
    </div>
  );
}

export default Allroutes;
