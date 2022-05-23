import { configureStore } from '@reduxjs/toolkit';
import { createStore, combineReducers } from 'redux';
import { createAction, createReducer } from '@reduxjs/toolkit'

//import { sortBy } from "async";
import { v4 as uuid } from 'uuid';

const addExpense = ({ description = '', notes = '', amount = 0, createdAt = 0 } = {}) => (
    {
        type: 'ADD_EXPENSE',
        expense: {
            id: uuid(),
            description,
            notes,
            amount,
            createdAt
        }
    }
)

//REMOVE_EXPENSE
const removeExpense = ( {id} ={}) => (
    {
        type: 'REMOVE_EXPENSE',
        expense: {
            id: id
        }
    }
)

 
//EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
 
})

const expenseReducerDefaultState = []
 
const expenseReducer = (state = expenseReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense]
        case 'REMOVE_EXPENSE':
            console.log('remove_expense')
            return state.filter(({ id }) => {
                console.log(id)
                id !== action.expense
            })
        case 'EDIT_EXPENSE':
            console.log('inside EDIT_EXPENSE')
            return state.map((expense) => {
                if (expense.id === action.id) {
                    console.log('match')
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense;
                }
            })
        default:
            return state
    }
}

const filterDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}
 
const filterReducer = (state = filterDefaultState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

const store = configureStore({
    reducer: {
      expense: expenseReducer,
      filter: filterReducer
    },
  });

console.log('store', store.getState())

store.subscribe(() => {
    console.log('store subscribe getState::',store.getState())
})

let expense1 = store.dispatch(addExpense({ description: 'Month Rent', notes: 'Rent for this month', amount: 7500 }))
let expense2 = store.dispatch(addExpense({description:"Buy react book",notes:"react book",amount:303}))
 
//Remove an expense
store.dispatch(removeExpense({id:expense2.expense.id}))

let expnese2 = store.dispatch(addExpense({ description: 'Pay insurance', notes: 'Pay car insurance', amount: 27500 }))
console.log(expense1.expense.id, expense1.expense.amount)
console.log(expnese2.expense.id)
store.dispatch(removeExpense({ id: expense1.expense.id }))
store.dispatch(editExpense({ id: expnese2.expense.id, amount: 5000 }))



const demoState = {
    expenses: [{
        id: 's,,s,s,s,,s,',
        description: 'January rent',
        note: 'final note for address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'date', // sort by date or amount
        startDate: undefined,
        endDate: undefined
    }
} 



const expenseReducerAsReducer = createReducer(expenseReducerDefaultState, (builder) => {
    builder
    .addCase('ADD_EXPENSE', (state, action) => {
        // "mutate" the array by calling push()
        state.push(action.payload)
      })
})

console.log(':::', demoState.expenses[0])
  