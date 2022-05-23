import {     configureStore } from '@reduxjs/toolkit';
import {     createStore,  combineReducers } from 'redux';
import {
    createAction,
    createReducer
} from '@reduxjs/toolkit'

import {  expensesAdapter } from './entityAdapter/slicerAdapter';
import {  expensesSlice } from './entityAdapter/slicerAdapter';


//import { sortBy } from "async";
import { v4 as uuid } from 'uuid';

const {
    expenseAdded,
    expenseRemoved,
    expensesLoading,
    expensesReceived,
    expensesSetAll,
    expenseUpdated
} = expensesSlice.actions

const store = configureStore({
    reducer: {
        expenses: expensesSlice.reducer,
    },
})

const expensesSelectors = expensesAdapter.getSelectors((state) => state.expenses)

const demoExpenses = {
    expenses: [{
        id: 'fakeID-1011b',
        description: 'January rent',
        note: 'final note for address',
        amount: 54500,
        createdAt: 0
    },
    {
        id: 'fakeID-1011c',
        description: 'feb rent',
        note: 'almost final note for address',
        amount: 10200,
        createdAt: 0
    },
    {
        id: uuid(),
        description: 'march rent',
        note: 'last note for address',
        amount: 10300,
        createdAt: 0
    }
]
}

store.subscribe(() => {
    console.log(store.getState())
})
// Check the initial state:
console.log(store.getState().expenses)
// {ids: [], entities: {}, loading: 'idle' }

//add expense
store.dispatch(expenseAdded(demoExpenses.expenses[0] ))
store.dispatch(expenseAdded(demoExpenses.expenses[1]))
console.log('getState().expenses==>>>', store.getState().expenses)

store.dispatch(expensesSetAll(demoExpenses.expenses))

console.log('selectors:::', expensesSelectors.selectIds(store.getState()))

console.log('adding random expense')
store.dispatch(expenseAdded( 
        {
            id: uuid(),
            description: 'odd purchase',
            note: 'long note about this...',
            amount: 30300,
            createdAt: 0
        }
))

console.log('select all selectors:::',expensesSelectors.selectAll((store.getState())))

console.log('all expense==>>>', store.getState().expenses)

store.dispatch(expenseUpdated({ id: "9c712a2b-0a6e-4ea6-ac26-e675f73ee52f", 
    changes: {
        description: "redone at least once",
        amount: 10101
    }}))

store.dispatch(expensesLoading())
console.log('all expense==>>>', store.getState().expenses)

const qty = store.dispatch(expensesReceived([
    {id: 'fakeID-1011c', description: 'odd purchase'},
    {id: 'fakeID-1011b', description: 'march rent'}

]) )

console.log('qty from expensesReceived', qty)

for (const q of qty.payload){
    console.log('inside payload q: ', q)
}

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    //const expenses =  expensesSelectors.selectAll((store.getState()))
    const startDateMatch = typeof startDate !== 'number' || expenses.createdAt >= startDate
    const endDateMatch = typeof endDate != 'number' || expenses.createdAt <= endDate
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())

    return startDateMatch && endDateMatch && textMatch 
} ;

const user = {
    name: "john",
    age: 124
}

console.log({
    ...user,
    location: 'phillie'
})

/*

id's
 "9c712a2b-0a6e-4ea6-ac26-e675f73ee52f"
1: "s,,s,s,s,,s,"
2: "7a1ed58f-7912-4649-968c-deeea432f27a"

*/

/*

store.dispatch(expenseAdded(
    { id: 'a', 
    title: 'First' }))
console.log(store.getState().books)
// {ids: ["a"], entities: {a: {id: "a", title: "First"}}, loading: 'idle' }
*/