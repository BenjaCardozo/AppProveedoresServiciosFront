import { API_PROVEEDORES_SERVICIOS } from "../constants/Api.constant";

/* async function revisarError(response) {
  if (!response.ok) {
    let error = await response.json();
    throw error.messages;
  }
} */
let token = null;

class FeedbackServicio {
  setToken = (newToken) => {
    token = `Bearer ${newToken}`;
  };

  async crearFeedback(data) {
    const response = await fetch(API_PROVEEDORES_SERVICIOS.FEEDBACK(), {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(data),
    });
    /* revisarError(response); */
    if (!response.ok) {
      let error = await response.json();
      throw error.messages;
    }
    return response.json();
  }

  async listarFeedbacks() {
    const response = await fetch(API_PROVEEDORES_SERVICIOS.FEEDBACK());
    /* revisarError(response); */
    if (!response.ok) {
      let error = await response.json();
      throw error.messages;
    }
    return response.json();
  }

  async actualizarFeedback(data, id) {
    const response = await fetch(API_PROVEEDORES_SERVICIOS.FEEDBACK_BY_ID(id), {
      method: "put",
      headers: { Authorization: token },
      body: JSON.stringify(data),
    });
    /* revisarError(response); */
    if (!response.ok) {
      let error = await response.json();
      throw error.messages;
    }
    return response.json();
  }

  async buscarFeedback(id) {
    const response = await fetch(API_PROVEEDORES_SERVICIOS.FEEDBACK_BY_ID(id));
    /* revisarError(response); */
    if (!response.ok) {
      let error = await response.json();
      throw error.messages;
    }
    return response.json();
  }

  async eliminarFeedback(id) {
    const response = await fetch(API_PROVEEDORES_SERVICIOS.FEEDBACK_BY_ID(id), {
      method: "delete",
      headers: { Authorization: token },
    });
    /* revisarError(response); */
    if (!response.ok) {
      let error = await response.json();
      throw error.messages;
    }
    return response.json();
  }
}

export default new FeedbackServicio();
