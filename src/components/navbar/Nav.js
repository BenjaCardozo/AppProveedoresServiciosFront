import { Perfil } from "./Perfil";
import { Buscador } from "./Buscador";
import "./Nav.css";
import { Logo } from "./Logo";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LogIn from "./../../pages/LogIn";

export function Nav() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    const loggedUserJSON = localStorage.getItem("loggedAppUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setSession(user);
    }
  }, []);

  return (
    <div>
      <nav id="navegador">
        <Logo />
        <Buscador />
        {session ? (
          <Perfil setSession={setSession}/>
        ) : (
          <div>
            <Link to={`/login`}>
              <button type="button">Iniciar Sección</button>
            </Link>
            <Link to={`/registro`}>
              <button type="button">Registrate</button>
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
}

export default Nav;
