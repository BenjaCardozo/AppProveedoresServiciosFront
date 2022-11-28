import { React, useState, useEffect } from "react";
import Proveedor from "../services/Proveedor";

const Principal = () => {
  const [proveedor, setProveedor] = useState([]);
  useEffect(() => {
    Proveedor.listarProveedores()
      .then((response) => setProveedor(response.proveedor))
      .catch((error) => console.log(error));
  }, []);
  console.log(proveedor);
  return <div>Principal</div>;
};

export default Principal;
