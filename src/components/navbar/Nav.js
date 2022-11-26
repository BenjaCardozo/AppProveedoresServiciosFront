import { Perfil } from "./Perfil";
import { Buscador } from "./Buscador";
import "./Nav.css";
import { Logo } from "./Logo";

export function Nav() {
  return (
    <div>
      <nav id="navegador">
        <Logo />
        <Buscador />
        <Perfil />
      </nav>
    </div>
  );
}

export default Nav;