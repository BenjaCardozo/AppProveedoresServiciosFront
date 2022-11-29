import "./ProveedorVista.css";

import { FotoPerfil } from "./FotoPerfil";

export function ProveedorVista(){
    return<div class="vista">
        <div>
            <FotoPerfil/>
            <div className="solicitar">
                <div className="contacto">
                    <div className="nombre">
                        <h4 className="profesion">Gasista</h4>
                    </div>
                    <h6 className="lugar">Córdoba, Argentina</h6>
                    <h6 className="dato"><strong>Contacto</strong></h6>
                    <h6 className="correo dato">garnicadavid1@gmail.com</h6>
                    <h6 className="celular dato">1166920277</h6>
                </div>
            </div>
            <div className="solicitar">
                <a href="#">
                <button type="button" class="btn btn-primary btn-sm">Solicitar Trabajo</button>
                </a>
            </div>
            
        </div>
        
        <AsidePerfil/>
    </div>
}

var puntajeFinal = Math.round(4.0);
var estrellas = "⭐";
  for (let i = 1; i < puntajeFinal; i++) {
    estrellas += "⭐";
  }

export function AsidePerfil(){
    return<>
    <div className="aside">
        <div className="servicios">
            <h4><strong>Servicios</strong></h4>
            <div className="otros">
                <div className="oficio"></div>
                <div className="oficio"></div>
                <div className="oficio"></div>
            </div>
        </div>

        <div className="calificaciones">
            <h4><strong>Calificaciones y opiniones</strong></h4>
            <div className="calificacion">
                <div className="puntaje">
                    <h1 className="puntajeFinal">{puntajeFinal}</h1>
                    <div className="estrellasFinal">{estrellas}</div>
                </div>
            
                <div className="progresoGeneral">
                <div  id="num1" className="barra" >
                <h6 className="punto">5</h6>
                    <div class="progress">
                        <div class="progress-bar w-5" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div  id="num2" className="barra">
                <h6 className="punto">4</h6>
                    <div class="progress">
                        <div class="progress-bar w-4" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div  id="num3" className="barra">
                <h6 className="punto">3</h6>
                    <div class="progress">
                        <div class="progress-bar w-3" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div  id="num4" className="barra">
                <h6 className="punto">2</h6>
                    <div class="progress">
                        <div class="progress-bar w-2" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div  id="num5" className="barra">
                <h6 className="punto">1</h6>
                    <div class="progress">
                        <div class="progress-bar w-1" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
    </>
}