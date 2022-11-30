import React from "react";
import { useEffect, useState } from "react";
import ClienteServicio from "../services/Cliente";

const PerfilCliente = () => {
  const [clientes, setCliente] = useState([]);

  useEffect(() => {
    ClienteServicio.buscarCliente()
      .then((data) => setCliente(data.clientes))
      .catch((error) => console.log(error));
  }, []);

  console.log(clientes);

  return (
    <>
      <form class="needs-validation" novalidate>
        <div class="row g-3">
          <div class="col-sm-6">
            <label for="firstName" class="form-label">
              Nombre
            </label>
            <input
              type="text"
              class="form-control"
              id="firstName"
              placeholder=""
              value=""
              required
            />
            <div class="invalid-feedback">Valid first name is required.</div>
          </div>

          <div class="col-12">
            <label for="username" class="form-label">
              Apellido
            </label>
            <div class="input-group has-validation">
              <input
                type="text"
                class="form-control"
                id="username"
                placeholder="{cliente.nombre}"
                required
              />
              <div class="invalid-feedback">Your username is required.</div>
            </div>
          </div>

          <div class="col-12">
            <label for="address" class="form-label">
              Direccion
            </label>
            <input
              type="text"
              class="form-control"
              id="address"
              placeholder="{cliente.direccion}"
              required
            />
          </div>

          <div class="col-sm-6">
            <label for="email" class="form-label">
              Email <span class="text-muted"></span>
            </label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="{cliente.email}"
            />
            <div class="invalid-feedback">
              PorFavor ingresa una Direccion valida.
            </div>
          </div>

          <div class="col-sm-6">
            <label for="lastName" class="form-label">
              Contacto
            </label>
            <input
              type="text"
              class="form-control"
              id="lastName"
              placeholder="{cliente.contacto}"
              value=""
              required
            />
            <div class="invalid-feedback">Valid last name is required.</div>
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
    </>
  );
};

export default PerfilCliente;
