import { Buscador } from "./Buscador";
import "./Nav.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Nav() {
  const [session, setSession] = useState(null);
  const [loggedUserJSON, setLoggedUserJSON] = useState(null);
  /* const [panel,setPanel] = useState(undefined) */

  useEffect(() => {
    setLoggedUserJSON(localStorage.getItem("session"));
    if (loggedUserJSON != null) {
      const user = JSON.parse(loggedUserJSON);
      setSession(user);
    }

    /* setPanel(()=>{
      if(session){
        return <Perfil/>
      }
      return <loginRegistro/>
    }) */
    
  }, [loggedUserJSON]);

  return (
    <div>
      <nav id="navegador">
        <Logo />
        <Buscador />
        {/* <panel/> */}
        {/* {session ? (
          <Perfil setSession={setSession} session={session} />
        ) : (
          <loginRegistro />
        )} */}
      </nav>
    </div>
  );
}

export function loginRegistro() {
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

  /* document.getElementById("nombre").innerHTML = "HOLA"; */

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
            <FotoPerfil />
            <div id="nombre"></div>
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

export function FotoPerfil() {
  return <div className="foto" alt="foto-perfil-usuario"></div>;
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
