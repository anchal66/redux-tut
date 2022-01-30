import { useDispatch, useSelector } from "react-redux";
import classes from "./Counter.module.css";

const Counter = () => {

  //Get peice of data from store and also subscribe for changes
  const counter = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  const increseHandler = () =>{
    dispatch({type: 'increment'});
  }

  const decreseHandler = () =>{
    dispatch({type: 'decrement'});
  }

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={increseHandler}>+</button>
        <button onClick={decreseHandler}>-</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
