import { Link } from "react-router-dom"

const PreviewLista = ({lista}) => {
    const { nombre, _id, invitada } = lista
    return ( 
        <div className="border-b p-5 flex">
            <p className="flex-1">
                {nombre}
                <span className="text-sm text-teal-500 uppercase">{''} {invitada}</span>
            </p>
            <Link
                to={`${_id}`}
                className="text-teal-500 hover:text-teal-800 uppercase text-sm"
            >Ver Lista</Link>
        </div>
     );
}
 
export default PreviewLista;