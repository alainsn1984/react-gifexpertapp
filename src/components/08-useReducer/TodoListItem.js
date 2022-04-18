import React from "react";

export const TodoListItem = ({ todo, index, handleDelete }) => {
  return (
    
      <li className="list-group-item" key={todo.id}>
        <p className="">
          {index + 1}. {todo.desc}
        </p>
        <button
          onClick={() => handleDelete(todo.id)}
          className="btn btn-danger"
        >
          Borrar
        </button>
      </li>

  );
};
