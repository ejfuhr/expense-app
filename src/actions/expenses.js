import {   createAction } from '@reduxjs/toolkit';


import { v4 as uuidv4 } from 'uuid';; // to generate random ids
import { app, db } from '../firebase/firebase';
import { getDatabase, ref, set, onValue, update, remove, off, push, get, child, onChildRemoved, onChildChanged, onChildAdded } from "firebase/database";

import regeneratorRuntime from "regenerator-runtime"; 

// ADD_EXPENSE
 export const addExpense = (expense)=>({
    type: 'ADD_EXPENSE',
    expense
});

export const startAddExpense = (expenseData = {})=>{
    return async (dispatch, getState)=>{
        const uid = getState().auth.uid; //this will give us access to the user id (uid)
        const {
            description = '',
            note = '', 
            amount = 0, 
            createdAt = 0 
        } = expenseData;
        const expense = { description, note, amount, createdAt };

        const ref = await push(ref(db, `users/${uid}/expenses`), expense);
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }));
        
    };
};


// REMOVE_EXPENSE
export const removeExpense = ({ id } = {})=>({
    type: 'REMOVE_EXPENSE',
    id
});

export const startRemoveExpense = ({ id }= {})=>{
    return (dispatch, getState)=>{
        const uid = getState().auth.uid;
        return remove(ref(db, `users/${uid}/expenses/${id}` )
          ).then(()=>{
            dispatch(removeExpense({ id }));
          })
    };
};

// EDIT_EXPENSE
export const editExpense = (id, updates)=>({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

export const startEditExpense = (id, updates)=>{
    return (dispatch, getState)=>{
        const uid = getState().auth.uid;
        return update(ref(db, `users/${uid}/expenses/${id}`), updates).then(()=>{
              dispatch(editExpense(id , updates));
            });
    };
};

// SET_EXPENSES
export const setExpenses = (expenses)=>({
    type: 'SET_EXPENSES',
    expenses
});

export const startSetExpenses = ()=>{
    return (dispatch, getState)=>{
        const uid = getState().auth.uid;
        return get(child(ref(db), `users/${uid}/expenses`)).then((snapshot) => {
            const expenses = [];
            snapshot.forEach((childSnapshot)=>{
                expenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
            dispatch(setExpenses(expenses));
        });
    }; 
};
