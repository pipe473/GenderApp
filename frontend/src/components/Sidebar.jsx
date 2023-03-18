import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Sidebar = () => {

    const { auth } = useAuth();

    return ( 
        <aside className="md:w-80 lg:w-96 px-5 py-10">
            <p className="text-xl font-bold">Hola: {auth.nombre}</p>

            <Link
                to="crear-lista"
                className="text-teal-50 text-sm bg-teal-800 p-3 rounded-md uppercase font-bold block mt-5 text-center rounded-md"
            >Nueva Lista</Link>
        </aside>
     );
}
 
export default Sidebar;