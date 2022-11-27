import React from "react";
import { useEffect, useState } from "react";
import ProveedorServicio from "./../../../services/Proveedor.js"
import { Card } from "./Card";

export const Cards = () => {
  const [proveedores, crearProveedor] = useState([]);

  useEffect(() => {
    ProveedorServicio.listarProveedores()
      .then((data) => crearProveedor(data.results))
      .catch((error) => console.log(error));
  }, []);

  console.log(proveedores);

  const cardList = proveedores.map((p) => <Card proveedor={p} key={p.id} />);

  return (
    <div className="album py-5 bg-light">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {cardList}
        </div>
      </div>
    </div>
  );
};
