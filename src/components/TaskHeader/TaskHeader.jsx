import React from "react";
import styles from "./taskHeader.module.css";

const TaskHeader = () => {
  // sample values to be replaced
  let totalTask = 20;
  let unCompletedTask = 0;

  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-header" className={styles.taskHeader}>
      <h2>Todo List</h2>
      
      <b data-cy="header-remaining-task">{unCompletedTask} of incomplete of </b>
      <b data-cy="header-total-task">{ totalTask}</b>
    </div>
  );
};

export default TaskHeader;
