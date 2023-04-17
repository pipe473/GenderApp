import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Sidebar = () => {

    const { auth } = useAuth();

    return ( 
        <aside className="md:w-1/3 lg:w-1/5 xl:w-1/6 lg:w-96 px-5 py-10">
            <p className="text-xl text-teal-800">Hola:<span className="text-xl uppercase font-bold text-teal-800"> {auth.nombre}</span></p>

            <Link
                to="crear-lista"
                className="text-teal-50 text-sm bg-teal-800 hover:text-teal-800 hover:bg-teal-100 p-3 rounded-md uppercase block mt-5 text-center rounded-md"
            >Nueva Lista</Link>
        </aside>
     );
}
 
export default Sidebar;