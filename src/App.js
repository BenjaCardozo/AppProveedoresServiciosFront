import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Footer from "./Footer";
import NavBar from "./NavBar";
import PaginaNoEncontrada from "./pages/PaginaNoEncontrada";
import Principal from "./pages/Principal";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Registro from "./components/registro/Registro";
import Seleccionar from "./pages/Seleccionar";
import LogIn from "./pages/LogIn";
import AdministrarProveedores from "./pages/AdministrarProveedores";
import ContactoConElProveedor from "./components/perfil/ContactoConElProveedor";
import ServiciosCliente from "./components/perfil/ServiciosCliente";
import { ServiciosClienteArreglado } from "./components/perfil/ServiciosClienteArreglado";


export function App() {
  return (
    <BrowserRouter>
      <ServiciosClienteArreglado/>
    </BrowserRouter>
  );
}

export default App;
