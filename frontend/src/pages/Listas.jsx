import useListas from '../hooks/useListas';

const Listas = () => {

    const { listas } = useListas();    

    return ( 
            <>
                <h1 className="text-4xl text-teal-800 font-black">Listas</h1>
            </>     
            );
}
 
export default Listas;