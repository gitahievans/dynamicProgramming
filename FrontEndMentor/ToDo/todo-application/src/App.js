import React, { useEffect, useState } from "react";
import axios from "axios";
import TodoList from "./TodoList";
import Header from "./Header";
import Filter from "./Filter";

function App() {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const tasks = await axios.get("/tasks");
      // console.log(tasks.data);
      setTodos(tasks.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      fetch("/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          body: value,
        }),
      });
      console.log("Todo added successfully");
    } catch (error) {
      console.error(error);
    }
  };

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
      <Filter/>
    </div>
  );
}

export default App;
