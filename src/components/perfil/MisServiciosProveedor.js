import { FotoPerfil } from "./FotoPerfil";
import "./MisServiciosProveedor.css";
import { AsidePerfil } from "./ProveedorVista";



export function MisServiciosProveedor(){
    
        
    return<>
        <div className="serviciosProveedor">
            <div>
                <FotoPerfil/>
            </div>
            <div>
                <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
                    <BotonVentana num1="1" num2="2" num3="3" tittle="Mis trabajos" />
                    <BotonVentana num1="2" num2="1" num3="3" tittle="Solicitudes" />
                    <BotonVentana num1="3" num2="1" num3="2" tittle="Mi Perfil" />
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

export function BotonVentana(props){
    const pulsar = (uno, dos, tres)=>{
        let ventana3 = document.getElementById(`ventana${uno}`);
        ventana3.setAttribute("class","display-block");
        document.getElementById(`ventana${dos}`).setAttribute("class","display-none");
        document.getElementById(`ventana${tres}`).setAttribute("class","display-none");
    }
    return<>
        <div className="botonVentanas" onClick={()=>{pulsar(props.num1, props.num2, props.num3)}}>
                <input type="radio" class="btn-check" name="btnradio" id={`btnradio${props.num1}`} autocomplete="off"></input>
                <label class="btn btn-outline-primary" for={`btnradio${props.num1}`}>{props.tittle}</label>
        </div>
    </>
}


