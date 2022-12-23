import React, { useEffect, useState } from "react";
import Header from "./Header";
import data from "./data.json";
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";

function App() {

  const [toDoList, setToDoList] = useState(data)

  const handleToggle = (id) => {
    let mapped = toDoList.map(todo => {
      return todo.id == id ? { ...todo, complete: !todo.complete } : { ...todo };
    })
    setToDoList(mapped)
  }

  const deleteTask = () => {
    
  }

  const handleFilter = () => {
    let filtered = toDoList.filter(todo => {
      return !todo.complete;
    })
    setToDoList(filtered);
  }

  const addTask = (userInput) => {
    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
    setToDoList(copy)
  }

  return (
    <section className="flex items-center justify-center mt-10">
      <div>
        <Header />
        <ToDoForm addTask={addTask} handleFilter={handleFilter} />
        <ToDoList deleteTask={deleteTask} toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter} />
      </div>
    </section>
  );
}

export default App;