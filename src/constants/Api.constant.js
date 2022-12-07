export const API_PROVEEDORES_SERVICIOS = {
  URL: "http://localhost:8080",

  ADMIN_BY_ID: function (id) {
    return `${this.URL}/admin/${id}`;
  },

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

  SOLICITUD_TRABAJO: function () {
    return `${this.URL}/strabajo`;
  },
  SOLICITUD_TRABAJO_BY_ID: function (id) {
    return `${this.URL}/strabajo/${id}`;
  },
  SOLICITUD_TRABAJO_BY_PROVEEDOR: function (id) {
    return `${this.URL}/strabajo/${id}`;
  },

  TRABAJO: function () {
    return `${this.URL}/trabajo`;
  },
  TRABAJO_BY_ID: function (id) {
    return `${this.URL}/trabajo/${id}`;
  },
  TRABAJO_BY_PROVEEDOR: function (id) {
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
    //DEVUELVE LA FOTO DEL USUARIO POR SU ID
    return `${this.URL}/foto/usuario/${id}`;
  },
  FOTO_FPROVEEDOR: function (id) {
    //DEVULVE LA FOTO DEL SERVICIO PROVEEDOR
    return `${this.URL}/foto/fproveedor/${id}`;
  },

  FOTO_PROVEEDOR: function () {
    //CREA UN FOTO_PROVEEDOR
    return `${this.URL}/fproveedor`;
  },
  FOTO_PROVEEDOR_BY_ID: function (id) {
    //ACTUALIZAR FOTO_PROVEEDOR
    return `${this.URL}/fproveedor/${id}`;
  },
  FOTO_PROVEEDOR_BY_PROVEEDOR: function (id) {
    //LISTA LAS FOTOS_PROVEEDOR POR PROVEEDOR
    return `${this.URL}/fproveedor/proveedor/${id}`;
  },

  LOGIN: function () {
    return `${this.URL}/auth/login`;
  },
};
