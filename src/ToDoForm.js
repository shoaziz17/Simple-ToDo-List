import React, { useState } from 'react'

function ToDoForm({ addTask, handleFilter }) {

    const [userInput, setUserInput] = useState('');
    const handleChange = (e) => {
        setUserInput(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }

    return (
        <div className='space-x-2'>
            <input className='border-2 border-blue-700 px-2 py-1' onChange={handleChange} type="text" value={userInput} placeholder='Enter task...' />
            <button className='bg-blue-700 text-white px-2 py-[6px] rounded-md' onClick={handleSubmit}>Submit</button>
            <button className='bg-green-500 text-white px-2 py-[6px] rounded-md' onClick={handleFilter}>Clear</button>
        </div>
    )
}

export default ToDoForm