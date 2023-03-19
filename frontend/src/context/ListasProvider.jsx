import { useState, useEffect, createContext } from 'react';
import clienteAxios from '../config/clienteAxios';

const ListasContext = createContext();

const ListasProvider = ({ children }) => {

    const [listas, setListas] = useState([]);
    const [alerta, setAlerta] = useState([]);

    const mostrarAlerta = alerta => {
        setAlerta(alerta)

        setTimeout(() => {
            setAlerta({})
        }, 5000);
    }

    const submitLista = async lista => {
        console.log(lista);        
    }

    return (
        <ListasContext.Provider
            value={{
                listas,
                mostrarAlerta,
                alerta,
                submitLista
            }}
        >{children}

        </ListasContext.Provider>
    )
}

export {
    ListasProvider
}

export default ListasContext
