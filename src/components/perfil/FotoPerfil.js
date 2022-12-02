import "./FotoPerfil.css"

export function FotoPerfil({props}){
    return<div className="perfil">
        <div className="fotoPerfilProveedor">
        </div>
        <div className="nombre">
            <h3 className="nombrePerfil">{props.nombre}</h3>
        </div>
    </div>
}