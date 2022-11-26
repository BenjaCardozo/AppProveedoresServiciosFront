import { API_PROVEEDORES_SERVICIOS } from "../constants/Api.constant";

class BarrioServicio {
  async listarBarrios() {
    const response = await fetch(API_PROVEEDORES_SERVICIOS.BARRIO());
    return response.json();
  }
}

export default new BarrioServicio();
