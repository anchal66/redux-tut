import { configureStore, createSlice } from "@reduxjs/toolkit";
import { createStore } from "redux";

const initialState = {
  counter: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
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
  reducer: { counter: counterSlice.reducer}
});

export default store;
