import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fDecrement, fIncrement, fReset } from "../services/countAction";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const incrementHandle = () => {
    dispatch(fIncrement());
  };

  const decrementHandle = () => {
    dispatch(fDecrement());
  };

  const resetHandle = () => {
    dispatch(fReset());
  };

  return (
    <>
      <section className="title">
        <h1> Counter App</h1>
        <h2>Count : {count}</h2>

        <button onClick={incrementHandle}>Increment</button>
        <button onClick={decrementHandle}>Decrement</button>
        <button onClick={resetHandle}>Reset</button>
      </section>
    </>
  );
};

export default Counter;
