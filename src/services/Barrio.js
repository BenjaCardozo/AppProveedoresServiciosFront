import { API_PROVEEDORES_SERVICIOS } from "../constants/Api.constant";

async function revisarError(response) {
  if (!response.ok) {
    let error = await response.json();
    throw error.messages;
  }
}

class BarrioServicio {
  async listarBarrios() {
    const response = await fetch(API_PROVEEDORES_SERVICIOS.BARRIO());
    revisarError(response);
    return response.json();
  }
}

export default new BarrioServicio();
