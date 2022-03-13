import "./App.css";
import { Routes, Route, Switch, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Search from "./components/Search";
import EmpData from "./components/EmpData";
import { useState } from "react";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path="/"
          element={<Navigate replace to="/login" />}
        ></Route>
        <Route
          path="/login"
          element={<Login setIsAuthenticated={setIsAuthenticated} />}
        ></Route>
        <Route
          path="/search"
          element={
            isAuthenticated ? <Search /> : <Navigate replace to="/login" />
          }
        ></Route>
        <Route
          path="/empdata/:id"
          element={
            isAuthenticated ? <EmpData /> : <Navigate replace to="/login" />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
