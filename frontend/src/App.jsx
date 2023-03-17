
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import AuthLayout from './layouts/AuthLayout';
import RutaProtegida from './layouts/RutaProtegida';

import Login from './pages/Login';
import Registrar from './pages/Registrar';
import RecuperarPassword from './pages/RecuperarPassword';
import NuevoPassword from './pages/NuevoPassword';
import ConfirmarCuenta from './pages/ConfirmarCuenta';
import Listas from './pages/Listas';

import { AuthProvider } from './context/AuthProvider'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <AuthProvider>        
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
          <Route path="/listas" element={<RutaProtegida />}>  
            <Route index element={<Listas />} />
          </Route>
        </Routes>
      </AuthProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
