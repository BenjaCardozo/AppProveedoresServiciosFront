import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

export const Card = ({ proveedor }) => {
  return (
    <div>
      <div className="col">
        <div class="card" style={{ width: "18rem" }}>
          {/* <img
            width="100%"
            src={proveedor.foto}
            class="card-img-top"
            alt="fotos del servicio"
          /> */}
          <div class="card-body">
            <p class="card-text">{proveedor.descripcion}</p>

            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                >
                  {/* <Link
                  to={`/detail/${personaje.id}`}
                  className="nav-link px-2 text-secondary"
                >
                  Detalle
                </Link> */}
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
