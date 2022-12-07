import { API_PROVEEDORES_SERVICIOS } from "../constants/Api.constant";

async function revisarError(response) {
  if (!response.ok) {
    let error = await response.json();
    throw error.messages;
  }
}

class ClienteServicio {
  async crearCliente(data) {
    const response = await fetch(API_PROVEEDORES_SERVICIOS.CLIENTE(), {
      method: "post",
      body: data,
    });
    revisarError(response);
    return response.json();
  }

  async listarClientes() {
    const response = await fetch(API_PROVEEDORES_SERVICIOS.CLIENTE());
    revisarError(response);
    return response.json();
  }

  async actualizarCliente(data, token, id) {
    const response = await fetch(API_PROVEEDORES_SERVICIOS.CLIENTE_BY_ID(id), {
      method: "put",
      headers: { Authorization: `Bearer ${token}` },
      body: data,
    });
    revisarError(response);
    return response.json();
  }

  async buscarCliente(id) {
    const response = await fetch(API_PROVEEDORES_SERVICIOS.CLIENTE_BY_ID(id));
    revisarError(response);
    return response.json();
  }

  async eliminarCliente(id, token) {
    const response = await fetch(API_PROVEEDORES_SERVICIOS.CLIENTE_BY_ID(id), {
      method: "delete",
      headers: { Authorization: `Bearer ${token}` },
    });
    revisarError(response);
    return response.json();
  }

  async bajaCliente(id, token) {
    const response = await fetch(API_PROVEEDORES_SERVICIOS.CLIENTE_BAJA(id), {
      method: "patch",
      headers: { Authorization: `Bearer ${token}` },
    });
    revisarError(response);
    return response.json();
  }

  async altaCliente(id, token) {
    const response = await fetch(API_PROVEEDORES_SERVICIOS.CLIENTE_ALTA(id), {
      method: "patch",
      headers: { Authorization: `Bearer ${token}` },
    });
    revisarError(response);
    return response.json();
  }

  async buscarClientesPorBarrio(barrio) {
    const response = await fetch(
      API_PROVEEDORES_SERVICIOS.CLIENTE_BY_BARRIO(barrio)
    );
    revisarError(response);
    return response.json();
  }
}

export default new ClienteServicio();
