import {React, useState} from "react";

function CamposProv() {

  const [descripcion, setDescripcion] = useState('');
  const [rubro, setRubro] = useState('');
  const [disponibilidad, setDisponibilidad] = useState('');
  return (
    <div>
      <div className="form-group">
        <label for="name" className="cols-sm-2 control-label">
          Rubro
        </label>
        <div className="cols-sm-10">
          <div className="input-group">
            <span className="input-group-addon">
              <i className="fa fa-user fa" aria-hidden="true"></i>
            </span>
            <input
              type="text"
              className="form-control"
              name="rubro"
              value={rubro}
              placeholder="ej: Plomero"
              onChange={({ target }) => setRubro(target.value)}
            />
          </div>
        </div>
      </div>
      <div className="mb-3">
        <label for="exampleFormControlTextarea2 cols-sm-2" className="form-label">
          Descripcion de su servicio
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          name="descripcion"
          value={descripcion}
          onChange={({ target }) => setDescripcion(target.value)}
          rows="3"
        ></textarea>
      </div>

      <div className="form-group">
        <label for="name" className="cols-sm-2 control-label">
          Disponibilidad
        </label>
        <div className="cols-sm-10">
          <div clasclassNames="input-group">
            <span claclassNamess="input-group-addon">
              <i className="fa fa-user fa" aria-hidden="true"></i>
            </span>
            <input
              type="text"
              className="form-control"
              name="disponibilidad"
              value={disponibilidad}
              placeholder="Estoy disponible"              
              onChange={({ target }) => setDisponibilidad(target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CamposProv;
