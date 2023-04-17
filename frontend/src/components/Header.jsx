import { Link } from 'react-router-dom';
import useListas from '../hooks/useListas';
import Buscador from './Buscador';

const Header = () => {

    const { handleBuscador } = useListas();

    return ( 
        <header className="px-4 py-5 bg-teal-700 shadow border-b">
            <div className="md:flex md:justify-between">
                <h2 className="text-4xl text-white font-black text-center mb-5 md:mb-0">Babyshower <strong className="text-teal-100">POL</strong></h2>

                <div className="flex flex-col md:flex-row items-center gap-4">
                    
                    <button
                        type="button"
                        className="uppercase text-teal-100 hover:text-teal-300"
                        onClick={handleBuscador}
                    >
                        Buscar Lista
                    </button>
                    <Link
                        to="/listas"
                        className=" uppercase text-teal-100 hover:text-teal-300"                        
                    >Listas</Link>

                    <button
                        type="button"
                        className="text-teal-50 text-sm bg-teal-800 bg-teal-100 hover:text-teal-800 hover:bg-teal-100 transition-colors p-3 rounded-lg uppercase"
                    >Cerrar Sesión</button>

                    <Buscador />
                </div>
            </div>
        </header>
     );
}
 
export default Header;