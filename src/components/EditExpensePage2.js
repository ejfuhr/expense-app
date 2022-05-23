import React, { useEffect }from "react";

import { useParams } from "react-router-dom";
import { connect } from 'react-redux'
import ExpenseForm from "./ExpenseForm";
import { editExpense } from "../actions/expenses";
import { useNavigate } from "react-router-dom";

const EditExpensePage = (props) => {

  const navigate = useNavigate();

  console.log('props :', props)

  console.log('id if we got it', id)

  return (
    <div>
      This is from my edit expense component

      <ExpenseForm 
       expense ={props.expense}
         onSubmit={(expense) => {
           props.dispatch(editExpense(props.expense.id, expense))
           navigate('/')
         }}
       />

      <div>
            Editing the expense with id of {props.match.params.id}
      </div>

    </div>
);
}

const mapStateToProps = (state) => {
  const params = {id: window.location.pathname.split("/")[2]}

  console.log(':::::', params)
  return {
      expense: state.expenses.find((expense) => expense.id === params.id)
  }
}

/* const mapStateToProps = (state) =>{

  const params = useParams()
  return {
    expenses: state.expenses.find((expense) => {
      console.log('edit expense mapState...', expense.id === params.id)
      return expense.id === params.id;
    })

    }
}; */


export default connect(mapStateToProps)(EditExpensePage);

