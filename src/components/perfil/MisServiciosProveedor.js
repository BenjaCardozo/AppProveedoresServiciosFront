import { FotoPerfil } from "./FotoPerfil";
import "./MisServiciosProveedor.css";
import { AsidePerfil } from "./ProveedorVista";



export function MisServiciosProveedor(){
    const pulsar1 = ()=>{
        let ventana3 = document.getElementById("ventana1");
        ventana3.setAttribute("class","display-block");
        document.getElementById("ventana2").setAttribute("class","display-none");
        document.getElementById("ventana3").setAttribute("class","display-none");
    }

    const pulsar2 = ()=>{
        let ventana3 = document.getElementById("ventana2");
        ventana3.setAttribute("class","display-block");
        document.getElementById("ventana1").setAttribute("class","display-none");
        document.getElementById("ventana3").setAttribute("class","display-none");
    }
    const pulsar3 = ()=>{
        let ventana3 = document.getElementById("ventana3");
        ventana3.setAttribute("class","display-block");
        document.getElementById("ventana1").setAttribute("class","display-none");
        document.getElementById("ventana2").setAttribute("class","display-none");
    }
        
    return<>
        <div className="serviciosProveedor">
            <div>
                <FotoPerfil/>
            </div>
            <div>
                <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                    <div className="botonVentanas" onClick={()=>{pulsar1()}}>
                        <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off"></input>
                        <label class="btn btn-outline-primary" for="btnradio1">Mis trabajos</label>
                    </div>
                    <div className="botonVentanas" onClick={()=>{pulsar2()}}>
                        <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off"></input>
                        <label class="btn btn-outline-primary" for="btnradio2">Solicitudes</label>
                    </div>
                    <div className="botonVentanas" onClick={()=>{pulsar3()}}>
                        <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off"></input>
                        <label class="btn btn-outline-primary" for="btnradio3">Mi perfil</label>
                    </div>
                    
                </div>
                <hr></hr>
                <div id="ventana1" className="display-none">
                </div>
                <div id="ventana2" className="display-none">
                </div>
                <div id="ventana3" className="display-none">
                    <AsidePerfil/>
                </div>
            </div> 
        </div>
    </>
}


