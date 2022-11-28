import React from "react";
import { useEffect, useState } from "react";
import ProveedorServicio from "./../../../services/Proveedor.js";
import { Card } from "./Card";

export const Cards = () => {
  const [proveedores, setProveedores] = useState([]);

  useEffect(() => {
    ProveedorServicio.listarProveedores()
      .then((data) => setProveedores(data.proveedores))
      .catch((error) => console.log(error));
  }, []);

  console.log(proveedores);

  const cardList = proveedores.map((p) => <Card proveedor={p} key={p.id} />);

  return (
    <div>
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
            {cardList}
          </div>
        </div>
      </div>
    </div>
  );
};
