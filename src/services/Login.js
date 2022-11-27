import { API_PROVEEDORES_SERVICIOS } from "./../constants/Api.constant";

class LoginServicio {
  async login(data) {
    const response = await fetch(API_PROVEEDORES_SERVICIOS.LOGIN(), {
      method: "post",
      body: JSON.stringify(data),
    });
    return response.json();
  }
}

export default new LoginServicio();
