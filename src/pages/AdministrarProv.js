import React, { useState, useEffect } from "react";
import MaterialTable from "@mui/material/Table";

const AdministrarProveedores = () => {
  const [proveedores, setProveedores] = useState([]);

  useEffect(() => {
    Proveedor.listarProveedores()
      .then((data) => setProveedores(data.proveedores))
      .catch((error) => console.log(error));
  }, []);

  console.table(proveedores);

  const columnas = [
    { title: "ID", field: "id" },
    { title: "Alta", field: "alta" },
    { title: "Nombre", field: "nombre" },
    { title: "Barrio", field: "barrio" },
    { title: "Contacto", field: "contacto" },
    { title: "Descripcion", field: "descripcion" },
    { title: "Disponibilidad", field: "disponibilidad" },
    { title: "Rubro", field: "rubro" },
    { title: "Calificación", field: "promedio_feedback", type: "numeric" },
  ];

  return (
    <div>
      <MaterialTable
        columns={columnas}
        data={proveedores}
        title="Proveedores"
        actions={[
          {
            icon: "edit",
            tooltip: "Editar",
            onClick: (event, rowData) =>
              alert("Editar no disponible je " + rowData.id),
          },
          {
            icon: "delete",
            tooltip: "Eliminar",
            onClick: (event, rowData) =>
              alert("Eliminar no disponible je " + rowData.id),
          },
        ]}
        options={{ 
            actionsColumnIndex: -1 
        }}
      />
    </div>
  );
};
export default AdministrarProveedores;
