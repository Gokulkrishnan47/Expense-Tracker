import { createSlice } from "@reduxjs/toolkit"
const data=JSON.parse(localStorage.getItem("details"))
const initialState={lists:data}


const ExpenseSlice =createSlice({
    name:"ExpenseSlice",
    initialState,
    reducers:{
       addlist:(state,action)=>{
        state.lists.unshift(action.payload)
        localStorage.setItem(
            "trancDetails",
            JSON.stringify(state.lists)
          );
       },
       deletelist:(state,action)=>{
        state.lists=state.lists.filter((list)=>list.id!==action.payload)
        localStorage.setItem(
            "trancDetails",
            JSON.stringify(state.lists)
          );
       }
    }
})

export default ExpenseSlice.reducer
export const {addlist,deletelist}=ExpenseSlice.actions

