import "./ServiciosClienteArreglado.css";
import {MisServicios} from "./MisServicios";
import { FotoPerfil } from "./FotoPerfil";
import React from "react";
import { Link } from "react-router-dom";

const ServiciosCliente = () => {
  return (
    <>
      <div className="servicioCliente">
            <div>
            <FotoPerfil/>
            </div>
            
            <div className="historialServicios">
                <div class="top">
                    <div className="top-div">
                        <Link to={'/mi-perfil'}>
                        <button>Editar perfil</button>
                        </Link>
                    </div>
                    <div className="top-div">
                        <button className="historial">Mis servicios</button>
                    </div>
                </div>
                <hr></hr>
                <MisServicios/>
                <MisServicios/>
            </div>
            <hr></hr>
            
        </div>
    </>
  );
};

export default ServiciosCliente;
