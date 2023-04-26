import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/login/Login";
import Registration from "./pages/registration/Registration";
import { useSelector } from "react-redux";

function App() {
  const {user} = useSelector(state => state.auth)


  return (
    <Router>
      <Routes>
      <Route
          path="/projects"
        />
        <Route
          path="/login"
          element={user ? <Navigate replace to="/projects" /> : <Login />}
        />
        <Route
          path="/register"
          element={user ? <Navigate replace to="/projects" /> : <Registration/>}
        />
      </Routes>
    </Router>
  );
}

export default App;
