
//import { createStore } from 'redux'
import { createSlice } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'

import App from './App';

import React from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client';
//import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  }
});

const provider =() => (
  <Provider store={store}>
  <App />
</Provider>
)

console.log('101')
console.log(store.getState().counter.value)

const container = document.getElementById('app');
const root = createRoot(container);

root.render(
  <React.StrictMode>
  <Provider store={store}>
  <App />
</Provider>
</React.StrictMode>
)





