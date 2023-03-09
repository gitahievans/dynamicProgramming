import localforage from "localforage";
import React from "react";

function Todo({ todo, todos, setTodos }) {
  const handleDeleteClick = () => {
    const updatedTodos = todos.filter(myTodo => myTodo.id !== todo.id)
    setTodos(updatedTodos)
    localforage.removeItem('todos').then(() => {
      localforage.setItem('todos', updatedTodos)
    })
  };

  const handleCompletedClick = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: false };
      }
      return todo;
    });
    setTodos(updatedTodos);
    localforage.removeItem("todos").then(() => {
      localforage.setItem("todos", updatedTodos);
    });
  };
  const handleNotCompletedClick = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id){
        return {...todo, completed: true};
      }
      return todo;
    })
   setTodos(updatedTodos);
   localforage.removeItem("todos").then(() => {
     localforage.setItem("todos", updatedTodos);
   });
  }

  return (
    <>
      <div className="to-do">
        {todo.completed ? (
          <div
            className="checked"
            onClick={() => handleCompletedClick(todo.id)}
          >
            <img
              src="/images/icon-check.svg"
              alt=""
            />
          </div>
        ) : (
          <div
            className="not-checked"
            onClick={() => handleNotCompletedClick(todo.id)}
          >
            <img
              src="/images/icon-check.svg"
              alt=""
              style={{ display: "none" }}
            />
          </div>
        )}
        {todo.completed ? (
          <p style={{ textDecoration: "line-through", color: "gray" }}>
            {todo.body}
          </p>
        ) : (
          <p>{todo.body}</p>
        )}
        <img
          src="/images/icon-cross.svg"
          alt=""
          onClick={handleDeleteClick}
          style={{ cursor: "pointer" }}
        />
      </div>
      <hr />
    </>
  );
}

export default Todo;
