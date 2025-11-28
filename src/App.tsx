import Home from './pages/Home';
import {Routes, Route} from "react-router-dom";
import Register from './pages/Register';
import CategoriasReceitas from './pages/Categorias';
import Favoritos from './pages/Favoritos';
import Sobre from './pages/Sobre';
import Login from './pages/Login';

const App = () => {
  const [] = [];



  return (
   <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Categorias" element={<CategoriasReceitas/>} />
      <Route path="/Favoritos" element= {<Favoritos/>} />
      <Route path="/Sobre" element= {<Sobre/>} />
      <Route path="/Login" element= {<Login/>} />
    </Routes>
  );
};

export default App

