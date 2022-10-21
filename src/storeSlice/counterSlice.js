import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    itemCount: 0,
    items:{}
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.itemCount = state.itemCount + 1
    },
    decrement: (state) => {
      state.itemCount -= 1
    },
    incrementByAmount: (state, action) => {
      state.itemCount += action.payload
    },
    addItem: (state, action) => {

    },
    deleteItem: (state, action) => {
        
    },
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer