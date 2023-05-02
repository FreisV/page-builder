import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/login/Login";
import Registration from "./pages/registration/Registration";
import Projects from "./pages/projects/Projects";
import { useSelector } from "react-redux";
import CreateProject from "./pages/createProject/CreateProject";
import UpdateProject from "./pages/updateProject/UpdateProject";
import Project from "./pages/project/Project";

function App() {
  const { user } = useSelector((state) => state.auth);

  return (
    <Router>
      <Routes>
        <Route
          path="/projects"
          element={user ? <Projects /> : <Navigate replace to="/login" />}
        />
        <Route
          path="/createProject"
          element={user ? <CreateProject /> : <Navigate replace to="/login" />}
        />
        <Route
          path="/project/:id"
          element={user ? <Project /> : <Navigate replace to="/login" />}
        />
        <Route
          path="/project/settings/:id"
          element={user ? <UpdateProject /> : <Navigate replace to="/login" />}
        />
        <Route
          path="/login"
          element={user ? <Navigate replace to="/projects" /> : <Login />}
        />
        <Route
          path="/registration"
          element={
            user ? <Navigate replace to="/projects" /> : <Registration />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
