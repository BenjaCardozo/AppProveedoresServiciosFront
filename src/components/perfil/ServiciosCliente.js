import "./ServiciosClienteArreglado.css";
import { MisServicios } from "./MisServicios";
import { FotoPerfil } from "./FotoPerfil";
import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Cliente from "../../services/Cliente";

const ServiciosCliente = () => {
  const [servicios, setServicios] = useState([]);
  useEffect(() => {
    ServiciosCliente.buscarServicios()
      .then((data) => setServicios(data))
      .catch((error) => console.log(error));
  }, []);
  console.log(servicios);

  return (
    <>
      <div className="servicioCliente">
        <div>
          <FotoPerfil props={Cliente}/>
        </div>

        <div className="historialServicios">
          <div class="top">
            <div className="top-div">
              <Link to={"/mi-perfil"}>
                <button>Editar perfil</button>
              </Link>
            </div>
            <div className="top-div">
              <button className="historial">Mis servicios</button>
            </div>
          </div>
          <hr></hr>
          <MisServicios />
          <MisServicios />
        </div>
        <hr></hr>
      </div>
    </>
  );
};

export default ServiciosCliente;
