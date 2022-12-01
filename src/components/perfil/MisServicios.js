import "./MisServicios.css";

export function MisServicios() {
  return <>
      <div className="solicitudP"></div>
      <div className="descripcionSolicitud">
        <div className="top-dato">
          <div className="perfilP">
            <div img src="" className="fotoPerfilP"></div>
            <h6 className="perfilPS">Proveedor proveedor</h6>
          </div>
            
          <div className="fechas">
            <h6>Fecha de incio</h6>
            <h6>Fecha de finalización</h6>
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

