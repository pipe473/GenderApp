import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import useListas from '../hooks/useListas';
import FormularioLista from '../components/FormularioLista';

const EditarLista = () => {
    const params = useParams();
    const { obtenerLista, lista, cargando } = useListas();

    useEffect(() => {
        obtenerLista(params.id)
    }, [])   
    const { nombre } = lista;

    if(cargando) return 'Cargando...'

    return ( 
        <>
            <h1 className="text-teal-800 font-black text-4xl">Editar Lista: {nombre}</h1>
            <div className="mt-10 flex justify-center">
                <FormularioLista />
            </div>
        </>
     );
}
 
export default EditarLista;