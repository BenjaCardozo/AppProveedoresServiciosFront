import { useState } from "react";
import { Link } from "react-router-dom";
import "./Seleccionar.css";

function Seleccionar() {
  const [rol, setRol] = useState("");
  return (
    <div>
      <div className="row align-items-md-stretch">
        <div className="col-md-4" onClick={ r=>{setRol("proveedor");}}>
          <Link to={`/registro/${rol}`} >
            <button className="h-100 p-5 text-bg-dark rounded-3" type="button">
              <h2>Quiero ofrecer mis servicios!</h2>
              <p>
                Registrate para que los clientes puedan contactarte de una
                manera más efectiva y segura.
              </p>
            </button>
          </Link>
        </div>
        <div className="col-md-4" onClick={ r=>{setRol("cliente");}}>
        <Link to={`/registro/${rol}`}>
            <button
              className="h-100 p-5 bg-light border rounded-3"
              type="button"
            >
              <h2>Quiero contratar un profesional!</h2>
              <p>
                Registrate para encontrarte con el profesional que necesitabas
                en tu barrio.
              </p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Seleccionar;
