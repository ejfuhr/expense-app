import { createReducer } from '@reduxjs/toolkit'

const expensesReducerDefaultState = []

const expensesReducer = createReducer(initialState, 
    (builder) => {
    builder
      // .addCase(...)
      // .addMatcher(...)
      .addDefaultCase((state, action) => {
        state.otherActions++
      })
  })