import { useState } from 'react';
import { Link } from "react-router-dom";
import Alerta from '../components/Alerta';
import axios from 'axios';

const Registrar = () => {

const [ nombre, setNombre ] = useState('');
const [ email, setEmail] = useState('');
const [ password, setContraseña ] = useState('');
const [ repetirContraseña, setRepetirContraseña ] = useState('');
const [ alerta, setAlerta ] = useState({});


const handleSubmit = async e => {
    e.preventDefault();

    if ([nombre, email, password, repetirContraseña].includes('')) {
        setAlerta({
            msg: 'Todos los campos son obligatorios',
            error: true
        })
        return
    }
    if ( password !== repetirContraseña ) {
        setAlerta({
            msg: 'Las contraseñas no coinciden, tienen que ser iguales',
            error: true
        })
        return
    }
    if ( password.length < 8 ) {
        setAlerta({
            msg: 'Las contraseñas debe tener mínimo 8 caracteres',
            error: true
        })
        return
    }

    setAlerta({})

    // Crear el usuario en la API
    try {
        const { data } = await axios.post('http://localhost:4500/api/usuarios', {
            nombre, email, password
        } )
        setAlerta({ 
            msg: data.msg,
            error: false
        })
        
    } catch (error) {
       setAlerta({
           msg: error.response.data.msg,
           error: true
       }) 
    }
    
}

const { msg } = alerta;

  return (
    <>
      <h1 className="text-teal-500 font-black text-4xl capitalize">
        Crea tu cuenta y administra la lista de tu {""}
        <span className="text-teal-700"> bebé</span>
      </h1>

    { msg && <Alerta alerta={alerta} /> }

      <form className="my-10 bg-white shadow rounded-lg p-10"
        onSubmit={handleSubmit}
      >
        <div className="my-5">
          <label
            className="uppercase text-teal-700 block text-xl font-bold"
            htmlFor="nombre"
          >
            Nombre
          </label>
          <input
            id="nombre"
            type="nombre"
            placeholder="Tu Nombre"
            className="w-full mt-3 p-3 border rounded-xl bg-teal-50"
            value={ nombre }
            onChange= {e => setNombre(e.target.value) }
          />
        </div>
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
            value={ email }
            onChange= {e => setEmail(e.target.value) }
          />
        </div>
        <div className="my-5">
          <label
            className="uppercase text-teal-700 block text-xl font-bold"
            htmlFor="password"
          >
            Contraseña
          </label>
          <input
            id="password"
            type="password"
            placeholder="Contraseña de Registro"
            className="w-full mt-3 p-3 border rounded-xl bg-teal-50"
            value={ password }
            onChange= {e => setContraseña(e.target.value) }
          />
        </div>
        <div className="my-5">
          <label
            className="uppercase text-teal-700 block text-xl font-bold"
            htmlFor="password2"
          >
            Repetir Contraseña
          </label>
          <input
            id="password2"
            type="password"
            placeholder="Repetir tu Contraseña"
            className="w-full mt-3 p-3 border rounded-xl bg-teal-50"
            value={ repetirContraseña }
            onChange= {e => setRepetirContraseña(e.target.value) }
          />
        </div>
        <input
          type="submit"
          value="Crear Cuenta"
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
          to="/recuperar-password"
        >
          Olvidé Mi Password
        </Link>
      </nav>
    </>
  );
};

export default Registrar;
