import { API_PROVEEDORES_SERVICIOS } from "../constants/Api.constant";

async function revisarError(response) {
  if (!response.ok) {
    let error = await response.json();
    throw error.messages;
  }
}

class TrabajoServicio {
  async crearTrabajo(data, token) {
    const response = await fetch(API_PROVEEDORES_SERVICIOS.TRABAJO(), {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    revisarError(response)
    return response.json();
  }

  async listarTrabajos() {
    const response = await fetch(API_PROVEEDORES_SERVICIOS.TRABAJO());
    revisarError(response)
    return response.json();
  }

  async terminarTrabajo(data, token, id) {
    const response = await fetch(API_PROVEEDORES_SERVICIOS.TRABAJO_BY_ID(id), {
      method: "put",
      headers: { Authorization: `Bearer ${token}` },
    });
    revisarError(response)
    return response.json();
  }

  async buscarTrabajo(id) {
    const response = await fetch(API_PROVEEDORES_SERVICIOS.TRABAJO_BY_ID(id));
    revisarError(response)
    return response.json();
  }

  async eliminarTrabajo(id, token) {
    const response = await fetch(API_PROVEEDORES_SERVICIOS.TRABAJO_BY_ID(id), {
      method: "delete",
      headers: { Authorization: `Bearer ${token}` },
    });
    revisarError(response)
    return response.json();
  }

  async bajaTrabajo(id, token) {
    const response = await fetch(API_PROVEEDORES_SERVICIOS.TRABAJO_BAJA(id), {
      method: "patch",
      headers: { Authorization: `Bearer ${token}` },
    });
    revisarError(response)
    return response.json();
  }

  async altaTrabajo(id, token) {
    const response = await fetch(API_PROVEEDORES_SERVICIOS.TRABAJO_ALTA(id), {
      method: "patch",
      headers: { Authorization: `Bearer ${token}` },
    });
    revisarError(response)
    return response.json();
  }

  async listarTrabajosPorProveedor(id) {
    const response = await fetch(
      API_PROVEEDORES_SERVICIOS.TRABAJO_BY_PROVEEDOR(id)
    );
    revisarError(response)
    return response.json();
  }
}

export default new TrabajoServicio();
