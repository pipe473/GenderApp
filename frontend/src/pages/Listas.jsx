import useListas from '../hooks/useListas';

const Listas = () => {

    const { listas } = useListas();    
    console.log(listas);
    

    return ( 
            <>
                <h1 className="text-4xl text-teal-800">Listas</h1>
                <div className="bg-white shadow mt-10 rounded-lg">
                    { listas.lenght ? <p>Si hay listas</p> : <p className="text-center text-teal-600 uppercase p-5">No hay listas aún</p> }
                </div>
            </>     
            );
}
 
export default Listas;