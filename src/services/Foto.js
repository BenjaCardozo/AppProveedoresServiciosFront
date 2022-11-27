import { API_PROVEEDORES_SERVICIOS } from "./../constants/Api.constant";

class FotoServicio {
  async buscarFotoUsuario(id) {
    const response = await fetch(API_PROVEEDORES_SERVICIOS.FOTO(id));
    return response.json();
  }
}

export default new FotoServicio();
