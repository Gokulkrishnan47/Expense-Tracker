import { configureStore } from "@reduxjs/toolkit";
import ExpenseSlice from "../Features/Expense/ExpenseSlice";
const store=configureStore({
    reducer:{
        expenseTracker:ExpenseSlice,
    }
})

export default store