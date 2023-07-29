import React from 'react';
import {v4 as uuidv4 } from 'uuid';

const todos = [
    {
        id : uuidv4(),
        title : "todo_01",
        desc_01 : "todo_01 description_01"
    },
    {
        id : uuidv4(),
        title : "todo_02",
        desc_01 : "todo_02 description_02"
    },
    {
        id : uuidv4(),
        title : "todo_03",
        desc_01 : "todo_03 description_03"
    },
    {
        id : uuidv4(),
        title : "todo_04",
        desc_01 : "todo_04 description_04"
    }
]



export default function List(){
    return(
        <>
        {todos.map((todo)=>{
            return <div key={uuidv4()}>
                <h3>{todo.title}</h3>
                <p>{todo.desc_01}</p>
                <h6>{todo.id}</h6><br/>
            </div>
        })}
        
        </>
    )
}


