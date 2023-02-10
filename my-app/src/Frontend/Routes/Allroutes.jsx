import { Route, Routes } from "react-router-dom";
import Answer from "../Pages/Answer/Answer";
import PrivateRoute from "../Pages/PrivateRoute";
function Allroutes() {
  return (
    <div>
      <Routes>
        <Route
          path="/answer"
          element={
            <PrivateRoute>
              <>
                {/* <Navbar /> */}
                <Answer />
              </>
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default Allroutes;
