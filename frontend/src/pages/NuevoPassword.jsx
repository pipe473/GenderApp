import { useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import Alerta from '../components/Alerta';

const NuevoPassword = () => {

const [tokenValido, setTokenValido] = useState(false); 
const [alerta, setAlerta] = useState({})

const params = useParams();
const { token } = params


useEffect(() => {
  const comprobarToken = async () => {
    try {
      await axios(`http://localhost:4500/api/usuarios/olvide-password/${token}`)
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

const { msg } = alerta

  return (
    <>
      <h1 className="text-teal-500 font-black text-4xl capitalize">
        Recupera tu acceso y sigue{" "}
        <span className="text-teal-700">con tu lista</span>
      </h1>

      {msg && <Alerta alerta={alerta} />}
      
      { tokenValido && (
        <form className="my-10 bg-white shadow rounded-lg p-10">
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
            />
          </div>
          <input
            type="submit"
            value="Guardar nueva contraseña"
            className="bg-teal-700 w-full mb-5 py-3 text-white uppercase font-bold rounded-xl hover:cursor-pointer hover:bg-teal-800 trasition-colors"
          />
      </form>
      )}
      {/* <nav className="lg:flex lg:justify-between">
        <Link
          className="block text-center my-5 text-slate-500 uppercase text-sm"
          to="/"
        >
          ¿Ya tienes una cuenta? Inicia Sesión
        </Link>
        <Link
          className="block text-center my-5 text-slate-500 uppercase text-sm"
          to="registrar"
        >
          ¿No tienes una cuenta? Regístrate
        </Link>
      </nav> */}
    </>
  );
};

export default NuevoPassword;
