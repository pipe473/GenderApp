import FormularioColaborador from '../components/FormularioColaborador';
import { useEffect } from 'react';
import useListas from '../hooks/useListas';
import { useParams } from 'react-router-dom';

const NuevoColaborador = () => {

    const { obtenerLista, lista, cargando } = useListas();
    const params = useParams()

    useEffect(() => {
        obtenerLista(params.id)
    }, [])

    if (cargando) return 'Cargando...'

    return ( 
        <>
            <h1 className="text-4xl font-black">Añadir colaborador@ a la Lista:<span className="text-teal-500">  {lista.nombre}</span></h1>

            <div className="mt-10 flex justify-center">
                <FormularioColaborador />
            </div>
        </>
     );
}
 
export default NuevoColaborador;