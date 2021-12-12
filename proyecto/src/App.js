import './App.css';
import { Home } from './Componentes/Home';
import { Ingresar } from './Componentes/Ingresar';
import { Registro } from './Componentes/Registro';
import { Contrasena } from './Componentes/Contraseña';
import { Contactenos } from './Componentes/Contactenos';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='Ingresar' element={<Ingresar/>}/>
          <Route path='Registro' element={<Registro/>}/>
          <Route path='Contrasena' element={<Contrasena/>}/>
          <Route path='Contactenos' element={<Contactenos/>}/>
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

