import React, { useState } from 'react'
import { useEffect } from 'react';
import "./App.css"
import TodoInput from './components/TodoInput'
import Todolist from './components/TodoList';
function App() {
  const [listTodo,setListTodo]=useState(JSON.parse(localStorage.getItem("list")));
  let addList = (inputText)=>{
    if(inputText!=='')
      setListTodo([...listTodo,inputText]); 
            
  }
  const deleteListItem = (key)=>{
    let newListTodo = [...listTodo];
    newListTodo.splice(key,1)
    setListTodo([...newListTodo])
   
  }
  const updateList=(editInput,index)=>{
    console.log("in the update");
if(editInput!==''){
  let newListTodo = [...listTodo];
  newListTodo.splice(index,1,editInput)
  setListTodo([...newListTodo]);
}
  }
  useEffect(()=>{
    localStorage.setItem("list",JSON.stringify(listTodo));  
  },[listTodo])
  return (
    <div className="main-container">
      <div className="center-container">
        <TodoInput addList={addList}/>
        <h1 className="app-heading">TODO</h1>
        <hr/>
        {listTodo.map((listItem,i)=>{
          return (
            <Todolist key={i} index={i} item={listItem} deleteItem={deleteListItem} updateList={updateList}/>
          )
        })}
      </div>
    </div>
  )
}

export default App