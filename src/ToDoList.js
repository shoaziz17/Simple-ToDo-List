import React from 'react'
import ToDo from './ToDo'

function ToDoList({ toDoList, handleToggle, handleFilter, deleteTask }) {

    return (
        <div>
            {toDoList.map((todo) => {
                return (
                    <ToDo deleteTask={deleteTask} todo={todo} handleToggle={handleToggle} handleFilter={handleFilter} />
                )
            })}
        </div>
    )
}

export default ToDoList