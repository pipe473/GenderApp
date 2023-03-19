import { useState, useEffect, createContext } from 'react';
import clienteAxios from '../config/clienteAxios';

const ListasContext = createContext();

const ListasProvider = ({ children }) => {

    const [listas, setListas] = useState([]);

    return (
        <ListasContext.Provider
            value={{
                listas
            }}
        >{children}

        </ListasContext.Provider>
    )
}

export {
    ListasProvider
}

export default ListasContext
