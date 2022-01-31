import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialCounterState = {
  counter: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
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

const initialAuthState = {
  isAuthentiated: false
}
const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers:{
    login(state){
      state.isAuthentiated = true
    },
    logout(state){
      state.isAuthentiated = false
    }
  }
})

const store = configureStore({
  reducer: {counter: counterSlice.reducer, auth: authSlice.reducer}
});
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
