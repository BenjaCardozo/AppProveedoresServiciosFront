export const API_PROVEEDORES_SERVICIOS = {
  URL: "https://localhost:8080/",

  PROVEEDOR: function () {
    return `${this.URL}/proveedor`;
  },
  PROVEEDOR_BY_ID: function (id) {
    return `${this.URL}/proveedor/${id}`;
  },
  PROVEEDOR_BY_BARRIO: function (barrio) {
    return `${this.URL}/proveedor/buscar/${barrio}`;
  },
  PROVEEDOR_PROMEDIO: function (id) {
    return `${this.URL}/proveedor/promedio/${id}`;
  },
  PROVEEDOR_BAJA: function (id) {
    return `${this.URL}/proveedor/baja/${id}`;
  },
  PROVEEDOR_ALTA: function (id) {
    return `${this.URL}/proveedor/alta/${id}`;
  },

  CLIENTE: function () {
    return `${this.URL}/cliente`;
  },
  CLIENTE_BY_ID: function (id) {
    return `${this.URL}/cliente/${id}`;
  },
  CLIENTE_BY_BARRIO: function (barrio) {
    return `${this.URL}/cliente/buscar/${barrio}`;
  },
  CLIENTE_BAJA: function (id) {
    return `${this.URL}/cliente/baja/${id}`;
  },
  CLIENTE_ALTA: function (id) {
    return `${this.URL}/cliente/alta/${id}`;
  },

  MODERADOR: function () {
    return `${this.URL}/moderador`;
  },
  MODERADOR_BY_ID: function (id) {
    return `${this.URL}/moderador/${id}`;
  },
  MODERADOR_BAJA: function (id) {
    return `${this.URL}/moderador/baja/${id}`;
  },
  MODERADOR_ALTA: function (id) {
    return `${this.URL}/moderador/alta/${id}`;
  },

  TRABAJO: function () {
    return `${this.URL}/trabajo`;
  },
  TRABAJO_BY_ID: function (id) {
    return `${this.URL}/trabajo/${id}`;
  },
  TRABAJO_PROVEEDOR: function (id) {
    return `${this.URL}/trabajo/proveedor/${id}`;
  },
  TRABAJO_BAJA: function (id) {
    return `${this.URL}/trabajo/baja/${id}`;
  },
  TRABAJO_ALTA: function (id) {
    return `${this.URL}/trabajo/alta/${id}`;
  },

  FEEDBACK: function () {
    return `${this.URL}/feedback`;
  },
  FEEDBACK_BY_ID: function (id) {
    return `${this.URL}/feedback/${id}`;
  },

  BARRIO: function () {
    return `${this.URL}/barrio`;
  },

  FOTO: function (id) {
    return `${this.URL}/foto/usuario/${id}`;
  },

  LOGIN: function () {
    return `${this.URL}/auth/login`;
  },
};
