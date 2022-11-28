import React from "react";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import loginServicio from "../services/Login";

function LogIn() {
  const [username, SetUsername] = useState("");
  const [password, SetPassword] = useState("");
  const [session, SetSession] = useState(null);
  const [messageError, setMessageError] = useState("");

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    loginServicio
      .login({
        correo: username,
        clave: password,
      })
      .then((data) => SetSession(data))
      .catch((error) => setMessageError(error));

    <Navigate to={`/${session}`}></Navigate>;

    SetUsername("");
    SetPassword("");
    //link perfil (data)
  };

  return (
    <form onSubmit={handleLoginSubmit}>
      <div>
        <input
          type="text"
          value={username}
          name="correo"
          placeholder="Nombre de usuario."
          onChange={({ target }) => SetUsername(target.value)}
        ></input>
      </div>
      <div>
        <input
          type="password"
          value={password}
          name="clave"
          placeholder="Clave."
          onChange={({ target }) => SetPassword(target.value)}
        ></input>
      </div>
      <button>Login</button>
    </form>
  );
}

export default LogIn;
