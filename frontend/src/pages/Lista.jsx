import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import useListas from '../hooks/useListas';
import ModalFormularioLista from '../components/ModalFormularioLista';
import Regalo from '../components/Regalo';

const Lista = () => {

    const params = useParams();
    // console.log(params);  
    const { obtenerLista, lista, cargando, handleModaList } = useListas();

    useEffect(() => {
        obtenerLista(params.id)
    }, [])   

   const { nombre } = lista    

   if (cargando) return 'Cargando...'

    return ( 
        <>
            <div className="flex justify-between">
                <h1 className="font-black text-4xl">{nombre}</h1>
                <div className="flex items-center gap-2 text-teal-500 hover:text-teal-800">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                    </svg>
                    <Link
                        to={`/listas/editar/${params.id}`}
                        className="uppercase"
                    >Editar</Link>
                </div>
            </div>
                <button
                        onClick={handleModaList}
                        type="button"
                        className="text-sm px-5 py-3 w-full md:w-auto rounded-lg uppercase bg-teal-400 text-white text-center mt-5 flex gap-2 items-center justify-center"
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>                    
                    Nuevo Regalo
                </button>

                <p className="font-bold text-xl mt-10">Regalos del babyshower</p>

                <div className="bg-white shadow mt-10 rounded-lg">
                    {lista.regalos?.length ? 
                        lista.regalos?.map( regalo => (
                            <Regalo 
                                key={regalo._id}
                                regalo={regalo}
                            />
                        )) :
                        <p className="text-center my-5 p-10">No hay ningun regalo en esta lista</p>}
                </div>

            <ModalFormularioLista />
        </>        
     );
}
 
export default Lista;