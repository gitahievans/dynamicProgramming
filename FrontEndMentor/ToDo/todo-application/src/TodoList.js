import React from "react";
import Todo from "./Todo";

function TodoList({ todos, setTodos }) {
  //   console.log(todos);
  return (
    <div className="todo-list">
      <ul>
        {todos.map((todo) => {
          // console.log(todo.body)
          return (
            <li>
              <Todo key={todo.id} todo={todo} setTodos={setTodos} />
            </li>
          );
        })}
        <div className="ul-bottom">
          <span>{todos.length} Item(s) left</span>
          <span>Clear completed</span>
        </div>
      </ul>
    </div>
  );
}

export default TodoList;
