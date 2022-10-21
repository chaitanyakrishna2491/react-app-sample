import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './storeSlice/counterSlice'

export default configureStore({
  reducer: {
    counter: counterReducer
  }
})