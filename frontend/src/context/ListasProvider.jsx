import { useState, useEffect, createContext } from 'react';
import clienteAxios from '../config/clienteAxios';
import { useNavigate } from 'react-router-dom';

const ListasContext = createContext();

const ListasProvider = ({ children }) => {

    const [listas, setListas] = useState([]);
    const [alerta, setAlerta] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        const obtenerListas = async () => {
            try {
                const token = localStorage.getItem('token')
                if (!token) return
    
                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                }

                const { data } = await clienteAxios('/listas', config)
                setListas(data);              

            } catch (error) {
                console.log(error);                
            }
        }
        obtenerListas()
    }, [])

    const mostrarAlerta = alerta => {
        setAlerta(alerta)

        setTimeout(() => {
            setAlerta({})
        }, 5000);
    }

    const submitLista = async lista => {
        // console.log(lista);  
        try {
            const token = localStorage.getItem('token')
            if (!token) return

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            const { data } = await clienteAxios.post('/listas', lista, config)
            // console.log(data);
            setListas([...listas, data]);
            
            setAlerta({
                msg: 'Lista creada correctamente',
                error: false
            })

            setTimeout(() => {
                setAlerta({})
                navigate('/listas')
            }, 3000);
        } catch (error) {
            console.log(error);            
        }      
    }

    const obtenerLista = async id => {
        try {
            const token = localStorage.getItem('token')
            if (!token) return

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
            const { data } = await clienteAxios(`/listas/${id}`, config)
            console.log(data);            
        } catch (error) {
            console.log(error);            
        }     
    }

    return (
        <ListasContext.Provider
            value={{
                listas,
                mostrarAlerta,
                alerta,
                submitLista,
                obtenerLista
            }}
        >{children}

        </ListasContext.Provider>
    )
}

export {
    ListasProvider
}

export default ListasContext
