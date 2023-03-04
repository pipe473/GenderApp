// Este lo definimos para el area pública Olvide password, register, iniciar sesión y confirmar mi cuenta

import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
    return ( 
        <>
            <div>AuthLayout</div>
            <Outlet />
        </>
     );
}
 
export default AuthLayout;