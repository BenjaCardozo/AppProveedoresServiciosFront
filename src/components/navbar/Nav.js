import { Buscador } from "./Buscador";
import "./Nav.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import fotoServicio from "../../services/Foto";

export function Nav() {
  const [session, setSession] = useState(null);
  const [loggedUserJSON, setLoggedUserJSON] = useState(null);

  useEffect(() => {
    setLoggedUserJSON(localStorage.getItem("session"));
    if (loggedUserJSON != null) {
      const user = JSON.parse(loggedUserJSON);
      setSession(user);
    }
  }, [loggedUserJSON]);

  return (
    <div>
      <nav id="navegador">
        <Logo />
        <Buscador />
        {/* <Panel/> */}
        {session != null ? (
          <Perfil setSession={setSession} session={session} />
        ) : (
          <LoginRegistro />
        )}
      </nav>
    </div>
  );
}

export function LoginRegistro() {
  return (
    <div>
      <div className="iniciarRegistrar">
        <Link to={`/login`}>
          <button type="button">Iniciar Sessión</button>
        </Link>
        <br />
        <Link to={`/registro`}>
          <button type="button">Registrate</button>
        </Link>
      </div>
    </div>
  );
}

export function Perfil({ session, setSession }) {
  const handleLogout = () => {
    setSession(null);
    localStorage.removeItem("session");
    localStorage.removeItem("tokenSession");
  };

  let nombre = null;
  useEffect(() => {
    nombre = document.getElementById("nombre").innerHTML = session.nombre;
  });

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
            <FotoPerfil idUsuario={session.id} />
            <div id="nombre">{nombre}</div>
          </button>
          <ul className="dropdown-menu">
            <li>
              <Link to={"/mi-perfil"} className="dropdown-item">
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

export function FotoPerfil({ idUsuario }) {
  const myImage = document.querySelector("img");//AQUI BUSCO LA TAG IMG Y LA ASIGNO A UNA VARIBLE

  useEffect(() => {
    fotoServicio
      .buscarFotoUsuario(idUsuario)
      .then((f) => {
        //console.log(f);
        const foto = URL.createObjectURL(f);//ESTO LO CONVIERTE F EN UNA DIRECCION PARA EL SRC
        //console.log(foto);
        myImage.src = foto;//AQUI LO SETEO AL SRC
      })
      .catch((error) => {
        alert(error);
        console.log(error);
      });
  });

  return (
    <div className="foto" alt="foto-perfil-usuario">
      <img />{/* AQUI ESTA LA IMAGEN SE VE, PERO ESTA MAL POSICIONADA */}
    </div>
  );
}

export function Logo() {
  return (
    <div class="appLogo">
      <Link
        to={"/"}
        class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
      >
        <img className="bi App-logo" height="32" src="TuProfesional.png"></img>
      </Link>
    </div>
  );
}

export default Nav;
