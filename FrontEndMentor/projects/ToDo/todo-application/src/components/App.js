import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoList from "./TodoList";
import Header from "./Header";
import Filter from "./Filter";
import localforage from "localforage";

function App() {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
    // console.log(value)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTodo = {
      id: uuidv4(),
      body: value,
      completed: false,
    };
    await localforage.setItem("todos", [newTodo, ...todos]);
    setTodos([newTodo, ...todos]);
    console.log("Todo added successfully...");
    setValue("");
  };

  useEffect(() => {
    localforage.getItem("todos").then((res) => {
      setTodos(res);
    });
  }, []);

  return (
    <div id="app">
      <Header />
      <form action="submit" onSubmit={handleSubmit} id="form">
        <input
          type="text"
          placeholder="Create a new todo..."
          value={value}
          onChange={handleChange}
          required
        />
      </form>
      <TodoList todos={todos} setTodos={setTodos} />
      <Filter />
    </div>
  );
}

export default App;
