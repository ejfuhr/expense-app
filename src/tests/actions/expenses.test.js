import configureMockStore from 'redux-mock-store'; //docs: https://github.com/reduxjs/redux-mock-store
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, editExpense, removeExpense, 
    setExpenses, startSetExpenses, startRemoveExpense, startEditExpense } from '../../actions/expenses';
import expenses from '../fixtures/test-expenses-data';
import { db } from '../../firebase/firebase';
import { getDatabase, ref, set, onValue, update, remove, off, push, onChildRemoved, onChildChanged, onChildAdded, get, child } from "firebase/database";

const createMockStore = configureMockStore([thunk]) //created a mock redux store with middleware thunk
const uid = 'testuid23524fewaz';
const defaultAuthState = { auth: { uid } };

beforeEach((done)=>{
    const expensesData={};
    expenses.forEach(({ id, description, amount, note, createdAt })=>{
        expensesData[id] = { description, amount, note, createdAt };
    });

    set(ref(db, `users/${uid}/expenses`), expensesData).then(()=> done());
});


test('should setup remove expense action object', ()=>{
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});
// toEqual is to make sure all objects are the same toBe wont work in this case

test('should setup edit expense action object', ()=>{
    const action = editExpense('321cba',  {note: 'blah blah blah'})

    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '321cba',
        updates: {
            note: 'blah blah blah'
        }
    });
});

test(' should work on add expense object test', () => {
    const expenseData = {
        description :'Rent',
        note : 'Last month\'s rent',
        amount : 1095,
        createdAt : 1000
      }

      const action =  addExpense(expenseData);

      expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
      })
})

test('should add expense to database and store', (done) => {
    const store = createMockStore(defaultAuthState);
    const expenseData = {
        description: 'Laptop',
        amount: 22000,
        note: '',
        createdAt: 1000
    };
    store.dispatch(startAddExpense(expenseData)).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });
        get(child(ref(db), `users/${uid}/expenses/${actions[0].expense.id}`)).then((snapshot) => {
            expect(snapshot.val()).toEqual(expenseData);
        });
        done(); //Need to tell jest a test is async by adding 'done' as an arguement and done() at the end
    });
});

test('should add expense with defaults to database and store', (done) => {
    const store = createMockStore(defaultAuthState);
    const expenseDefault = {
        description: '',
        amount: 0,
        note: '',
        createdAt: 0
    };
    store.dispatch(startAddExpense({})).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseDefault
            }
        });
        get(child(ref(db), `users/${uid}/expenses/${actions[0].expense.id}`)).then((snapshot) => {
            expect(snapshot.val()).toEqual(expenseDefault);
        });
        done(); //Need to tell jest a test is async by adding 'done' as an arguement and done() at the end
    });
});


test('should setup set expense action object with data', () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses
  });
});

test('should fetch the expenses from firebase', (done) => {
    const store = createMockStore(defaultAuthState);
    store.dispatch(startSetExpenses()).then(()=>{
        const action = store.getActions();
        expect(action[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        });
        done();
    });
});