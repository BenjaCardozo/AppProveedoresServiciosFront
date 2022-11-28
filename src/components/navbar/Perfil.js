import "./Perfil.css";
import { useEffect, useState } from "react";
import proveedorServicio from "../../services/Proveedor";

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
            <div id="nombre">David Garnica</div>
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">
                Perfil
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
                Historial de servicios
              </a>
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
export default Perfil;
