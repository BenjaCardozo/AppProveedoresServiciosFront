import "./Perfil.css";
export function Perfil() {
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
              <a className="dropdown-item" href="#">
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
