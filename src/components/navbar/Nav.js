import { Perfil } from './Perfil';
import { Buscador } from "./Buscador";
import './Nav.css';
import { Logo } from './Logo';

export function Nav(){
    return  <>
    <nav id="navegador">
                <Logo/>
                <Buscador/>
                <Perfil/>
            </nav>
            </>
}