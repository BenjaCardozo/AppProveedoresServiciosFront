import React from "react";
import { UseFetch } from "../UseFetch"; // FALTA CONEXIÓN
import "./Card.css";

export const Card = ({ url }) => {
  const estado = UseFetch(url);
  const { cargando, data } = estado;

  return (
    <div>
      {cargando ? (
        <h1>Cargando</h1>
      ) : (
        <div class="card" style="width: 18rem;">
          <img src="..." class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
