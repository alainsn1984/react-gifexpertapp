import React, { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { useForm } from "../../hooks/useForm";
import { TodoList } from "./TodoList";
import { TodoListItem } from "./TodoListItem";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};
export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);
  const [{ description }, handleInputChange, reset] = useForm({
    description: "",
  });
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.trim().length <= 1) {
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false,
    };

    const action = {
      type: "add",
      payload: newTodo,
    };

    dispatch(action);
    reset();
  };
  const handleDelete = (id) => {
    const action = {
      type: "delete",
      payload: id,
    };
    dispatch(action);
  };

  return (
    <div>
      <h1>TodoApp ({todos.length})</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <TodoList todos={todos} handleDelete={handleDelete} />
        </div>
        <div className="col-2"></div>
        <div className="col-5">
          <h3>Agregar TODOS</h3>
          <form onSubmit={handleSubmit}>
            <input
              name="description"
              type="text"
              className="form-control"
              placeholder="Nuevo Todo..."
              autocompleted="off"
              onChange={handleInputChange}
              value={description}
            />
            <button
              type="submit"
              className="btn btn-outline-primary btn-block mt-1"
            >
              Agregar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
