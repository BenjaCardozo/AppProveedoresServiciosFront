import "./Perfil.css";
export function Perfil(){
    return<><div class="nav-perfil">
    
    <div class="dropdown">
    <button id="boton" class="btn " type="button" data-bs-toggle="dropdown" aria-expanded="false">
    <FotoPerfil/>
    <div id="nombre">
     David Garnica
    </div>
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="#">Perfil</a></li>
      <li><a class="dropdown-item" href="#">Historial de servicios</a></li>
      <li><hr class="dropdown-divider"></hr></li>
      <li><a class="dropdown-item" href="#">Cerrar sesión</a></li>
    </ul>
  </div>
  </div> 
  </>    
}

export function FotoPerfil(){
  return <div class="foto" alt="foto-perfil-usuario">

         </div>
}
