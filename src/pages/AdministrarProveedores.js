import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import Proveedor from "../services/Proveedor.js";

const AdministrarProveedores = () => {
  const [session, setSession] = useState(null);
  const [loggedUserJSON, setLoggedUserJSON] = useState(null);

  useEffect(() => {
    setLoggedUserJSON(localStorage.getItem("tokenSession"));
    if (loggedUserJSON != null) {
      const user = JSON.parse(loggedUserJSON);
      setSession(user);
    }
  }, [loggedUserJSON]);

  const handleOnClick = (event) => {
    event.preventDefault()
    Proveedor.setToken(session.token);
    Proveedor.eliminarProveedor(event.target.id)
    alert("Eliminado correctamente. Actualizar")
  };

  const [proveedores, setProveedores] = useState([]);

  useEffect(() => {
    Proveedor.listarProveedores()
      .then((data) => setProveedores(data.proveedores))
      .catch((error) => console.log(error));
  }, []);

  //console.table(proveedores);

  const columnas = [
    { name: "ID", selector: "id", sortable: true },
    { name: "Nombre", selector: "nombre", sortable: true },
    { name: "Barrio", selector: "barrio", sortable: true },
    { name: "Contacto", selector: "contacto" },
    { name: "Descripcion", selector: "descripcion" },
    { name: "Disponibilidad", selector: "disponibilidad", sortable: true },
    { name: "Rubro", selector: "rubro", sortable: true },
    {
      name: "Eliminar",
      cell: (row) => (
        <button id={row.id} className="btn btn-danger" onClick={handleOnClick}>
          Eliminar
        </button>
      ),
    },
  ];

  const paginacionOpciones = {
    rowsPerPageText: "Filas por página",
    rangeSeparatorText: "de",
    selectAllRowsItem: true,
    selectAllRowsItemText: "Todos",
  };

  return (
    <div className="table-responsive">
      <DataTable
        columns={columnas}
        data={proveedores}
        title="Proveedores"
        pagination
        paginationComponentOptions={paginacionOpciones}
        fixedHeader
        fixedHeaderScrolHeight="600px"
      />
    </div>
  );
};
export default AdministrarProveedores;
