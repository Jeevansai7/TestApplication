import React,{useRef} from 'react'

const AddTodoOption =(props)=>{
    const {clickHandler}=props
    const inputRef=useRef("")
    
    return(
        <div className='todoapp'>
        <input type="search" ref={inputRef} onKeyDown={event=>{if(event.key==='Enter'){clickHandler(inputRef.current.value)}}}/>
        <button onClick={()=>clickHandler(inputRef.current.value)}>Add</button>
        </div>
    )
};
export default AddTodoOption;
