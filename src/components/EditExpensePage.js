import React from 'react'
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense,removeExpense } from '../actions/expenses'
import { useNavigate,useParams } from 'react-router-dom';

//const navigate = useNavigate()
//const { id } = useParams();

export class EditExpensePage extends React.Component {

    onSubmit=(expense) => {
        this.props.editExpense(this.props.expense.id, expense)
        //navigate('/')
        this.props.history.push('/');
     }

     onRemove =() =>{
        this.props.removeExpense({ id: this.props.expense.id });
        this.props.history.push('/');
        //navigate('/')
     }

     render() {
        const { navigation } = this.props;
        return (
            <div>
            <p>edit expense here with form below</p>
                <ExpenseForm
                    expense={this.props.expense}
                    onSubmit={this.onSubmit}
                />
                <button onClick={this.onRemove}>
                Remove</button>
            </div>
        )
     }
}

const mapStateToProps = (state, props) => {
    const params = {id: window.location.pathname.split("/")[2]}
    return {
        //expense: state.expenses.find((expense) => expense.id === params.id)
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    }
}

const mapDispatchToProps = (dispatch, props) => ({
    editExpense: (id, expense) => dispatch(editExpense(id, expense)),
    removeExpense: (data) => dispatch(removeExpense(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);