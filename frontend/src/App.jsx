import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

import StudentPage from "./pages/StudentPage";
import ExamPage from "./pages/ExamPage";
import RegistrationPage from "./pages/RegistrationPage";
import ResultPage from "./pages/ResultPage";

function App() {

  return (

    <BrowserRouter>

      <nav>

        <Link to="/">
          Students
        </Link>

        {" | "}

        <Link to="/exams">
          Exams
        </Link>

        {" | "}

        <Link to="/registrations">
          Registrations
        </Link>

        {" | "}

        <Link to="/results">
          Results
        </Link>

      </nav>

      <hr />

      <Routes>

        <Route
          path="/"
          element={<StudentPage />}
        />

        <Route
          path="/exams"
          element={<ExamPage />}
        />

        <Route
          path="/registrations"
          element={<RegistrationPage />}
        />

        <Route
          path="/results"
          element={<ResultPage />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
