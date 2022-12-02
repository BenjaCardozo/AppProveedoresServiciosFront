import "./MisServicios.css";
import { useEffect, useState } from "react";
import Proveedor from "../../services/Proveedor";

export function MisServicios() {

  const [Trabajos, setTrabajos] = useState([]);
  useEffect(() => {
    Trabajos.buscarTrabajos()
      .then((data) => setTrabajos(data))
      .catch((error) => console.log(error));
  }, []);
  console.log(Trabajos);

  return <>
      <div className="solicitudP"></div>
      <div className="descripcionSolicitud">
        <div className="top-dato">
          <div className="perfilP">
            <div img src="" className="fotoPerfilP"></div>
            <h6 className="perfilPS">{Proveedor.nombre}</h6>
          </div>
            
          <div className="fechas">
            <h6>Fecha de incio: {Trabajos.fechaInicio}</h6>
            <h6>Fecha de finalización: {Trabajos.fechaFin}</h6>
          </div>
          
        </div>
        <div>
          <textarea class="solicitud" placeholder="Descripcion...">
          </textarea>
          </div>
      <div>
        <button type="button" class="btn btn-light">Calificar</button>
      </div>
      
    </div>
    </>
  ;
}

