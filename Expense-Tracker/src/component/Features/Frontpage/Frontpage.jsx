import React, { useEffect, useState } from "react";
import {
  BsFileEarmarkArrowUpFill,
  BsFileEarmarkArrowDownFill,
} from "react-icons/bs";
import { useSelector } from "react-redux";

const HomePage = () => {
  const Balance = useSelector((store)=>store.expenseTracker.Lists)
  const [amount,setAmount]=useState({income:0,expense:0,total:0})

  useEffect(()=>{
    const income=Balance.filter((bal)=>bal.type==="income")
    .map((tran)=>Number(tran.money))
    .reduce((cur,acc)=>cur+acc)

    const expense = Balance.filter((bal)=>bal.type==="expense")
    .map((tran)=>Number(tran.money))
    .reduce((cur,acc)=>cur+acc)

    const total =income-expense

    setAmount({income,expense,total})
  },[Balance])

  return (
    <div>
      <div>
        <h3>Total balance</h3>
        <h1>{amount.total}</h1>
        <div>
          <BsFileEarmarkArrowUpFill />
          <h4>Income</h4>
          <h3>{amount.income}</h3>
        </div>
        <div>
          <BsFileEarmarkArrowDownFill />
          <h4>Expense</h4>
          <h3>{amount.expense}</h3>
        </div>
        <h4>Expense</h4>
      </div>
      <h1>Transactions</h1>
      {/* {Balance?.map((money) => (
        <Transaction key={money.id} datas={money} />
      ))} */}
    </div>
  );
};
export default HomePage;
