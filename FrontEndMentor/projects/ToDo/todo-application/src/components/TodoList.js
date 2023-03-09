import React from "react";
import Todo from "./Todo";
import localforage from "localforage";

function TodoList({ todos, setTodos }) {

  const clearAllCompleted = () => {
   const updatedTodos = todos.filter((todo) => todo.completed === false);
   setTodos(updatedTodos)
   localforage.removeItem("todos").then(() => {
     localforage.setItem("todos", updatedTodos);
   });
   console.log(updatedTodos)
  };

  return (
    <div className="todo-list">
      {todos.length ? <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <Todo todo={todo} setTodos={setTodos} todos={todos} />
            </li>
          );
        })}
        <div className="ul-bottom">
          <span>{todos.length} Item(s) left</span>
          <span onClick={clearAllCompleted}>Clear completed</span>
        </div>
      </ul> : <div className="no-todos"><p style={{color:"red"}}>You have no tasks!</p></div> }
    </div>
  );
}

export default TodoList;
