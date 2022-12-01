import "./ServiciosClienteArreglado.css";
import {MisServicios} from "./MisServicios";
import { FotoPerfil } from "./FotoPerfil";
import Nav from "../navbar/Nav";

export function ServiciosClienteArreglado(){
    return<>
        <Nav/>
        <div className="servicioCliente">
            <div>
            <FotoPerfil/>
            </div>
            
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
                <MisServicios/>
            </div>
            <hr></hr>
            
        </div>
    </>
}