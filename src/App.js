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
import PerfilCliente from './pages/PerfilCliente';
import  PerfilProveedor  from "./pages/PerfilProveedor";
import { MisServiciosProveedor } from "./components/perfil/MisServiciosProveedor";


export function App() {
  return (
    <PerfilCliente/>
  );
}

export default App;
