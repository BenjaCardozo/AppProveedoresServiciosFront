import { API_PROVEEDORES_SERVICIOS } from "../constants/Api.constant";

async function revisarError(response) {
  if (!response.ok) {
    let error = await response.json();
    throw error.messages;
  }
}

class FotoProveedorServicio {
  async crearFotoProveedor(data) {
    const response = await fetch(API_PROVEEDORES_SERVICIOS.FOTO_PROVEEDOR(), {
      method: "post",
      body: data,
    });
    revisarError(response);
    return response.json();
  }

  async actualizarFotoProveedor(data,id) {
    const response = await fetch(API_PROVEEDORES_SERVICIOS.FOTO_PROVEEDOR_BY_ID(id), {
      method: "put",
      body: data,
    });
    revisarError(response);
    return response.json();
  }

  async listarFotosProveedorPorProveedor(id) {
    const response = await fetch(API_PROVEEDORES_SERVICIOS.FOTO_PROVEEDOR_BY_PROVEEDOR(id));
    revisarError(response)
    return response.json();
  }
}

export default new FotoProveedorServicio();
