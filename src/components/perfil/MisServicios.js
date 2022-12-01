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
          <textarea class="solicitud">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic eius
            recusandae sapiente veritatis velit officia dolore cupiditate ipsam!
            Reiciendis cumque delectus veritatis minima modi a magni eligendi! Modi,
            architecto commodi? Lorem ipsum dolor sit, amet consectetur adipisicing
            elit.
          </textarea>
          </div>
      <div>
        <button type="button" class="btn btn-light">Calificar</button>
      </div>
      
    </div>
    </>
  ;
}

