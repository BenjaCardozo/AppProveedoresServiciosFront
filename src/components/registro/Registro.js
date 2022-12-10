import { useParams, Link } from "react-router-dom";
import "./Registro.css";
import { useState } from "react";

function RegistroForm() {
  const { rol } = useParams();
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [barrio, setBarrio] = useState("");
  const [clave, setClave] = useState("");
  const [clave2, setClave2] = useState("");
  const [foto, setFoto] = useState("");
  const [contacto, setContacto] = useState("");
  const [rubro, setRubro] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [disponibilidad, setDisponibilidad] = useState("");

  return (
    <div className="body">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card registro">
            <div className="card-header ">Registro {rol}</div>
            <div className="card-body">
              <form className="form row gy-2 gx-3 align-items-center">
                <div className="form-group">
                  <label htmlFor="name" className="cols-sm-2 control-label">
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
                        onChange={(e) => setNombre(e.target.value)}
                        value={nombre}
                        placeholder="Escriba su nombre"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="cols-sm-2 control-label">
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
                        onChange={(e) => setCorreo(e.target.value)}
                        value={correo}
                        id="email"
                        placeholder="ejemplo@email.com"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="username" className="cols-sm-2 control-label">
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
                  <label htmlFor="formFileSm" className="form-label">
                    Seleccione una foto de perfil
                  </label>
                  <input
                    className="form-control form-control-sm"
                    id="formFileSm"
                    onChange={(e) => setFoto(e.target.value)}
                    value={foto}
                    type="file"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password" className="cols-sm-2 control-label">
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
                        onChange={(e) => setClave(e.target.value)}
                        value={clave}
                        id="password"
                        placeholder="Ingrese su contraseña"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="confirm" className="cols-sm-2 control-label">
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
                        onChange={(e) => setClave2(e.target.value)}
                        value={clave2}
                        id="confirm"
                        placeholder="Repita su contraseña"
                      />
                    </div>
                  </div>
                </div>
                {rol == "proveedor" ? <CamposProv /> : <></>}

                <div className="form-group">
                  <label htmlFor="name" className="cols-sm-2 control-label">
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
                        onChange={(e) => setContacto(e.target.value)}
                        value={contacto}
                        placeholder="Ingrese su número de telefono"
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

function CamposProv() {
  
  return (
    <div>
      <div className="form-group">
        <label htmlFor="name" className="cols-sm-2 control-label">
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
        <label
          htmlFor="exampleFormControlTextarea2 cols-sm-2"
          className="form-label"
        >
          Descripcion de su servicio
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>

      <div className="form-group">
        <label htmlFor="name" className="cols-sm-2 control-label">
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

export default RegistroForm;
