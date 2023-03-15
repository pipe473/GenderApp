import { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom";
import Alerta from '../components/Alerta';
import clienteAxios from '../config/clienteAxios';

const NuevoPassword = () => {

const [passwordModificado, setPasswordModificado] = useState(false);
const [password, setPassword] = useState('')
const [tokenValido, setTokenValido] = useState(false); 
const [alerta, setAlerta] = useState({})

const params = useParams();
const { token } = params


useEffect(() => {
  const comprobarToken = async () => {
    try {
      await clienteAxios(`/usuarios/olvide-password/${token}`)
      setTokenValido(true)
      
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true
      })   
    }
  }
  comprobarToken();
}, [])

const handleSubmit = async e => {
  e.preventDefault();

  if (password.length < 8) {
    setAlerta({
      msg: 'La contraseña debe tener mínimo 8 caracteres',
      error: true
    })
    return
  }
  try {
    const url = `/usuarios/olvide-password/${token}`

    const { data } = await clienteAxios.post(url, { password })
    setAlerta({
      msg: data.msg,
      error: false
    })
    setPasswordModificado(true)
    
  } catch (error) {
    setAlerta({
      msg: error.response.data.msg,
      error: true
    })
  }
}

const { msg } = alerta

  return (
    <>
      <h1 className="text-teal-500 font-black text-4xl capitalize">
        Recupera tu acceso y sigue{" "}
        <span className="text-teal-700">con la lista</span>
      </h1>

      {msg && <Alerta alerta={alerta} />}

      { tokenValido && (
        <form 
            className="my-10 bg-white shadow rounded-lg p-10"
            onSubmit={handleSubmit}
        >
          <div className="my-5">
            <label
              className="uppercase text-teal-700 block text-xl font-bold"
              htmlFor="password"
            >
              Nueva Contraseña
            </label>
            <input
              id="password"
              type="password"
              placeholder="Escribe tu nueva Contraseña"
              className="w-full mt-3 p-3 border rounded-xl bg-teal-50"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <input
            type="submit"
            value="Guardar nueva contraseña"
            className="bg-teal-700 w-full mb-5 py-3 text-white uppercase font-bold rounded-xl hover:cursor-pointer hover:bg-teal-800 trasition-colors"
          />
      </form>
      )}
      { passwordModificado && (
             <Link
              className="block text-center my-5 text-slate-500 uppercase text-sm"
              to="/"
              >
                Inicia Sesión
            </Link>
          )}
    </>
  );
};

export default NuevoPassword;
