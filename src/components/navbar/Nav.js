import { Perfil } from './Perfil';
import { Buscador } from "./Buscador";
import './Nav.css';

export function Nav(){
    return  <nav id="navegador">
                <Buscador/>
                <Perfil/>
            </nav>
}