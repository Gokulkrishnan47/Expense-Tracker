import React from "react";
import { Navigate } from "react-router-dom";
import "../../Features/ExpenseDetails/ExpenseDetails.css";
import Navbar from "../../../navbar/navbar";

const users = JSON.parse(localStorage.getItem("users"));

const ExpenseDetails = () => {
  return (
    <>
      {users ? (
        <div>
          <Navbar />
          <div>
            <div className="parent">
              <div className="income">
                <h1>Income</h1>
              </div>
              <div className="expense">
                <h1>Expense</h1>
              </div>
            </div>
            <div>
              <h1>Total</h1>
            </div>
          </div>
        </div>
      ) : (
        <Navigate to={"/login"} />
      )}
    </>
  );
};

export default ExpenseDetails;
