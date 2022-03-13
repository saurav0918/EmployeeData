import React from "react";
import { useState } from "react";

function Login({ history }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName === "Admin" && password === "Admin") {
      history.push("/search");
    } else {
      setError("Username or Password is Wrong");
    }
    setUserName("");
    setPassword("");
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="user" />
        userName:
        <br></br>
        <input
          id="user"
          type="text"
          value={userName}
          name="user"
          required
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        ></input>
        <br></br>
        <label htmlFor="password" />
        Password:
        <br></br>
        <input
          id="password"
          name="password"
          value={password}
          type="password"
          required
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <br></br>
        <button>Login</button>
      </form>
      {error ? error : null}
    </div>
  );
}

export default Login;
