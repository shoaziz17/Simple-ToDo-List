import React from 'react'

function ToDo({ todo, deleteTask }) {

    return (
        <div className={todo.complete ? "line-through" : ""}>
            <div className='flex border-2 p-2 rounded-md space-x-5 mt-2 font-semibold border-blue-200'>
                <h1>{todo.task}</h1>
                <button onClick={deleteTask} className='bg-red-500 px-2 text-sm rounded-md text-white'>X</button>
            </div>
        </div>
    )
}

export default ToDo