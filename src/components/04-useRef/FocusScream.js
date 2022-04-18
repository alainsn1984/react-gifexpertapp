import React, { useRef } from "react";

export const FocusScream = () => {
  const inputRef = useRef();

  const handleSubmit = () => {
    inputRef.current.select();
    console.log(inputRef.current);
  };

  return (
    <div>
      <h1>Focus Scream</h1>
      <hr />
      <input ref={inputRef} className="form-control" placeholder="Su nombre" />
      <button className="btn btn-outline-primary mt-5" onClick={handleSubmit}>
        Aceptar
      </button>
    </div>
  );
};
