import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import loginServicio from "../services/Login";

function LogIn() {
  const [username, SetUsername] = useState("");
  const [password, SetPassword] = useState("");
  const [messageError, setMessageError] = useState("");
  const navigate = useNavigate();

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    loginServicio
      .login({
        correo: username,
        clave: password,
      })
      .then((data) => {
        localStorage.setItem("loggedAppUser", JSON.stringify(data));
        console.log(data);
      })
      .catch((error) => setMessageError(error));

    navigate("/");
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
      <button>Iniciar Sessión</button>
    </form>
  );
}

export default LogIn;
