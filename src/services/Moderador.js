import { API_PROVEEDORES_SERVICIOS } from "../constants/Api.constant";

/* async function revisarError(response) {
  if (!response.ok) {
    let error = await response.json();
    throw error.messages;
  }
} */
let token = null;
class ModeradorServicio {
  setToken = (newToken) => {
    token = `Bearer ${newToken}`;
  };

  async crearModerador(data) {
    const response = await fetch(API_PROVEEDORES_SERVICIOS.MODERADOR(), {
      method: "post",
      headers: { Authorization: token },
      body: data,
    });
    if (!response.ok) {
      let error = await response.json();
      throw error.messages;
    }
    return response.json();
  }

  async listarModeradores() {
    const response = await fetch(API_PROVEEDORES_SERVICIOS.MODERADOR());
    if (!response.ok) {
      let error = await response.json();
      throw error.messages;
    }
    return response.json();
  }

  async actualizarModerador(data, id) {
    const response = await fetch(
      API_PROVEEDORES_SERVICIOS.MODERADOR_BY_ID(id),
      {
        method: "put",
        headers: { Authorization: token },
        body: data,
      }
    );
    if (!response.ok) {
      let error = await response.json();
      throw error.messages;
    }
    return response.json();
  }

  async buscarModerador(id) {
    const response = await fetch(API_PROVEEDORES_SERVICIOS.MODERADOR_BY_ID(id));
    if (!response.ok) {
      let error = await response.json();
      throw error.messages;
    }
    return response.json();
  }

  async eliminarModerador(id) {
    const response = await fetch(
      API_PROVEEDORES_SERVICIOS.MODERADOR_BY_ID(id),
      {
        method: "delete",
        headers: { Authorization: token },
      }
    );
    if (!response.ok) {
      let error = await response.json();
      throw error.messages;
    }
    return response.json();
  }

  async bajaModerador(id) {
    const response = await fetch(API_PROVEEDORES_SERVICIOS.MODERADOR_BAJA(id), {
      method: "patch",
      headers: { Authorization: token },
    });
    if (!response.ok) {
      let error = await response.json();
      throw error.messages;
    }
    return response.json();
  }

  async altaModerador(id) {
    const response = await fetch(API_PROVEEDORES_SERVICIOS.MODERADOR_ALTA(id), {
      method: "patch",
      headers: { Authorization: token },
    });
    if (!response.ok) {
      let error = await response.json();
      throw error.messages;
    }
    return response.json();
  }
}

export default new ModeradorServicio();
