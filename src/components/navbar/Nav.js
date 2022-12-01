import { Buscador } from "./Buscador";
import "./Nav.css";
import { Children, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LogIn from "./../../pages/LogIn";
import ClienteServicio from "../../services/Cliente.js";

export function Nav() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    const loggedUserJSON = localStorage.getItem("loggedAppUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setSession(user);
    }
  }, []);
 
  return (
    <div>
      <nav id="navegador">
        <Logo />
        <Buscador />
        {session ? (
          
          <Perfil setSession={setSession}/>
          
        ) : (
          <div className="iniciarRegistrar">
            <Link to={`/login`}>
              <button type="button">Iniciar Sessión</button>
            </Link>
            <br/>
            <Link to={`/registro`}>
              <button type="button">Registrate</button>
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
}

export function Perfil() {
  const handleLogout = () => {
    //SetSession(null);
    localStorage.removeItem("loggedAppUser");
  };

  const [session, setSession] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedUserJSON = localStorage.getItem("loggedAppUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setSession(user);
    }
  }, []);
/* 
  useEffect(() => {
    const loggedUserJSON = localStorage.getItem("loggedAppUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
    }
  }, []);

  console.log(session); */

  /* if(user.rol == "PROVEEDOR"){
    console.log(user.id)
    console.log(user.rol)
    
  } */

 
function obtenerNombre() {
    var nombre = document.getElementById("nombre");
    nombre.innerTHML=`<div id="nombre">${clientes.nombre}</div>`;
    nombre.removeChild(nombre);
  };

  const [clientes, setClientes] = useState([]);
  let id;
  useEffect(() => {
      ClienteServicio.buscarCliente(id)
      .then((data) => setClientes(data.clientes))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <div className="nav-perfil">
        <div className="dropdown">
          <button
            id="boton"
            className="btn "
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <FotoPerfil clientes/>
            {/* <div id="nombre">{clientes.nombre}</div> */}
          </button>
          <ul className="dropdown-menu">
            <li>
              <Link to={'/mi-perfil'} className="dropdown-item" >
                Perfil
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to={"/mis-servicios"}>
                Historial de servicios
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider"></hr>
            </li>
            <li>
              <a className="dropdown-item" onClick={handleLogout}>
                Cerrar sesión
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export function FotoPerfil(clientes) {
  return <div className="foto" alt="foto-perfil-usuario">{clientes.foto}</div>;
}

export function Logo() {
  return (
    <div class="appLogo">
      <a
        href="/"
        class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
      >
        <img className="bi App-logo" height="32" src="TuProfesional.png"></img>
      </a>
    </div>
  );
}

export default Nav;
