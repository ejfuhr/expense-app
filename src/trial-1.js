//import { addExpenseAction, editExpenseAction, removeExpenseAction } from "./actions/expenses";import { addExpenseAction, editExpenseAction, removeExpenseAction } from "./actions/expenses";

import { editExpenseAction, addTodo } from './actions/expenses';
import { addExpenseAction } from './actions/expenses';
import { v4 as uuid } from 'uuid';

const demoState = {
    expenses: [{
        id: uuid(),
        description: 'January rent',
        note: 'final note for address',
        amount: 54500,
        createdAt: 0
    }] }

var expense = () => {
    id: uuid(),
    description= 'dummy',
    note = 'dull note',
    amount = 101,
    createdAt = 103
  }

//  console.log('::::', expense.description, expense.note, expense.amount, expense.createdAt)

console.log('::::', demoState.expenses[0])
console.log('addTodo:::', addTodo('wowo'))

console.log('editExpense action >>>>', editExpenseAction('b9cf5a07-78e8-4e3c-979b-91e48ebe445b', expense.description= 'eoeo'))

const add = addExpenseAction('descript...', 'note...', 10122, 0)
    //expense.description, expense.note, expense.amount, expense.createdAt)

console.log(add)