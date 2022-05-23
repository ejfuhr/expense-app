/*
from example
stackoverflow.com/questions/64566405/react-router-dom-v6-usenavigate-passing-value-to-another-component
*/

import validator from 'validator'
import React from 'react';
import { Provider } from 'react-redux';

import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

//import AppRouter from '../routers/AppRouter';
import configureStore from '../store/configureStore'
import { addExpense } from '../actions/expenses';
import { setTextFilter } from '../actions/filters';
import getVisibleExpenses from '../selectors/expenses'
import expenses from '..expenses/reducers/expenses';

import ComponentA from './comp1';
import ComponentB from './comp2';

//import { BrowserRouter, Route, Routes, Link, NavLink } from 'react-router-dom'

const store = configureStore()



store.dispatch(addExpense({ description: 'gas bill', amount: 10100, createdAt: 102}))
store.dispatch(addExpense({ description: 'water bill', amount: 4500}))
store.dispatch(addExpense({ description: 'phone bill', amount: 10200}))
store.dispatch(addExpense({ description: 'rent', amount: 109500, createdAt: 1020}))
/* store.dispatch(setTextFilter('water'));

setTimeout(() => {
  store.dispatch(setTextFilter('bill'));
}, 3000) */


 const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)

console.log('visibles:', visibleExpenses)

console.log('state', state);

const jsx = (
    <Provider store={store}>
        <ComponentA />
    </Provider>
    
)

const container = document.getElementById('app');
const root = createRoot(container);

root.render( jsx )

//ReactDOM.render(<AppRouter />, document.getElementById('app'));
console.log('app.js is running!!!!')



