import React from "react";
import styles from "./addTask.module.css";
//import { v4 as uuidv4 } from 'uuid';
import { nanoid } from 'nanoid'
import Task from "../Task/Task";

const AddTask = () => {
  const[input,setInput]=React.useState("");
  const[data,setData]=React.useState([]);
  const payload={
    id:nanoid(),
    text:input,
    //done:true,
    count:4
  };
const handleAdd=()=>{
  let value = input.trim();
  if(value)
  {
    setData([...data,payload])
  }
  setInput("")
 

}
const handleDelete=(id)=>{
  const newData= data.filter((el)=>el.id!=id);
  setData([newData])
}

  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.todoForm}>
     
      <input data-cy="add-task-input" type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
      <button data-cy="add-task-button" onClick={handleAdd}>Add</button>
      {data.map((item)=>{
        return(
          <Task key={item.id} item={item} handleDelete={handleDelete}/>
        )
      })}
    </div>
  );
};

export default AddTask;
