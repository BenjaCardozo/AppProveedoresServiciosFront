import { API_PROVEEDORES_SERVICIOS } from "./../constants/Api.constant";

/* async function revisarError(response) {
  if (!response.ok) {
    let error = await response.json();
    throw error.messages;
  }
} */

class FotoServicio {
  async buscarFotoUsuario(id) {
    const response = await fetch(API_PROVEEDORES_SERVICIOS.FOTO(id));
    //revisarError(response);
    if (!response.ok) {
      let error = await response.json();
      throw error.messages;
    }
    return response.json();
  }

  async buscarFotoProveedorServicio(id) {
    const response = await fetch(API_PROVEEDORES_SERVICIOS.FOTO_FPROVEEDOR(id));
    //revisarError(response);
    if (!response.ok) {
      let error = await response.json();
      throw error.messages;
    }
    return response.json();
  }
}

export default new FotoServicio();
