import React,{useState} from 'react'
import AddTodoOption from '../addtodooptions/AddTodoOption';
import DisplayTodoOptionsList from '../displaytodooptionlist/DisplayTodoOptionList';


const TodoComponent =()=>{
    const [todoList,setTodoList]=useState([]);
    const clickHandler=(value)=>{
        if(!value){
            alert('field is empty')
        }
        else if(todoList.includes(value)){
            alert('already value exists')
        }
        else{
            setTodoList(prevState=>[...prevState,value])
        }
    }
return(
    <div>
        <h1>Todo Application</h1>
        <AddTodoOption clickHandler={clickHandler}/>
        <DisplayTodoOptionsList todoList={todoList}/>
    </div>
)
};
export default TodoComponent