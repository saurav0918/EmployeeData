import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Search() {
  const [userList, setUserList] = useState([]);
  const [error, setError] = useState("");
  const [attr, setAttr] = useState("name");
  const [order, setOrder] = useState(true);

  useEffect(() => {
    axios
      .get("https://retoolapi.dev/uBhyXL/data")
      .then((res) => {
        setUserList(sortUserList(attr, order, res.data));
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      });
  }, [attr]);

  let sortUserList = (att, order, list) => {
    if (order) {
      list.sort((a, b) => {
        if (a[att] < b[att]) {
          return -1;
        }
        if (a[att] > b[att]) {
          return 1;
        }
        return 0;
      });
    } else {
      list.sort((a, b) => {
        if (a[att] < b[att]) {
          return 1;
        }
        if (a[att] > b[att]) {
          return -1;
        }
        return 0;
      });
    }
    return list;
  };

  const findData = (value) => {
    console.log(value);
    axios
      .get(`https://retoolapi.dev/uBhyXL/data?name=${value}`)
      .then((res) => {
        console.log(res);
        setUserList(res.data);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      });
  };

  function handleClick(val) {
    setOrder(val);
    setUserList(sortUserList(attr, val, userList));
  }

  const reset = () => {
    setAttr("name");
    setUserList(sortUserList(attr, true, userList));
    setError("");
  };

  return (
    <div>
      <header className="header">Welcome to the Portal</header>
      <div className="container">
        <div className="filters">
          <input
            className="form-control"
            placeholder="Search For anything..."
            onChange={(e) => findData(e.target.value)}
          ></input>
          <button
            onClick={() => handleClick(true)}
            className={order ? "active-btn" : ""}
          >
            <i className={"fas fa-solid fa-arrow-down"}></i>
          </button>
          <button
            onClick={() => handleClick(false)}
            className={!order ? "active-btn" : ""}
          >
            <i className="fas fa-solid fa-arrow-up"></i>
          </button>

          <select
            className="form-control"
            value={attr}
            onChange={(e) => {
              setAttr(e.target.value);
            }}
          >
            <option value="name" defaultValue={"name"}>
              name
            </option>
            <option value="joinedOn">JoinedOn</option>
            <option value="profession">profession</option>
          </select>
          <button className="form-control" onClick={() => reset()}>
            Reset
          </button>
        </div>
        {userList.map((user) => (
          <Link key={user.id} to={`/empdata/${user.id}`} className="emp-list">
            Name: {user.name}, Joined: {user.joinedOn}, Profession:{" "}
            {user.profession}
          </Link>
        ))}
        {error ? error : null}
      </div>
    </div>
  );
}

export default Search;
