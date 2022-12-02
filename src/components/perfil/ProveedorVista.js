import "./ProveedorVista.css";
import imagenes from "../../img/imagenes";
import { FotoPerfil } from "./FotoPerfil";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import React from "react";
import ProveedorServicio from "../../services/Proveedor";

export function ProveedorVista() {

  const [proveedor, setProveedor] = useState([]);

  useEffect(() => {
    ProveedorServicio.buscarProveedor(2)
      .then((data) => setProveedor(data))
      .catch((error) => console.log(error));
  }, []);
console.log(proveedor);
  return (
    <div class="vista">
      <div>
        <FotoPerfil props={proveedor} />
        <div className="solicitar">
          <div className="contacto">
            <div className="nombre">
              <h4 className="profesion">{proveedor.rubro}</h4>
            </div>
            <h6 className="lugar">{proveedor.barrio}</h6>
            <h6 className="dato">
              <strong>Contacto</strong>
            </h6>
            <h6 className="correo dato">{proveedor.correo}</h6>
            <h6 className="celular dato">{proveedor.contacto}</h6>
          </div>
        </div>
        <div className="solicitar">
          <Link to={"/contacto-proveedor"}>
            <button type="button" class="btn btn-primary btn-sm">
              Solicitar Trabajo
            </button>
          </Link>
        </div>
      </div>

      <AsidePerfil />
    </div>
  );
}

var puntajeFinal = Math.round(4.0);
var estrellas = "⭐";
for (let i = 1; i < puntajeFinal; i++) {
  estrellas += "⭐";
}

export function AsidePerfil() {
  return (
    <>
      <div className="aside">
        <div className="servicios">

            <h4><strong>Servicios</strong></h4>
            <div className="otros">
                <AgrandarImagen img={imagenes.imgGas1} num="1"/>
                <AgrandarImagen img={imagenes.imgGas2} num="2"/>
                <AgrandarImagen img={imagenes.imgGas3} num="3"/>
            </div>
        </div>

        <div className="calificaciones">
          <h4>
            <strong>Calificaciones y opiniones</strong>
          </h4>
          <div className="calificacion">
            <div className="puntaje">
              <h1 className="puntajeFinal">{puntajeFinal}</h1>
              <div className="estrellasFinal">{estrellas}</div>
            </div>

            <div className="progresoGeneral">
              <BarraProgreso num="5"/>
              <BarraProgreso num="4"/>
              <BarraProgreso num="3"/>
              <BarraProgreso num="2"/>
              <BarraProgreso num="1"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function BarraProgreso(props){
    return<>
        <div id={`num${props.num}`} className="barra">
                <h6 className="punto">{props.num}</h6>
                <div class="progress">
                  <div
                    class={`progress-bar w-${props.num}`}
                    role="progressbar"
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
        </div>
    </>
}

const AgrandarImagen = (props) => {
    console.log(props);
    return <>
            <button type="button" class="agrandar" data-bs-toggle="modal" data-bs-target={`#exampleModal${props.num}`}>
                <div className="oficioGas"><img className="gas" src={props.img} alt={`imagen${props.num}`}></img></div>
                </button>
                <div class="modal fade" id={`exampleModal${props.num}`} tabindex="-1" aria-labelledby={`exampleModalLabel${props.num}`} aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="">
                                <img className="gasModal" src={props.img} alt={`imagen${props.num}`}></img>
                            </div>
                        </div>
                    </div>
                </div>
        </>
}

/* 
return ();
*/
