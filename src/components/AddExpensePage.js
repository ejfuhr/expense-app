import React from 'react'
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses';
import { useNavigate } from 'react-router-dom';
import ExpenseForm from './ExpenseForm';

//const AddExpensePage = (props) => {
    //const navigate = useNavigate();

export class AddExpensePage extends React.Component {
    
    
       onSubmit = (expense) => {
        this.props.addExpense(expense)
        this.props.navigate('/');
    }

    render() {
        return (
            <div>
             <h1>Add Expenses</h1>
             <ExpenseForm
                onSubmit = {this.onSubmit}
             /> 
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    let navigate = useNavigate();
    return {
        
        addExpense: (expense) => dispatch(addExpense(expense))
    };
}

function WithNavigate(props) {
    let navigate = useNavigate();
    return <AddExpensePage {...props} navigate={navigate} />
}

const doNavigate = (props) =>{
    let navigate = useNavigate();
    return <AddExpensePage {...props} navigate={navigate} />
}

export default connect(undefined, mapDispatchToProps)(WithNavigate);