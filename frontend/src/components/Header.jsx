import { Link } from 'react-router-dom';

const Header = () => {
    return ( 
        <header className="px-4 py-5 bg-teal-700 shadow border-b">
            <div className="md:flex md:justify-between">
                <h2 className="text-4xl text-white font-black">Babyshower <strong className="text-teal-100">POL</strong></h2>

                <input 
                    type="search"
                    placeholder="Buscar lista"
                    className="rounded-lg lg:w-96 block p-2 border"
                />
                <div className="flex items-center gap-4">
                    <Link
                        to="/listas"
                        className=" uppercase text-teal-100"
                    >Listas</Link>

                    <button
                        type="button"
                        className="text-teal-50 text-sm bg-teal-800 bg-teal-100 hover:text-teal-800 hover:bg-teal-100 transition-colors p-3 rounded-lg uppercase"
                    >Cerrar Sesión</button>
                </div>
            </div>
        </header>
     );
}
 
export default Header;