import { API_PROVEEDORES_SERVICIOS } from "../constants/Api.constant";

/* async function revisarError(response) {
  if (!response.ok) {
    let error = await response.json();
    throw error.messages;
  }
} */
let token = null;

class AdminServicio {
  setToken = (newToken) => {
    token = `Bearer ${newToken}`;
  };

  async actualizarAdmin(data, id) {
    const response = await fetch(API_PROVEEDORES_SERVICIOS.ADMIN_BY_ID(id), {
      method: "put",
      headers: { Authorization: token },
      body: data,
    });
    if (!response.ok) {
      let error = await response.json();
      throw error.messages;
    }
    return response.json();
  }

  async buscarAdmin(id) {
    const response = await fetch(API_PROVEEDORES_SERVICIOS.ADMIN_BY_ID(id), {
      headers: { Authorization: token },
    });
    if (!response.ok) {
      let error = await response.json();
      throw error.messages;
    }
    return response.json();
  }
}

export default new AdminServicio();
