import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import loginServicio from "../services/Login";
import clienteServicio from "../services/Cliente";
import proveedorServicio from "../services/Proveedor";
import moderadorServicio from "../services/Moderador";
import adminServicio from "../services/Admin";
import "./Login.css";

function LogIn() {
  const [username, SetUsername] = useState("");
  const [password, SetPassword] = useState("");
  const [messageError, setMessageError] = useState("");
  const navigate = useNavigate();

  const revisarRol = (data) => {
    switch (data.rol) {
      case "PROVEEDOR":
        proveedorServicio
          .buscarProveedor(data.id)
          .then((user) => localStorage.setItem("session", JSON.stringify(user)))
          .catch((error) => alert(error));
        break;
      case "CLIENTE":
        clienteServicio
          .buscarCliente(data.id)
          .then((user) => localStorage.setItem("session", JSON.stringify(user)))
          .catch((error) => alert(error));
        break;
      case "ADMIN":
        adminServicio.setToken(data.token);
        adminServicio
          .buscarAdmin(data.id)
          .then((user) => localStorage.setItem("session", JSON.stringify(user)))
          .catch((error) => alert(error));
        break;
      case "MODERADOR":
        moderadorServicio
          .buscarModerador(data.id)
          .then((user) => localStorage.setItem("session", JSON.stringify(user)))
          .catch((error) => alert(error));
        break;
      default:
        throw new Error("algo salio mal.");
    }
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    loginServicio
      .login({
        correo: username,
        clave: password,
      })
      .then((data) => {
        localStorage.setItem("tokenSession", JSON.stringify(data));
        revisarRol(data);
        console.log(data);
        navigate("/");
      })
      .catch((error) => {
        alert(error);
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleLoginSubmit} className="form">
      <h2 align="center" className="titulo">
        Log In
      </h2>
      <br />
      <div align="center">
        <label
          for="exampleFormControlTextarea2 cols-sm-2"
          className="form-label"
        >
          <h5>Nombre</h5>
        </label>
        <br />
        <input
          type="text"
          className="form-control inp"
          value={username}
          name="correo"
          placeholder="Nombre de usuario"
          onChange={({ target }) => SetUsername(target.value)}
        ></input>
      </div>
      <br />
      <div align="center">
        <label
          for="exampleFormControlTextarea2 cols-sm-2"
          className="form-label"
        >
          <h5>Clave</h5>
        </label>
        <br />
        <input
          type="password"
          className="form-control inp"
          value={password}
          name="clave"
          placeholder="Clave"
          onChange={({ target }) => SetPassword(target.value)}
        ></input>
        <br />
        <br />
        <br />
      </div>
      <div className="botn">
        <span>
          <button className="botn titul">Iniciar Sesión</button>
        </span>
      </div>
      <br />
      <h5 align="center">
        No Tienes cuenta? <Link to={`/registro`}>Registrate</Link>
      </h5>
    </form>
  );
}

export default LogIn;
