import React from "react";
import styles from "./task.module.css";
import Counter from "../Counter/Counter";

const Task = ({item,handleDelete}) => {
  // NOTE: do not delete `data-cy` key value pair
  const[isChecked,setIsChecked]=React.useState(false)
  return (
    <li data-cy="task" className={styles.task}>
      <input type="checkbox" data-cy="task-checkbox" onClick={()=>setIsChecked(!isChecked)} />
      <div data-cy="task-text"style={{textDecorationLine: isChecked ?"line-through":""}}>{item.text}</div>
      {/* Counter here */}
      <Counter/>
      <button data-cy="task-remove-button" onClick={()=>handleDelete(item.id)}>remove</button>
    </li>
  );
};

export default Task;
