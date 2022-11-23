export const API_PROVEEDORES = {
  URL: "https://localhost:8080/",

  PROVEEDORES: function () {
    return `${this.URL}/proveedor`
  },

  PROVEEDOR_BY_ID: function (id) {
    return `${this.URL}/proveedor/${id}`
  }
}