import logo from "./logo.svg";
import "./App.css";
import { Routes, Redirect, Route } from "react-router-dom";
import Login from "./components/Login";
import Search from "./components/Search";
import EmpData from "./components/EmpData";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route exact path="/" render={() => <Redirect to="/login" />}></Route> */}
        <Route path="/login" element={<Login />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/empdata" element={<EmpData />}></Route>
      </Routes>
    </div>
  );
}

export default App;
