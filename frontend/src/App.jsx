
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import AuthLayout from './layouts/AuthLayout';
import Login from './paginas/Login';
import Registrar from './paginas/Registrar';
import RecuperarPassword from './paginas/RecuperarPassword';
import NuevoPassword from './paginas/NuevoPassword';
import ConfirmarCuenta from './paginas/ConfirmarCuenta';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Area Pública */}
          <Route path="/" element={<AuthLayout />}>
            <Route index element={<Login />} />
            <Route path="registrar" element={<Registrar />} />
            <Route path="recuperar-password" element={<RecuperarPassword />} />
            <Route path="recuperar-password/:token" element={<NuevoPassword />} />
            <Route path="confirmar/:id" element={<ConfirmarCuenta />} />
            

          </Route>
          {/* Area Privada */}
          <Route path="/">
            
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
