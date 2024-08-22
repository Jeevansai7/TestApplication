import React from 'react'

const DisplayTodoOptionsList =(props) =>{
    const {todoList}=props
    console.log(todoList,"todoList")
    return(
        <div>
        listing details
       {(todoList.length>0)?(todoList.map(list=>(<li key={list}>{list}</li>))):'no items to display'}
        </div>
    )
};
export default DisplayTodoOptionsList;