import {
    createEntityAdapter,
    createSlice,
    configureStore,
  } from '@reduxjs/toolkit'
  
  // Since we don't provide `selectId`, it defaults to assuming `entity.id` is the right field

  export const expensesAdapter = createEntityAdapter({
    // Keep the "all IDs" array sorted based on expense amount
    sortComparer: (a, b) => a.description.localeCompare(b.description),
  })

  export const expensesSlice = createSlice({
    name: 'expenses',
    initialState: expensesAdapter.getInitialState({
      loading: 'idle',
    }),
    reducers: {
      // Can pass adapter functions directly as case reducers.  Because we're passing this
      // as a value, `createSlice` will auto-generate the `expenseAdded` action type / creator
      expenseAdded: expensesAdapter.addOne,
      expenseRemoved: expensesAdapter.removeOne,
      expensesLoading(state, action) {
        if (state.loading === 'idle') {
          state.loading = 'pending'
        }
      },
      expensesReceived(state, action) {
        if (state.loading === 'pending') {
          // Or, call them as "mutating" helpers in a case reducer
          expensesAdapter.setAll(state, action.payload)
          state.loading = 'idle'
        }
      },
      expensesSetAll(state, action){
        expensesAdapter.setAll(state, action.payload)
      },
      expenseUpdated: expensesAdapter.updateOne,
    },
  })
  
