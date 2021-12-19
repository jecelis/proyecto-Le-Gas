import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Home } from './Componentes/Home';
import { Ingresar } from './Componentes/Ingresar';
import { Registro } from './Componentes/Registro';
import { Contrasena } from './Componentes/Contraseña';
import { Contactenos } from './Componentes/Contactenos';
import { Nomina } from './Componentes/Nomina';
import { Gestion, Precios } from './Componentes/Gestion';
import { Informacion } from './Componentes/Informacion';
import { Tanquear } from './Componentes/Tanquear';
import { Recarga } from './Componentes/Recarga';
import { Historial } from './Componentes/Historial';
import { Permisos } from './Componentes/Permisos';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Ingresar' element={<Ingresar/>}/>
          <Route path='/Registro' element={<Registro/>}/>
          <Route path='/Contrasena' element={<Contrasena/>}/>
          <Route path='/Contactenos' element={<Contactenos/>}/>
          <Route path='/Nomina' element={<Nomina/>}/>
          <Route path='/Gestion' element={<Gestion/>}/>
          <Route path='/Informacion' element={<Informacion/>}/>
          <Route path='/Tanquear' element={<Tanquear/>}/>
          <Route path='/Recarga' element={<Recarga/>}/>
          <Route path='/Historial' element={<Historial/>}/>
          <Route path='/Permisos' element={<Permisos/>}/>
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

