import React from "react";
import { Link } from "react-router-dom";
import { MisServicios } from "./MisServicios";
import ClienteVista from "./ClienteVista";

const ServiciosCliente = () => {
  return (
    <>
      <div>
        <ClienteVista />
      </div>
      <div>
        <Link to={'/mi-perfil'}>
          <h6>Perfil</h6>
        </Link>
        <>
          <MisServicios />
        </>
      </div>
    </>
  );
};

export default ServiciosCliente;
