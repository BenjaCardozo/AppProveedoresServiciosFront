import { API_PROVEEDORES_SERVICIOS } from "../constants/Api.constant";

/* async function revisarError(response) {
  if (!response.ok) {
    let error = await response.json();
    throw error.messages;
  }
} */
let token = null;

class SolicitudTrabajoServicio {
  setToken = (newToken) => {
    token = `Bearer ${newToken}`;
  };

  async crearSolicitudTrabajo(data) {
    const response = await fetch(
      API_PROVEEDORES_SERVICIOS.SOLICITUD_TRABAJO(),
      {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify(data),
      }
    );
    /* revisarError(response) */
    if (!response.ok) {
      let error = await response.json();
      throw error.messages;
    }
    return response.json();
  }

  async listarSolicitudesTrabajo() {
    const response = await fetch(API_PROVEEDORES_SERVICIOS.SOLICITUD_TRABAJO());
    /* revisarError(response) */
    if (!response.ok) {
      let error = await response.json();
      throw error.messages;
    }
    return response.json();
  }

  /* async terminarSolicitudTrabajo(data, token, id) {
    const response = await fetch(API_PROVEEDORES_SERVICIOS.SOLICITUD_TRABAJO_BY_ID4(id), {
      method: "put",
      headers: { Authorization: `Bearer ${token}` },
    });
    revisarError(response)
    return response.json();
  } */

  async buscarSolicitudTrabajo(id) {
    const response = await fetch(
      API_PROVEEDORES_SERVICIOS.SOLICITUD_TRABAJO_BY_ID(id)
    );
    /* revisarError(response) */
    if (!response.ok) {
      let error = await response.json();
      throw error.messages;
    }
    return response.json();
  }

  async eliminarTrabajo(id) {
    const response = await fetch(
      API_PROVEEDORES_SERVICIOS.SOLICITUD_TRABAJO_BY_ID(id),
      {
        method: "delete",
        headers: { Authorization: token },
      }
    );
    /* revisarError(response) */
    if (!response.ok) {
      let error = await response.json();
      throw error.messages;
    }
    return response.json();
  }

  /* async bajaTrabajo(id, token) {
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
  } */

  async listarSolicitudesTrabajoPorProveedor(id) {
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

export default new SolicitudTrabajoServicio();
