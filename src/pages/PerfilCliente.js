import React from "react";
import { useEffect, useState } from "react";
import { FotoPerfil } from "../components/navbar/Nav";
import ClienteServicio from "../services/Cliente";
import "./PerfilCliente.css";

const PerfilCliente = () => {
  const [clientes, setCliente] = useState([]);
  const [contacto, setContacto] = useState("");
  const [barrios, setBarrios] = useState([]);
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [barrio, setBarrio] = useState("");
  const [foto, setFoto] = useState("");

  useEffect(() => {
    ClienteServicio.buscarCliente()
      .then((data) => setCliente(data.clientes))
      .catch((error) => console.log(error));
  }, []);

  console.log(clientes);

  const opcionesBarrios = barrios.map((b) => (
    <option value={b} key={b}>
      {" "}
      {b}{" "}
    </option>
  ));

  return (
    <>
      <div className="Cliente">
        <div className="solicitar">
          <div className="contacto">
            <div className="nombre">
              <FotoPerfil />
              {/* <h4 className="profesion">{clientes.rubro}</h4> */}
            </div>
            {/* <h6 className="">{clientes.ubicacion}</h6>
                    <h6 className=""><strong>Contacto</strong></h6>
                    <h6 className="">{clientes.email}</h6>
                    <h6 className="">{clientes.contacto}</h6> */}
          </div>
        </div>

        <div className="datosPerfil">
          <form class="needs-validation" novalidate>
            <div class="row g-3">
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
              <div class="mb-3">
                <label for="formFile" class="form-label">
                  Cambiar Foto de Perfil
                </label>
                <input class="form-control" type="file" id="formFile" />
              </div>
              <hr class="my-4" />

              <button class="w-100 btn btn-primary btn-lg" type="submit">
                Realizar Cambios
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default PerfilCliente;
