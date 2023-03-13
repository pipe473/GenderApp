import { useState } from 'react';
import { Link } from "react-router-dom";
import Alerta from '../components/Alerta';
import clienteAxios from '../config/clienteAxios';

const RecuperarPassword = () => {

  const [email, setEmail] = useState('')
  const [alerta, setAlerta] = useState({})

  const handleSubmit = async e => {
    e.preventDefault();

    if (email === '' || email.length < 6) {
      setAlerta({
        msg: 'El email es obligatorio',
        error: true
      });
      return
    }
    try {
      const { data } = await clienteAxios.post(`/usuarios/olvide-password`, { email } )
        setAlerta({ 
            msg: data.msg,
            error: false
        })
        // console.log(data);
        
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
        <span className="text-teal-700">con tu lista</span>
      </h1>
      { msg && <Alerta alerta={alerta} />}
      <form className="my-10 bg-white shadow rounded-lg p-10"
        onSubmit={handleSubmit}
      >
        <div className="my-5">
          <label
            className="uppercase text-teal-700 block text-xl font-bold"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email de Registro"
            className="w-full mt-3 p-3 border rounded-xl bg-teal-50"
            value={email}
            onChange={ e => setEmail(e.target.value) }
          />
        </div>
        <input
          type="submit"
          value="Enviar Instrucciones"
          className="bg-teal-700 w-full mb-5 py-3 text-white uppercase font-bold rounded-xl hover:cursor-pointer hover:bg-teal-800 trasition-colors"
        />
      </form>
      <nav className="lg:flex lg:justify-between">
        <Link
          className="block text-center my-5 text-slate-500 uppercase text-sm"
          to="/"
        >
          ¿Ya tienes una cuenta? Inicia Sesión
        </Link>
        <Link
          className="block text-center my-5 text-slate-500 uppercase text-sm"
          to="/registrar"
        >
          ¿No tienes una cuenta? Regístrate
        </Link>
      </nav>
    </>
  );
};

export default RecuperarPassword;
