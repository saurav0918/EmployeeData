import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function EmpData() {
  const [empData, setEmpdata] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const [empInitials, setEmpInitials] = useState("");

  const setEmpInitial = (nameString) => {
    const fullName = nameString.split(" ");
    const initials = fullName.shift().charAt(0) + fullName.pop().charAt(0);
    setEmpInitials(initials.toUpperCase());
  };

  useEffect(() => {
    axios
      .get(`https://retoolapi.dev/uBhyXL/data/${id}`)
      .then((res) => {
        setEmpdata(res.data);
        setEmpInitial(res.data.name);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      });
  }, [id]);
  return (
    <>
      <header className="header">
        <Link to="/search">
          <i className="fas fa-arrow-left"></i> {"   "}
        </Link>
        {empData && empData.name.split(" ")[0]} Profile
      </header>
      <div className="card emp-card">
        {error ? (
          <h3>Employee Data Not found</h3>
        ) : empData ? (
          <>
            <div className="logo">{empInitials}</div>
            <div className="card-body">
              <p className="card-text">Name: {empData.name}</p>
              <p className="card-text">Profession: {empData.name}</p>
              <p className="card-text">Joined: {empData.name}</p>
            </div>
          </>
        ) : (
          <h4>Loading...</h4>
        )}
      </div>
    </>
  );
}

export default EmpData;
