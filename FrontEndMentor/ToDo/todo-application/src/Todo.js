import React from "react";

function Todo({ todo, setTodos }) {

    const handleClick = () => {
      fetch(`/tasks/${todo.id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      })
    };
  // console.log(todo)

  return (
    <>
      <div className="to-do">
        <div className="check">
          <img
            src="/images/icon-check.svg"
            alt=""
            style={{ display: "none" }}
          />
        </div>
        <p>{todo.body}</p>
        <img src="/images/icon-cross.svg" alt="" onClick={handleClick} />
      </div>
      <hr />
    </>
  );
}

export default Todo;
