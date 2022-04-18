import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export const LoginScream = () => {
  const usuario = {
    id: 123,
    name: "Alain",
  };
  const { setUser } = useContext(UserContext);

  return (
    <div>
      <h1>LoginScream</h1>
      <hr />
      <button onClick={() => setUser(usuario)} className="btn btn-primary">
        Login
      </button>
    </div>
  );
};
