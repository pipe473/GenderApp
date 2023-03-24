import useListas from '../hooks/useListas';
import PreviewLista from '../components/PreviewLista';

const Listas = () => {

    const { listas } = useListas();    
    return ( 
            <>
                <h1 className="text-4xl text-teal-800">Listas</h1>
                <div className="bg-white shadow mt-10 rounded-lg">
                {listas.length ? 
                    listas.map(lista => (
                        <PreviewLista 
                            key={lista._id}
                            lista={lista}
                        />
                    ))
                    : <p className=" text-center text-gray-600 uppercase  p-5">No hay listas aún</p>}
                </div>
            </>     
            );
}
 
export default Listas;