import { useState, useEffect, createContext } from 'react';
import clienteAxios from '../config/clienteAxios';

const ListasContext = createContext();

const ListasProvider = ({ children }) => {

    return (
        <ListasContext.Provider
            value={{

            }}
        >{children}

        </ListasContext.Provider>
    )
}

export {
    ListasProvider
}

export default ListasContext
