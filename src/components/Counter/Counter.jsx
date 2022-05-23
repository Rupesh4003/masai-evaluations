import React, { useState } from "react";
import styles from "./counter.module.css";

const Counter = () => {
  // sample value to be replaced
  const[count,setCount]=useState(0)
  const handleInc=()=>{
    setCount(count+1)
  }
  const handleDec=()=>{
    setCount(count-1)
  }
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.counter}>
      <button data-cy="task-counter-increment-button" onClick={handleInc}>+</button>
      <span data-cy="task-counter-value">{count}</span>
      <button data-cy="task-counter-decrement-button" disabled={count==0} onClick={handleDec}>-</button>
    </div>
  );
};

export default Counter;
