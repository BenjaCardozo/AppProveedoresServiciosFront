import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Footer from "./Footer";
import NavBar from "./NavBar";
import PaginaNoEncontrada from "./pages/PaginaNoEncontrada";
import Principal from './pages/Principal';

export function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={ <Principal /> } />
        <Route path="/registro" element={<div>About</div>} />
        <Route path='*' element={ <PaginaNoEncontrada /> } />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
