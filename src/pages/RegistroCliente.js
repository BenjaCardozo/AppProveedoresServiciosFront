import React from "react";

function RegistroCliente() {
  const { cliente } = useParams();
  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Registro {cliente}</div>
            <div className="card-body">
              <form
                className="row gy-2 gx-3 align-items-center"
                method="post"
                action="#"
              >
                <div className="form-group">
                  <label for="name" className="cols-sm-2 control-label">
                    Nombre
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
                        id="name"
                        placeholder="Escriba su nombre"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label for="email" className="cols-sm-2 control-label">
                    Correo
                  </label>
                  <div className="cols-sm-10">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i className="fa fa-envelope fa" aria-hidden="true"></i>
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="ejemplo@email.com"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label for="username" className="cols-sm-2 control-label">
                    Barrio
                  </label>
                  <div className="cols-sm-10">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i className="fa fa-users fa" aria-hidden="true"></i>
                      </span>
                      <select
                        className="form-select form-select-sm"
                        aria-label=".form-select-sm example"
                      >
                        <option selected>Elegir un barrio</option>
                        <option value="1">Barrio 1</option>
                        <option value="2">Barrio 2</option>
                        <option value="3">Barrio 3</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <label for="formFileSm" className="form-label">
                    Seleccione una foto de perfil
                  </label>
                  <input
                    className="form-control form-control-sm"
                    id="formFileSm"
                    type="file"
                  />
                </div>
                <div className="form-group">
                  <label for="password" className="cols-sm-2 control-label">
                    Contraseña
                  </label>
                  <div className="cols-sm-10">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i className="fa fa-lock fa-lg" aria-hidden="true"></i>
                      </span>
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        id="password"
                        placeholder="Ingrese su contraseña"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label for="confirm" className="cols-sm-2 control-label">
                    Confirmar Contraseña
                  </label>
                  <div className="cols-sm-10">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i className="fa fa-lock fa-lg" aria-hidden="true"></i>
                      </span>
                      <input
                        type="password"
                        className="form-control"
                        name="confirm"
                        id="confirm"
                        placeholder="Repita su contraseña"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label for="name" className="cols-sm-2 control-label">
                    Contacto
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
                        placeholder="ingrese su número de telefono"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group ">
                  <button
                    type="submit"
                    className="btn btn-primary btn-l btn-block login-button"
                  >
                    Registrarse!
                  </button>
                </div>
                <div>
                  <span>
                    Ya tenes cuenta? <Link to={`/login`}>Iniciar Sesion</Link>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistroCliente;
