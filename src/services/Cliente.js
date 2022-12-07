import { API_PROVEEDORES_SERVICIOS } from "../constants/Api.constant";

/* async function revisarError(response) {
  if (!response.ok) {
    let error = await response.json();
    throw error.messages;
  }
} */
let token = null;

class ClienteServicio {
  setToken = (newToken) => {
    token = `Bearer ${newToken}`;
  };

  async crearCliente(data) {
    const response = await fetch(API_PROVEEDORES_SERVICIOS.CLIENTE(), {
      method: "post",
      body: data,
    });
    //revisarError(response);
    if (!response.ok) {
      let error = await response.json();
      throw error.messages;
    }
    return response.json();
  }

  async listarClientes() {
    const response = await fetch(API_PROVEEDORES_SERVICIOS.CLIENTE());
    //revisarError(response);
    if (!response.ok) {
      let error = await response.json();
      throw error.messages;
    }
    return response.json();
  }

  async actualizarCliente(data, id) {
    const response = await fetch(API_PROVEEDORES_SERVICIOS.CLIENTE_BY_ID(id), {
      method: "put",
      headers: { Authorization: token },
      body: data,
    });
    //revisarError(response);
    if (!response.ok) {
      let error = await response.json();
      throw error.messages;
    }
    return response.json();
  }

  async buscarCliente(id) {
    const response = await fetch(API_PROVEEDORES_SERVICIOS.CLIENTE_BY_ID(id));
    //revisarError(response);
    if (!response.ok) {
      let error = await response.json();
      throw error.messages;
    }
    return response.json();
  }

  async eliminarCliente(id) {
    const response = await fetch(API_PROVEEDORES_SERVICIOS.CLIENTE_BY_ID(id), {
      method: "delete",
      headers: { Authorization: token },
    });
    /* revisarError(response); */
    if (!response.ok) {
      let error = await response.json();
      throw error.messages;
    }
    return response.json();
  }

  async bajaCliente(id) {
    const response = await fetch(API_PROVEEDORES_SERVICIOS.CLIENTE_BAJA(id), {
      method: "patch",
      headers: { Authorization: token },
    });
    /* revisarError(response); */
    if (!response.ok) {
      let error = await response.json();
      throw error.messages;
    }
    return response.json();
  }

  async altaCliente(id) {
    const response = await fetch(API_PROVEEDORES_SERVICIOS.CLIENTE_ALTA(id), {
      method: "patch",
      headers: { Authorization: token },
    });
    /* revisarError(response); */
    if (!response.ok) {
      let error = await response.json();
      throw error.messages;
    }
    return response.json();
  }

  async buscarClientesPorBarrio(barrio) {
    const response = await fetch(
      API_PROVEEDORES_SERVICIOS.CLIENTE_BY_BARRIO(barrio)
    );
    //revisarError(response);
    if (!response.ok) {
      let error = await response.json();
      throw error.messages;
    }
    return response.json();
  }
}

export default new ClienteServicio();
