import FormularioLista from '../components/FormularioLista';

const NuevaLista = () => {
    return ( 
        <>
            <h1 className="text-4xl text-teal-800 ">Crear Lista</h1>
            <div className="mt-10 flex justify-center">
                <FormularioLista />
            </div>
        </>

     
        );
}
 
export default NuevaLista;