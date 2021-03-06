import React from "react";
import { connect } from "react-redux";
import selectExpenses from "../selectors/expenses";

import ExpenseListItem from "./ExpenseListItem";


export const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
    
          expenses: {props.expenses.map((expense) => {
            return <ExpenseListItem key={expense.id} {...expense} />
        })}
    </div>
)


const mapStateToProps = (state) => {
    return {
        
      expenses: selectExpenses(state.expenses, state.filters)
    };
  };

//export default mapStateToProps;
export default connect(mapStateToProps)(ExpenseList);


