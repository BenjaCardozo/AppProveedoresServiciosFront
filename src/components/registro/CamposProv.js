import React from "react";

function CamposProv() {
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
              name="name"
              placeholder="ej: Plomero"
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
              name="name"
              placeholder="Estoy disponible"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CamposProv;
