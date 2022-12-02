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
    <>
      <div >
        <div >
          <div className="card">
            {cardList}
          </div>
        </div>
      </div>
    </>
  );
};
