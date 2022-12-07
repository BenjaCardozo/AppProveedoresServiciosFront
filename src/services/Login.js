import { API_PROVEEDORES_SERVICIOS } from "./../constants/Api.constant";

async function revisarError(response) {
  if (!response.ok) {
    let error = await response.json();
    throw error.messages;
  }
}

class LoginServicio {
  async login(data) {
    const response = await fetch(API_PROVEEDORES_SERVICIOS.LOGIN(), {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    revisarError(response);
    return response.json();
  }
}

export default new LoginServicio();
