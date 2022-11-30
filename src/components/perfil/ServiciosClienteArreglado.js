import "./ServiciosClienteArreglado.css";
import {MisServicios} from "./MisServicios";
import { FotoPerfil } from "./FotoPerfil";


export function ServiciosClienteArreglado(){
    return<>
        <div className="servicioCliente">
            <FotoPerfil/>
            <div className="historialServicios">
                <div class="top">
                    <div className="top-div">
                        <h6>Editar perfil</h6>
                    </div>
                    <div className="top-div">
                        <button className="historial">Mis servicios</button>
                    </div>
                </div>
                <hr></hr>
                <MisServicios/>
            </div>
            <hr></hr>
            
        </div>
    </>
}