import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import clienteAxios from '../config/clienteAxios'
import Alerta from '../components/Alerta';


const ConfirmarCuenta = () => {

  const [alerta, setAlerta] = useState({});
  const [cuentaConfirmada, setCuentaConfirmada] = useState(false);

  const params = useParams();
  const { id } = params

  useEffect(() =>{
    const confirmarCuenta = async () => {
      try {
        const url = `/usuarios/confirmar/${id}`
        const { data } = await clienteAxios(url);

        setAlerta({
          msg: data.msg,
          error: false
        })       
        setCuentaConfirmada(true);
        
      } catch (error) {
        setAlerta({
          msg: error.response.data.msg,
          error: true,
        })      
      }
    }
    confirmarCuenta();
  }, [])

  const { msg } = alerta
  

    return ( 
        <>
        <h1 className="text-teal-500 font-black text-4xl capitalize">
         Muchas Gracias {" "}
          <span className="text-teal-700">por confirmar tu asistencia</span>
        </h1>       
        <div className="mt-20 md:mt-10 shadow-lg px-5 py-10 rounded-xl bg-white">
          {msg && <Alerta alerta={alerta} />}

          {cuentaConfirmada && (
             <Link
             className="block text-center my-5 text-slate-500 uppercase text-sm"
             to="/"
            >
              Inicia Sesión
            </Link>
          )}

        </div>
        <p className="text-teal-500 text-2xl capitalize">Ya puedes ver la lista de regalos para nuestro bebé y elegir el que más ilusión te haga,</p>
        <span className="text-teal-700 text-l capitalize font-black">* con tu compañía ya somos más que felices...</span>
      </>
     );
}
 
export default ConfirmarCuenta;