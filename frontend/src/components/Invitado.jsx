import useListas from '../hooks/useListas';

const Invitado = ({colaborador}) => {

    const { handleModalEliminarInvitado } = useListas()

    const { nombre, email } = colaborador;
    return ( 
        <div className="border-b p-5 flex justify-between items-center">
            <div>
                <p>{nombre}</p>
                <p className="text-sm text-gray-700">{email}</p>
            </div>
            <div>
                <button
                    type="button"
                    className="bg-red-600 py-3 px-4 text-white uppercase font-bold text-sm rounded-lg"
                    onClick={() => handleModalEliminarInvitado(colaborador)}
                >
                    Eliminar
                </button>
            </div>
        </div>

     );
}
 
export default Invitado;