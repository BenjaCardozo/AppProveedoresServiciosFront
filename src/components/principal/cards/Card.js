import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Card.css";
import FotoServicio from "./../../../services/Foto";

export const Card = ({ proveedor }) => {
  //const myImage = document.querySelector("#img-card");

  const [foto, setFoto] = useState("");

  FotoServicio.buscarFotoUsuario(proveedor.id)
    .then((f) => {
      setFoto(URL.createObjectURL(f))
    })
    .catch((error) => {
      setFoto("default.jpg")
      console.log(error);
    });

  var estrellas = "⭐";
  for (let i = 1; i < proveedor.promedioFeedback; i++) {
    estrellas = estrellas + "⭐";
  }

  return (
    <div>
      <div className="col col-auto">
        <div className="card shadow-sm">
          <img
            id="img-card"
            className="card-img-top img-fluid"
            src={foto}
            width="100%"
            align-self="stretch"
            alt="fotos del servicio"
          />
          <div className="card-body">
            <h6> {proveedor.nombre}</h6>
            {estrellas}
            <p className="card-text">{proveedor.descripcion}</p>

            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group d-grid gap-2">
                <button
                  id="btn-card"
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                >
                  <Link
                    // to={`/detail/${personaje.id}`}
                    className="nav-link px-2 text-secondary"
                  >
                    Contactar profesional
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
