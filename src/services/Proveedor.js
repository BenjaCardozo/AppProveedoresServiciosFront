import { API_PROVEEDORES_SERVICIOS } from "../constants/Api.constant";

class ProveedorServicio {
  async crearProveedor(data, token) {
    const response = await fetch(API_PROVEEDORES_SERVICIOS.PROVEEDOR(), {
      method: "post",
      headers: { Authorization: `Bearer ${token}` },
      body: data,
    });
    return response.json();
  }

  async listarProveedores() {
    const response = await fetch(API_PROVEEDORES_SERVICIOS.PROVEEDOR());
    return response.json();
  }

  async actualizarProveedor(data, token, id) {
    const response = await fetch(
      API_PROVEEDORES_SERVICIOS.PROVEEDOR_BY_ID(id),
      {
        method: "put",
        headers: { Authorization: `Bearer ${token}` },
        body: data,
      }
    );
    return response.json();
  }

  async buscarProveedor(id) {
    const response = await fetch(API_PROVEEDORES_SERVICIOS.PROVEEDOR_BY_ID(id));
    return response.json();
  }

  async eliminarProveedor(id, token) {
    const response = await fetch(
      API_PROVEEDORES_SERVICIOS.PROVEEDOR_BY_ID(id),
      {
        method: "delete",
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.json();
  }

  async bajaProveedor(id, token) {
    const response = await fetch(API_PROVEEDORES_SERVICIOS.PROVEEDOR_BAJA(id), {
      method: "patch",
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.json();
  }

  async altaProveedor(id, token) {
    const response = await fetch(API_PROVEEDORES_SERVICIOS.PROVEEDOR_ALTA(id), {
      method: "patch",
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.json();
  }

  async buscarProveedoresPorBarrio(barrio) {
    const response = await fetch(
      API_PROVEEDORES_SERVICIOS.PROVEEDOR_BY_BARRIO(barrio)
    );
    return response.json();
  }

  async actualizarPromedioFeedback(id) {
    const response = await fetch(
      API_PROVEEDORES_SERVICIOS.PROVEEDOR_PROMEDIO(id),
      {
        method: "patch",
      }
    );
    return response.json();
  }
}

export default new ProveedorServicio();
