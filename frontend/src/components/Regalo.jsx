import { formatearFecha } from '../helpers/formatearFecha'

const Regalo = ({regalo}) => {

    const { descripcion, nombre, seleccion, fechaEvento, estado, _id } = regalo

    return ( 
        <div className="border-b p-5 flex justify-between items-center">
            <div className="">
                {/* <img>src={"imagen"}</img> */}
                <p className="mb-1 text-xl">{nombre}</p>
                <p className="mb-1 text-sm text-gray-500 uppercas">{descripcion}</p>
                <p className="mb-1 text-xl">{formatearFecha(fechaEvento) }</p>
                <p className="mb-1 text-xl text-gray-600 ">Elegido: {seleccion}</p>
            </div>
            <div className="flex gap-2">
                <button
                    className="bg-indigo-500 px-4 py-3 text-white uppercase font-bold text-sm rounded-lg"
                >
                    editar
                </button>

                { estado ? (
                    <button
                        className="bg-teal-500 px-4 py-3 text-white uppercase font-bold text-sm rounded-lg"
                    >
                        completa
                    </button>  
                ) : (
                    <button
                        className="bg-amber-300 px-4 py-3 text-white uppercase font-bold text-sm rounded-lg"
                    >
                        incompleta
                    </button>
                ) }

                              
                
                <button
                    className="bg-red-500 px-4 py-3 text-white uppercase font-bold text-sm rounded-lg"
                >
                    eliminar
                </button>
            </div>
        </div>
     );
}
 
export default Regalo;