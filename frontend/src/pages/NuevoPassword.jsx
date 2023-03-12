import { Link } from "react-router-dom";

const NuevoPassword = () => {
  return (
    <>
      <h1 className="text-teal-500 font-black text-4xl capitalize">
        Recupera tu acceso y sigue{" "}
        <span className="text-teal-700">con tu lista</span>
      </h1>
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
      <nav className="lg:flex lg:justify-between">
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
      </nav>
    </>
  );
};

export default NuevoPassword;
