import React from "react";
import { FotoPerfil } from "./FotoPerfil";

const ClienteVista = () => {
  return (
    <>
      <div class="vista">
        <div>
        <FotoPerfil />
          <div className="solicitar">
            <div className="contacto">
              <div className="nombre">
                <h4 className="profesion">Gasista</h4>
              </div>
              <h6 className="lugar">Córdoba, Argentina</h6>
              <h6 className="dato">
                <strong>Contacto</strong>
              </h6>
              <h6 className="correo dato">garnicadavid1@gmail.com</h6>
              <h6 className="celular dato">1166920277</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClienteVista;
