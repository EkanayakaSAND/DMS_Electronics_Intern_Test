import "./App.css";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import useAuthContext from "./hooks/useAuthContext";

import Navbar from "./components/Navbar";
import Login from "./components/authentication/Login";
import Home from "./components/Home";
import Registration from "./components/authentication/Registration";

function App() {
  const { user } = useAuthContext();
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={user ? <Home /> : <Navigate to="/signin" />} />
        <Route
          path="/signup"
          element={!user ? <Registration /> : <Navigate to="/" />}
        />
        <Route
          path="/signin"
          element={!user ? <Login /> : <Navigate to="/" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
