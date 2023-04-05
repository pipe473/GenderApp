import { useState, useEffect, createContext } from 'react';
import clienteAxios from '../config/clienteAxios';
import { useNavigate } from 'react-router-dom';

const ListasContext = createContext();

const ListasProvider = ({ children }) => {

    const [listas, setListas] = useState([]);
    const [alerta, setAlerta] = useState({});
    const [lista, setLista] = useState({});
    const [cargando, setCargando] = useState(false);
    const [modalFormularioLista, setModalFormularioLista] = useState(false);
    const [regalo, setRegalo] = useState({})
    const [modalEliminarRegalo, setModalEliminarRegalo] = useState(false);
    const [invitado, setInvitado] = useState({});
    const [modalEliminarInvitado, setModalEliminarInvitado] = useState(false);   
    const [buscador, setBuscador] = useState(false);   

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
       if (lista.id) {
            await editarLista(lista)
       } else {
            await nuevarLista(lista)
       }    
    }

    const editarLista = async lista =>{
       try {
        const token = localStorage.getItem('token')
        if (!token) return

        const config = {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        }

        const { data } = await clienteAxios.put(`/listas/${lista.id}`, lista, config)
        // console.log(data);
        
        
        // Sincronizar el state
        const listasActualizadas = listas.map(listaState => listaState._id === data._id ? data : listaState )
        setListas(listasActualizadas)
        
        setAlerta({
            msg: 'Lista Actualizada correctamente',
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

    const nuevarLista = async lista => {       
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
        setCargando(true);
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
            // console.log(data);   
            setLista(data);    
            setAlerta({})     
        } catch (error) {
           navigate('/listas')
           setAlerta({
               msg: error.response.data.msg,
               error: true
           })       
           setTimeout(() => {
              setAlerta({}) 
           }, 3000);  
        } finally {
            setCargando(false);
        }     
    }

    const eliminarLista = async id => {
       try {
            const token = localStorage.getItem('token')
            if (!token) return

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
        
        const { data } = await clienteAxios.delete(`/listas/${id}`, config)

        // Sincronizar el state
        const actualizarLista = listas.filter(listaState => listaState._id !== id )
        console.log(actualizarLista);
        setListas(actualizarLista)
        

        setAlerta({
            msg: data.msg,
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

    const handleModaList = () => {
        setModalFormularioLista(!modalFormularioLista)
        setRegalo({})
    }

    const submitRegalo = async  regalo => {
        if (regalo?.id) {
            await editarRegalo(regalo)
        } else {
            await crearRegalo(regalo)
        }          
    }

    const crearRegalo = async regalo => {
        try {
            const token = localStorage.getItem('token')
            if (!token) return

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
            const { data } = await clienteAxios.post('/regalos', regalo, config)
            
            // Agrega la tarea al state
            const listaActualizada = { ...lista }
            listaActualizada.regalos = [...lista.regalos, data]

            setLista(listaActualizada)
            setAlerta({})
            setModalFormularioLista(false)
        } catch (error) {
            console.log(error);            
        }  
    }

    const editarRegalo = async regalo => {
        try {
            const token = localStorage.getItem('token')
            if (!token) return

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            const { data } = await clienteAxios.put(`/regalos/${regalo.id}`, regalo, config)
            // console.log(data); 
            
            const listaActualizada = { ...lista }
            listaActualizada.regalos = listaActualizada.regalos.map( regaloState => 
            regaloState._id === data._id ? data : regaloState )
            setLista(listaActualizada)            
            setAlerta({})
            setModalFormularioLista(false)

        } catch (error) {
            console.log(error);            
        }
    }

    const handleModalEditarRegalo = regalo => {
        // console.log(regalo); 
        setRegalo(regalo)     
        setModalFormularioLista(true)  
    }

    const handleModalEliminarRegalo = regalo =>{
        setRegalo(regalo)
        setModalEliminarRegalo(!modalEliminarRegalo)
    }

    const eliminarRegalos = async () => {
        try {
            const token = localStorage.getItem('token')
            if (!token) return

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            const { data } = await clienteAxios.delete(`/regalos/${regalo._id}`, config)
            // console.log(data); 
            setAlerta({
                msg: data.msg,
                error: false
            })
            
            const listaActualizada = { ...lista }
            listaActualizada.regalos = listaActualizada.regalos.filter(regaloState => regaloState._id !== regalo._id)

            setLista(listaActualizada)          
            setModalEliminarRegalo(false)
            setRegalo({})
            setTimeout(() => {
                setAlerta({})
            }, 3000);

        } catch (error) {
            console.log(error);            
        } 
    }

    const submitColaborador = async email => {

        setCargando(true)

        try {
            const token = localStorage.getItem('token')
            if (!token) return

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            const { data } = await clienteAxios.post('/listas/colaboradores', {email}, config)

            setInvitado(data)
            setAlerta({})           

        } catch (error) {
            setAlerta({
                msg: error.response.data.msg,
                error: true
            })            
        } finally {
            setCargando(false)
        }   
    }

    const agregarInvitado = async email => {

        try {
            const token = localStorage.getItem('token')
            if (!token) return

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            const { data } = await clienteAxios.post(`/listas/colaboradores/${lista._id}`, email, config)

           setAlerta({
               msg: data.msg,
               error: false
           })
            
           setInvitado({})
           
           setTimeout(() => {
            setAlerta({})
           }, 3000);

        } catch (error) {
            setAlerta({
                msg: error.response.data.msg,
                error: true
            })         
        }     
    }

    const handleModalEliminarInvitado = (invitado) => {
        setModalEliminarInvitado(!modalEliminarInvitado)
        setInvitado(invitado);   
        // console.log(invitado);        
    }

    const eliminarInvitado = async () => {
        // console.log(invitado);   
        try {
            const token = localStorage.getItem('token')
            if (!token) return

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }

            const { data } = await clienteAxios.post(`/listas/eliminar-colaborador/${lista._id}`, { id: invitado._id }, config)

            const listActualizada = {...lista}

            listActualizada.colaboradores = listActualizada.colaboradores.filter( invitadoState => invitadoState._id !== invitado._id )

            setLista(listActualizada)

            setAlerta({
                msg: data.msg,
                error: false
            })
            setInvitado({})
            setModalEliminarInvitado(false)

            setTimeout(() => {
                setAlerta({})
               }, 3000);


        } catch (error) {
            console.log(error.response);            
        }     
    }

    const completarRegalo = async id => {
        // console.log(id);   
        try {
            const token = localStorage.getItem('token')
            if (!token) return

            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
            const { data } = await clienteAxios.post(`/regalos/estado/${id}`, {}, config)

            // console.log(data);
            const listActualizada = {...lista}

            listActualizada.regalos = listActualizada.regalos.map(regaloState => regaloState._id === data._id ? data : regaloState )

            setLista(listActualizada)
            setRegalo({})
            setAlerta({})
            
            
        } catch (error) {
            console.log(error.response);            
        }     
    }

    const handleBuscador = () => {
        setBuscador(!buscador)
    }

    return (
        <ListasContext.Provider
            value={{
                listas,
                mostrarAlerta,
                alerta,
                submitLista,
                obtenerLista,
                lista,
                cargando,
                eliminarLista,
                modalFormularioLista,
                handleModaList,
                submitRegalo,
                handleModalEditarRegalo,
                regalo,
                modalEliminarRegalo,
                handleModalEliminarRegalo,
                eliminarRegalos,
                submitColaborador,
                invitado,
                agregarInvitado,
                handleModalEliminarInvitado,
                modalEliminarInvitado,
                eliminarInvitado,
                completarRegalo,
                buscador,
                handleBuscador
            }}

        >{children}

        </ListasContext.Provider>
    )
}

export {
    ListasProvider
}

export default ListasContext
