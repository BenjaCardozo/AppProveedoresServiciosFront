import { useParams, Link } from "react-router-dom";
import "./Registro.css";
import { useState, useEffect } from "react";
import proveedorServicio from '../../services/Proveedor'
import clienteServicio from '../../services/Cliente'
import barrioServicio from '../../services/Barrio'

function RegistroForm() {
  const { rol } = useParams();
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [barrio, setBarrio] = useState("");
  const [clave, setClave] = useState("");
  const [clave2, setClave2] = useState("");
  const [contacto, setContacto] = useState("");

  const [rubro, setRubro] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [disponibilidad, setDisponibilidad] = useState("");

  const [barrios, setBarrios] = useState([]);
  useEffect(()=>{
    barrioServicio.listarBarrios()
    .then ((data) => setBarrios(data.barrios))
  }, [barrios])

  const handleSubmit = (event)=>{
    event.preventDefault()
    const formData = new FormData();
    const fileField = document.querySelector('input[type="file"]')
    if (rol == 'proveedor'){
      formData.append('nombre', nombre)
      formData.append('correo', correo)
      formData.append('clave', clave)
      formData.append('clave2', clave2)
      formData.append('barrio', barrio)
      if (fileField.files[0] != null){
        formData.append('foto', fileField.files[0])
      }
      formData.append('contacto', contacto)
      formData.append('descripcion', descripcion)
      formData.append('rubro', rubro)
      formData.append('disponibilidad', disponibilidad)
      proveedorServicio.crearProveedor(formData)
      .then( () => alert('registro existoso'))
      .catch( (error)=> alert(error))
    }
  }

  const listarBarrios = barrios.map((b) => <option key={b}>{b.toString()}</option>)

  return (
    <div className="body">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card registro">
            <div className="card-header ">Registro {rol}</div>
            <div className="card-body">
              <form className="form row gy-2 gx-3 align-items-center" 
              onSubmit={handleSubmit}>
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
                        onChange={(e) => setBarrio(e.target.value)}
                        value={barrio}
                      >
                        <option>Seleccionar un barrio</option>
                        {listarBarrios}
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
                {rol == "proveedor" ? <CamposProv rubro={rubro} setRubro={setRubro} descripcion={descripcion} setDescripcion={setDescripcion} disponibilidad={disponibilidad} setDisponibilidad={setDisponibilidad} /> : <></>}

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

function CamposProv({rubro, setRubro, disponibilidad, setDisponibilidad, descripcion, setDescripcion}) {

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
              onChange={(e) => setRubro(e.target.value)}
              value={rubro}
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
          onChange={(e) => setDescripcion(e.target.value)}
          value={descripcion}
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
              onChange={(e) => setDisponibilidad(e.target.value)}
              value={disponibilidad}
              placeholder="Estoy disponible"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegistroForm;
