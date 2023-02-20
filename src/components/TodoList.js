import React from 'react'
import { useState,useRef } from 'react'

function Todolist(props) {
  const [editinput,setEditInput] = useState(props.item);
  const inputRef = useRef();
  const handleEnterPress = (e)=>{
    if(e.keyCode===13){
        props.updateList(editinput,props.index);
        inputRef.current.blur();
        
    }
    
}
const editButton =()=>{
  inputRef.current.focus();
 }
  return (
    <li className="list-item">
      <input type="text"
         value={editinput}
         ref={inputRef}
         onChange={e=>{
          setEditInput(e.target.value)
         }}
         className='listInput'
         onKeyDown={handleEnterPress}
         >
         </input>
        <span className='icons'>
        <i className="fa-solid fa-trash-can icon-delete" 
        onClick={e=>{
            props.deleteItem(props.index)
        }}></i>
         </span>
        <span className=' icons icons1'>
        <i className="fa-solid fa-pen-to-square"
        onClick={editButton}
        ></i>
        </span>
    </li>
  )
}

export default Todolist