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


export function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/login" element={< LogIn />} />
        <Route path="/registro" element={<Seleccionar />} />
        <Route path="/registro/:rol" element={<Registro />} />
        <Route path="/contacto-proveedor" element={<ContactoConElProveedor />}/>
        <Route path="/mis-servicios" element={ <ServiciosCliente/> } />
        <Route path="/mi-perfil" element={ <PerfilCliente/> } />
        <Route path="/perfil-proveedor" element={ <PerfilProveedor />} />
        <Route path="/administrar-proveedores" element={<AdministrarProveedores />} />
        <Route path="*" element={<PaginaNoEncontrada />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
