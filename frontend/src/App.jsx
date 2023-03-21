
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import AuthLayout from './layouts/AuthLayout';
import RutaProtegida from './layouts/RutaProtegida';

import Login from './pages/Login';
import Registrar from './pages/Registrar';
import RecuperarPassword from './pages/RecuperarPassword';
import NuevoPassword from './pages/NuevoPassword';
import ConfirmarCuenta from './pages/ConfirmarCuenta';
import Listas from './pages/Listas';
import NuevaLista from './pages/NuevaLista';
import Lista from './pages/Lista';
import EditarLista from './pages/EditarLista';

import { AuthProvider } from './context/AuthProvider';
import { ListasProvider } from './context/ListasProvider';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <AuthProvider>   
        <ListasProvider>       
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
              <Route path="crear-lista" element={<NuevaLista />} />
              <Route path=":id" element={<Lista />} />
              <Route path="editar/:id" element={<EditarLista />} />
            </Route>
          </Routes>
        </ListasProvider>  
      </AuthProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
