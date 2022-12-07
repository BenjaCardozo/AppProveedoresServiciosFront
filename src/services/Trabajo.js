import { API_PROVEEDORES_SERVICIOS } from "../constants/Api.constant";

/* async function revisarError(response) {
  if (!response.ok) {
    let error = await response.json();
    throw error.messages;
  }
} */
let token = null;

class TrabajoServicio {
  setToken = (newToken) => {
    token = `Bearer ${newToken}`;
  };

  async crearTrabajo(data) {
    const response = await fetch(API_PROVEEDORES_SERVICIOS.TRABAJO(), {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(data),
    });
    /* revisarError(response) */
    if (!response.ok) {
      let error = await response.json();
      throw error.messages;
    }
    return response.json();
  }

  async listarTrabajos() {
    const response = await fetch(API_PROVEEDORES_SERVICIOS.TRABAJO());
    /* revisarError(response) */
    if (!response.ok) {
      let error = await response.json();
      throw error.messages;
    }
    return response.json();
  }

  async terminarTrabajo(id) {
    const response = await fetch(API_PROVEEDORES_SERVICIOS.TRABAJO_BY_ID(id), {
      method: "put",
      headers: { Authorization: token },
    });
    /* revisarError(response) */
    if (!response.ok) {
      let error = await response.json();
      throw error.messages;
    }
    return response.json();
  }

  async buscarTrabajo(id) {
    const response = await fetch(API_PROVEEDORES_SERVICIOS.TRABAJO_BY_ID(id));
    /* revisarError(response) */
    if (!response.ok) {
      let error = await response.json();
      throw error.messages;
    }
    return response.json();
  }

  async eliminarTrabajo(id) {
    const response = await fetch(API_PROVEEDORES_SERVICIOS.TRABAJO_BY_ID(id), {
      method: "delete",
      headers: { Authorization: token },
    });
    /* revisarError(response) */
    if (!response.ok) {
      let error = await response.json();
      throw error.messages;
    }
    return response.json();
  }

  async bajaTrabajo(id) {
    const response = await fetch(API_PROVEEDORES_SERVICIOS.TRABAJO_BAJA(id), {
      method: "patch",
      headers: { Authorization: token },
    });
    /* revisarError(response) */
    if (!response.ok) {
      let error = await response.json();
      throw error.messages;
    }
    return response.json();
  }

  async altaTrabajo(id) {
    const response = await fetch(API_PROVEEDORES_SERVICIOS.TRABAJO_ALTA(id), {
      method: "patch",
      headers: { Authorization: token },
    });
    /* revisarError(response) */
    if (!response.ok) {
      let error = await response.json();
      throw error.messages;
    }
    return response.json();
  }

  async listarTrabajosPorProveedor(id) {
    const response = await fetch(
      API_PROVEEDORES_SERVICIOS.TRABAJO_BY_PROVEEDOR(id)
    );
    /* revisarError(response) */
    if (!response.ok) {
      let error = await response.json();
      throw error.messages;
    }
    return response.json();
  }
}

export default new TrabajoServicio();
