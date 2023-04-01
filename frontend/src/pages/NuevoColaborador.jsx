import FormularioColaborador from '../components/FormularioColaborador';
import { useEffect } from 'react';
import useListas from '../hooks/useListas';
import { useParams } from 'react-router-dom';
import Alerta from '../components/Alerta';

const NuevoColaborador = () => {

    const { obtenerLista, lista, cargando, invitado, agregarInvitado, alerta } = useListas();
    const params = useParams()

    useEffect(() => {
        obtenerLista(params.id)
    }, []);

    // console.log(invitado);    

    if (!lista) return <Alerta alerta={alerta} />

    return ( 
        <>
            <h1 className="text-4xl font-black">Añadir colaborador@ a la Lista:<span className="text-teal-500">  {lista.nombre}</span></h1>

            <div className="mt-10 flex justify-center">
                <FormularioColaborador />
            </div>

            {cargando ? <p className="text-center">Cargando...</p> : invitado?._id && (
                <div className="flex justify-center mt-10">
                    <div className="bg-white py-10 px-5 md:w-1/2 rounded-lg shadow">
                        <h2 className="text-center mb-10 text-2xl text-teal-700 font-bold">Resultado:</h2>

                        <div className="flex justify-between items-center">
                            {invitado.nombre}

                            <button
                                type="submit"
                                className="bg-teal-500 px-5 py-2 rounded-lg uppercase text-white text-sm"
                                onClick={ () => agregarInvitado({
                                    email: invitado.email
                                })}
                            >
                                Agregar a la lista
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
     );
}
 
export default NuevoColaborador;