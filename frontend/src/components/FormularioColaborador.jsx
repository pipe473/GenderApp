import { useState } from 'react';
import useListas from '../hooks/useListas';
import Alerta from './Alerta';

const FormularioColaborador = () => {

    const [email, setEmail] = useState('')

    const { mostrarAlerta, alerta, submitColaborador } = useListas()

    const handleSubmit = e => {
        e.preventDefault();

        if (email === '') {
            mostrarAlerta({
                msg: 'El email es obligatorio',
                error: true
            })
            return
        }
        submitColaborador(email)
    }

    const { msg } = alerta

    return ( 
        <form
            className="bg-white py-10 px-5 w-full md:w-1/2 rounded-lg shadow"
            onSubmit={handleSubmit}
        >
            {msg && <Alerta alerta={alerta} />}
            <div className="mb-5">
                <label 
                    className="text-teal-800 uppercase text-sm"
                    htmlFor="email"
                >
                    Email Invitad@
                </label>
                <input 
                    type="email"
                    id="email"
                    placeholder="Email de usuario"
                    className="border-2 w-full p-2 mt-2 placeholder-teal-600 rounded-md"
                    value={email}
                    onChange={ e => setEmail(e.target.value) }
                />
            </div>
            <input 
                type="submit"
                className="bg-teal-600 hover:bg-teal-700 w-full p-3 text-white uppercase cursor-pointer transition-colors rounded text-sm"
                value='Buscar colaborador'
            />
        </form>
     );
}
 
export default FormularioColaborador;