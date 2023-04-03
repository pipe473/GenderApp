import { formatearFecha } from '../helpers/formatearFecha';
import useListas from '../hooks/useListas';
import useAdmin from '../hooks/useAdmin';

const Regalo = ({regalo}) => {

    const { handleModalEditarRegalo, handleModalEliminarRegalo, completarRegalo } = useListas();

    const admin = useAdmin();

    const { descripcion, nombre, seleccion, fechaEvento, estado, _id } = regalo

    return ( 
        <div className="border-b p-5 flex justify-between items-center">
            <div className="">
                <p className="mb-1 text-xl">{nombre}</p>
                <p className="mb-1 text-sm text-gray-500 uppercas">{descripcion}</p>
                <p className="mb-1 text-sm">{formatearFecha(fechaEvento) }</p>
                    { estado && <p className="mb-1 text-xs">Elegida por: {regalo.elegido.nombre}</p>}
                <p className={`${estado === true ? 'bg-red-500' : 'bg-green-500'} p-1 text-xs rounded-lg text-white text-center uppercase`}>Estado: {seleccion === 'Elegido' ? 'No disponible' : 'Disponible'}</p>
            </div>
            <div className="flex gap-2">
                { admin && (
                <button
                    className="bg-amber-600 hover:bg-amber-800 px-4 py-3 text-white uppercase font-bold text-sm rounded-lg"
                    onClick={ () => handleModalEditarRegalo(regalo)}
                >
                    editar
                </button>

                )}
                <button
                className={`${estado ? 'bg-red-500' : 'bg-green-500'} px-4 py-3 text-white uppercase font-bold text-sm rounded-lg`}
                onClick={() => completarRegalo(_id) }
                >
                   {estado ? 'Elegido' : 'Sin elegir'}
                </button>  

                  { admin && (            
                
                <button
                    className="bg-red-500 px-4 py-3 text-white uppercase font-bold text-sm rounded-lg"
                    onClick={ () => handleModalEliminarRegalo(regalo) }
                >
                    eliminar
                </button>
                )}
            </div>
        </div>
     );
}
 
export default Regalo;