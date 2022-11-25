import React from "react";
import { API_PROVEEDORES } from "./../../constants/Api.constant";

function RegistroForm() {

  return (
    <div>
      <div className="container">
        <form className="row">
          <div className="col-12">
            <label for="nombreInput" className="">
              Nombre Completo
            </label>
            <input
              type="text"
              className="form-control"
              id="nombreInput"
              placeholder="Juan Perez"
            />
          </div>

          <div className="col-12">
            <label for="emailInput" className="form-label">
              Correo Electronico
            </label>
            <input
              type="email"
              className="form-control"
              id="emailInput"
              placeholder="ejemplo@email.com"
            />
          </div>

          <div className="col-12">
            <label for="passwordInput" className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              id="passwordInput"
              placeholder="Contraseña"
            />
          </div>

          <div className="col-12">
            <label for="passwordInput2" className="form-label">
              Repetir Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              id="passwordInput2"
              placeholder="Repetir Contraseña"
            />
          </div>
          <div className="col-md-4">
            <label for="inputState" className="form-label">
              Barrio
            </label>
            <select id="inputState" className="form-select">
              <option selected></option>
              <option></option>
            </select>
          </div>
          <div class="mb-3">
            <label for="formFile" class="form-label">
              
            </label>
            <input class="form-control" type="file" id="formFile" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegistroForm;
