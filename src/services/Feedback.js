import { API_PROVEEDORES_SERVICIOS } from "../constants/Api.constant";

async function revisarError(response) {
  if (!response.ok) {
    let error = await response.json();
    throw error.messages;
  }
}

class FeedbackServicio {
  async crearFeedback(data, token) {
    const response = await fetch(API_PROVEEDORES_SERVICIOS.FEEDBACK(), {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    revisarError(response);
    return response.json();
  }

  async listarFeedbacks() {
    const response = await fetch(API_PROVEEDORES_SERVICIOS.FEEDBACK());
    revisarError(response);
    return response.json();
  }

  async actualizarFeedback(data, token, id) {
    const response = await fetch(API_PROVEEDORES_SERVICIOS.FEEDBACK_BY_ID(id), {
      method: "put",
      headers: { Authorization: `Bearer ${token}` },
      body: JSON.stringify(data),
    });
    revisarError(response);
    return response.json();
  }

  async buscarFeedback(id) {
    const response = await fetch(API_PROVEEDORES_SERVICIOS.FEEDBACK_BY_ID(id));
    revisarError(response);
    return response.json();
  }

  async eliminarFeedback(id, token) {
    const response = await fetch(API_PROVEEDORES_SERVICIOS.FEEDBACK_BY_ID(id), {
      method: "delete",
      headers: { Authorization: `Bearer ${token}` },
    });
    revisarError(response);
    return response.json();
  }
}

export default new FeedbackServicio();
