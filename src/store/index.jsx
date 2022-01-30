import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment(state){
      state.counter++;
    },
    decrement(state){
      state.counter--;
    },
    increseBy5(state, action){
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state){
      state.showCounter = !state.showCounter
    }
  }
});
//Use configureStore instead of createStore to Add multiple slice
// const store = createStore(counterSlice.reducer);

const store = configureStore({
  reducer: counterSlice.reducer
});
export const counterActions = counterSlice.actions;

export default store;
