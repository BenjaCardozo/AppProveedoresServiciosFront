import { API_PROVEEDORES_SERVICIOS } from "../constants/Api.constant";

class ModeradorServicio {
  async crearModerador(data, token) {
    const response = await fetch(API_PROVEEDORES_SERVICIOS.MODERADOR(), {
      method: "post",
      headers: { Authorization: `Bearer ${token}` },
      body: JSON.stringify(data),
    });
    return response.json();
  }

  async listarModeradores() {
    const response = await fetch(API_PROVEEDORES_SERVICIOS.MODERADOR());
    return response.json();
  }

  async actualizarModerador(data, token, id) {
    const response = await fetch(
      API_PROVEEDORES_SERVICIOS.MODERADOR_BY_ID(id),
      {
        method: "put",
        headers: { Authorization: `Bearer ${token}` },
        body: JSON.stringify(data),
      }
    );
    return response.json();
  }

  async buscarModerador(id) {
    const response = await fetch(API_PROVEEDORES_SERVICIOS.MODERADOR_BY_ID(id));
    return response.json();
  }

  async eliminarModerador(id, token) {
    const response = await fetch(
      API_PROVEEDORES_SERVICIOS.MODERADOR_BY_ID(id),
      {
        method: "delete",
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.json();
  }

  async bajaModerador(id, token) {
    const response = await fetch(API_PROVEEDORES_SERVICIOS.MODERADOR_BAJA(id), {
      method: "patch",
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.json();
  }

  async altaModerador(id, token) {
    const response = await fetch(API_PROVEEDORES_SERVICIOS.MODERADOR_ALTA(id), {
      method: "patch",
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.json();
  }
}

export default new ModeradorServicio();
