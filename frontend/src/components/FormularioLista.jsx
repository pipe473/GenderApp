import { useState } from 'react';

const FormularioLista = () => {

    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [fechaEvento, setFechaEvento] = useState('');
    const [invitada, setInvitada] = useState('');

    return ( 
            <form
                className="bg-white py-10 px-5 md:1/2 rounded-lg shadow"
            >
                <div className="mb-5">
                    <label
                        className="text-gray-700 uppercase font-bold text-sm"
                        htmlFor="nombre"
                    >Nombre de Lista</label>
                    <input 
                        id="nombre"
                        type="text"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        placeholder="Nombre de la lista"
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label
                        className="text-gray-700 uppercase font-bold text-sm"
                        htmlFor="descripcion"
                    >Descripción</label>
                    <textarea 
                        id="descripcion"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        placeholder="Descripción de la lista"
                        value={descripcion}
                        onChange={e => setDescripcion(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label
                        className="text-gray-700 uppercase font-bold text-sm"
                        htmlFor="fecha-evento"
                    >Fecha de Evento</label>
                    <input 
                        id="fecha-evento"
                        type="date"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={fechaEvento}
                        onChange={e => setFechaEvento(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label
                        className="text-gray-700 uppercase font-bold text-sm"
                        htmlFor="invitada"
                    >Nombre de Invitad@</label>
                    <input 
                        id="invitada"
                        type="text"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        placeholder="Nombre del invitad@"
                        value={invitada}
                        onChange={e => setInvitada(e.target.value)}
                    />
                </div>
                <input
                    type="submit"
                    value="Crear Lista"
                    className="w-full text-teal-50 text-sm bg-teal-800 hover:text-teal-800 hover:bg-teal-100 p-3 rounded-md uppercase text-center rounded-lg cursor-pointer transition-colors"
                />
            </form>
            );
}
 
export default FormularioLista;