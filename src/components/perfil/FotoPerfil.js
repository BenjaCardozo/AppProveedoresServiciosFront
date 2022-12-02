import "./FotoPerfil.css"
// import FotoServicio from "./../../../services/Foto.js";
import { useState } from 'react';
import { useEffect } from 'react';

export function FotoPerfil({proveedor}){
    
//     const [clientes, setClientes] = useState([]);
//   let id;
//   useEffect(() => {
//       FotoServicio.buscarCliente(id)
//       .then((data) => setClientes(data.clientes))
//       .catch((error) => console.log(error));
//   }, []);

    return<div className="perfil">
        <div className="fotoPerfilProveedor">
        </div>
        <div className="nombre">
            <h3 className="nombrePerfil">David Garnica</h3>
        </div>
    </div>
}