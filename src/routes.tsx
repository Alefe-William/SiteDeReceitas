import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Categorias from "./pages/Categorias";
import Receita from "./pages/Receita";
import Login from "./pages/Login";
import RegisterUser from "./pages/Register";
import Favoritos from "./pages/Favoritos";
import Sobre from "./pages/Sobre";
import Contatos from "./pages/Contatos";

export default function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categorias" element={<Categorias />} />
      <Route path="/categorias/:nome" element={<Categorias />} />
      <Route path="/receita/:id" element={<Receita />} />
      <Route path="/login" element={<Login />} />
      <Route path= "/Register" element={<RegisterUser/>} />
      <Route path= "/Favoritos" element= {<Favoritos/>} />
      <Route path= "/Sobre" element= {<Sobre/>} />
      <Route path= "/Contatos" element= {<Contatos/>} />
    </Routes>
  );
}
