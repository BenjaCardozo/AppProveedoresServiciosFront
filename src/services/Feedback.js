import { API_PROVEEDORES_SERVICIOS } from "../constants/Api.constant";

class FeedbackServicio {
  async crearFeedback(data, token) {
    const response = await fetch(API_PROVEEDORES_SERVICIOS.FEEDBACK(), {
      method: "post",
      headers: { Authorization: `Bearer ${token}` },
      body: JSON.stringify(data),
    });
    return response.json();
  }

  async listarFeedbacks() {
    const response = await fetch(API_PROVEEDORES_SERVICIOS.FEEDBACK());
    return response.json();
  }

  async actualizarFeedback(data, token, id) {
    const response = await fetch(API_PROVEEDORES_SERVICIOS.FEEDBACK_BY_ID(id), {
      method: "put",
      headers: { Authorization: `Bearer ${token}` },
      body: JSON.stringify(data),
    });
    return response.json();
  }

  async buscarFeedback(id) {
    const response = await fetch(API_PROVEEDORES_SERVICIOS.FEEDBACK_BY_ID(id));
    return response.json();
  }

  async eliminarFeedback(id, token) {
    const response = await fetch(API_PROVEEDORES_SERVICIOS.FEEDBACK_BY_ID(id), {
      method: "delete",
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.json();
  }
}

export default new FeedbackServicio();
