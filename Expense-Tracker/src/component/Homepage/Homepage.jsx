import React from "react";
import money from "../../assets/images/expensive-1.webp";
import "../Homepage/Homepage.css";
import { Link, Navigate } from "react-router-dom";

const users = JSON.parse(localStorage.getItem("users"));
const Front = () => {
  return (
    <>
      {users ? (
        <Navigate to={"/home"} />
      ) : (
        <div className="front-container">
          <div className="front-parent">
            <img src={money} alt="" className="front-img center" />
          </div>
          <div>
            <h2 className="front-heading center">
              Save Your money With <br />
              Expense Tracker{" "}
            </h2>
            <p className="front-para center">
              Save money! The more Your money <br /> works for you, the less you
              have to <br /> work for money.
            </p>
          </div>
          <div className="front-parent">
            <Link to="/login">
              {" "}
              <button className="front-btn">LER'S START</button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Front;
