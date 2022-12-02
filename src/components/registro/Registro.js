import { useParams, Link } from "react-router-dom";
import CamposProv from "./CamposProv";
import { useState, useEffect } from "react";
import BarrioServicio from "../../services/Barrio";
import Proveedor from "../../services/Proveedor";
import "./Registro.css";

function RegistroForm() {
  const { rol } = useParams();
  const [barrios, setBarrios] = useState([]);
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [barrio, setBarrio] = useState("");
  const [clave, setClave] = useState("");
  const [clave2, setClave2] = useState("");
  const [foto, setFoto] = useState("");
  const [contacto, setContacto] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [rubro, setRubro] = useState("");
  const [disponibilidad, setDisponibilidad] = useState("");

  const formData = new FormData();
  const fileField = document.querySelector('input[type="file"]');

  useEffect(() => {
    BarrioServicio.listarBarrios()
      .then((data) => setBarrios(data.barrios))
      .catch((error) => console.log(error));
  }, []);

  const handleProvRegistro = (event) => {
    event.preventDefault();
    formData.append("nombre", nombre);
    formData.append("correo", correo);
    formData.append("clave", clave);
    formData.append("clave2", clave2);
    formData.append("barrio", barrio);
    formData.append("foto", fileField.files[foto]);
    formData.append("contacto", contacto);
    formData.append("descripcion", descripcion);
    formData.append("rubro", rubro);
    formData.append("disponibilidad", disponibilidad);

    Proveedor.crearProveedor(formData)
      .then((response) => response.json())
      .catch((error) => console.log(error));

    //n<Navigate to={`/${session}`}></Navigate>;
  };

  const handleClienteRegistro = (event) => {
    formData.append("nombre", nombre);
    formData.append("correo", correo);
    formData.append("clave", clave);
    formData.append("clave2", clave2);
    formData.append("barrio", barrio);
    formData.append("foto", foto);
    formData.append("contacto", contacto);

    event.preventDefault();

    //<Navigate to={`/${session}`}></Navigate>;
  };

  console.log(barrios);
  const opcionesBarrios = barrios.map((b) => (
    <option value={b} key={b}>
      {" "}
      {b}{" "}
    </option>
  ));
  return (
    <div>
      <div className="container mt-5 mb-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">Registro {rol}</div>
              <div className="card-body">
                <form
                  className="row gy-2 gx-3 align-items-center"
                  method="post"
                  action="#"
                  onSubmit={
                    rol == "proveedor"
                      ? handleProvRegistro
                      : handleClienteRegistro
                  }
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
                          name="nombre"
                          value={nombre}
                          placeholder="Escriba su nombre"
                          onChange={({ target }) => setNombre(target.value)}
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
                          <i
                            className="fa fa-envelope fa"
                            aria-hidden="true"
                          ></i>
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          name="correo"
                          value={correo}
                          id="email"
                          placeholder="ejemplo@email.com"
                          onChange={({ target }) => setCorreo(target.value)}
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
                          name="barrio"
                          value={barrio}
                          className="form-select form-select-sm"
                          aria-label=".form-select-sm example"
                          onChange={({ target }) => setBarrio(target.value)}
                        >
                          {opcionesBarrios}
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
                      name="foto"
                      value={foto}
                      type="file"
                      onChange={({ target }) => setFoto(target.files)}
                    />
                  </div>
                  <div className="form-group">
                    <label for="password" className="cols-sm-2 control-label">
                      Contraseña
                    </label>
                    <div className="cols-sm-10">
                      <div className="input-group">
                        <span className="input-group-addon">
                          <i
                            className="fa fa-lock fa-lg"
                            aria-hidden="true"
                          ></i>
                        </span>
                        <input
                          type="password"
                          className="form-control"
                          name="clave"
                          value={clave}
                          id="password"
                          placeholder="Ingrese su contraseña"
                          onChange={({ target }) => setClave(target.value)}
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
                          <i
                            className="fa fa-lock fa-lg"
                            aria-hidden="true"
                          ></i>
                        </span>
                        <input
                          type="password"
                          className="form-control"
                          name="clave2"
                          value={clave2}
                          id="confirm"
                          placeholder="Repita su contraseña"
                          onChange={({ target }) => setClave2(target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  {rol == "proveedor" ? <CamposProv /> : <></>}

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
                          name="contacto"
                          value={contacto}
                          placeholder="Ingrese su número de telefono"
                          onChange={({ target }) => setContacto(target.value)}
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
    </div>
  );
}

export default RegistroForm;
