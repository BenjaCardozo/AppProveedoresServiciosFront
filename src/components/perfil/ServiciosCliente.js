import React from "react";
import { Perfil } from "./../navbar/Perfil";
import { Link } from "react-router-dom";

const ServiciosCliente = () => {
  return (
    <>
      <div>{/* Perfil Usuario */}</div>
      <div>
        <Link>
          <h6>Perfil</h6>
        </Link>
        <>
          <h6>Mis Servicios</h6>
        </>
      </div>
    </>
  );
};

export default ServiciosCliente;
