import { Link } from "react-router-dom"

const PreviewLista = ({lista}) => {
    const { nombre, _id, invitada } = lista
    return ( 
        <div className="border-b p-5 flex flex-col md:flex-row">
            <p className="flex-1 text-teal-800">
                {nombre}
                <span className="text-sm text-teal-500 uppercase">{''} <span className="text-teal-800">-</span> {invitada}</span>
            </p>
            <Link
                to={`${_id}`}
                className="text-gray-500 hover:text-gray-800 uppercase text-sm"
            >Ver Lista</Link>
        </div>
     );
}
 
export default PreviewLista;