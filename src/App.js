import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Footer from "./Footer";
import NavBar from "./NavBar";
import PaginaNoEncontrada from "./pages/PaginaNoEncontrada";
import Principal from "./pages/Principal";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import RegistroProveedor from "./pages/RegistroProveedor";
import RegistroCliente from './pages/RegistroCliente';
import Seleccionar from "./components/registro/Seleccionar";
import LogIn from "./pages/LogIn"


export function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Principal/>} />
        <Route path="/registro" element={<Registro/>} />
        <Route path="/" element={<Principal />} />
        {/* <Route path="/registro" element={<Registro />} /> */}
        <Route path="/login" element={< LogIn />} />
        <Route path="/registro" element={<Seleccionar />} />
        <Route path="/registro/:rol" element={<RegistroProveedor />} />
        {/* <Route path="/registro/cliente" element={<RegistroCliente />} /> */}
        <Route path="*" element={<PaginaNoEncontrada />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
