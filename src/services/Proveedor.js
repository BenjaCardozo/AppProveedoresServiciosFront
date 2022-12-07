import { API_PROVEEDORES_SERVICIOS } from "../constants/Api.constant";

let token = null;

async function revisarError(response) {
  if (!response.ok) {
    let error = await response.json();
    throw error.messages;
  }
}

class ProveedorServicio {
  setToken = (newToken) => {
    token = `Bearer ${newToken}`;
  };

  async crearProveedor(data) {
    const response = await fetch(API_PROVEEDORES_SERVICIOS.PROVEEDOR(), {
      method: "post",
      body: data,
    });
    revisarError(response)
    return response.json();
  }

  async listarProveedores() {
    const response = await fetch(API_PROVEEDORES_SERVICIOS.PROVEEDOR());
    revisarError(response)
    return response.json();
  }

  async actualizarProveedor(data, id) {
    const response = await fetch(
      API_PROVEEDORES_SERVICIOS.PROVEEDOR_BY_ID(id),
      {
        method: "put",
        headers: { Authorization: token },
        body: data,
      }
    );
    revisarError(response)
    return response.json();
  }

  async buscarProveedor(id) {
    const response = await fetch(API_PROVEEDORES_SERVICIOS.PROVEEDOR_BY_ID(id));
    revisarError(response)
    return response.json();
  }

  async eliminarProveedor(id) {
    const response = await fetch(
      API_PROVEEDORES_SERVICIOS.PROVEEDOR_BY_ID(id),
      {
        method: "delete",
        headers: { Authorization: token },
      }
    );
    revisarError(response)
    return response.json();
  }

  async bajaProveedor(id) {
    const response = await fetch(API_PROVEEDORES_SERVICIOS.PROVEEDOR_BAJA(id), {
      method: "patch",
      headers: { Authorization: token },
    });
    revisarError(response)
    return response.json();
  }

  async altaProveedor(id) {
    const response = await fetch(API_PROVEEDORES_SERVICIOS.PROVEEDOR_ALTA(id), {
      method: "patch",
      headers: { Authorization: token },
    });
    revisarError(response)
    return response.json();
  }

  async buscarProveedoresPorBarrio(barrio) {
    const response = await fetch(
      API_PROVEEDORES_SERVICIOS.PROVEEDOR_BY_BARRIO(barrio)
    );
    revisarError(response)
    return response.json();
  }

  async actualizarPromedioFeedback(id) {
    const response = await fetch(
      API_PROVEEDORES_SERVICIOS.PROVEEDOR_PROMEDIO(id),
      {
        method: "patch",
      }
    );
    revisarError(response)
    return response.json();
  }
}

export default new ProveedorServicio();
