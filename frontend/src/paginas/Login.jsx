import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <h1 className="text-teal-500 font-black text-4xl capitalize">
        Inicia sesión y administra la lista{" "}
        <span className="text-teal-700">de tu bebé</span>
      </h1>
      <form className="my-10 bg-white shadow rounded-lg p-10">
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
          />
        </div>
        <div className="my-5">
          <label
            className="uppercase text-teal-700 block text-xl font-bold"
            htmlFor="email"
          >
            Contraseña
          </label>
          <input
            id="password"
            type="password"
            placeholder="Contraseña de Registro"
            className="w-full mt-3 p-3 border rounded-xl bg-teal-50"
          />
        </div>
        <input
          type="submit"
          value="Iniciar Sesión"
          className="bg-teal-700 w-full mb-5 py-3 text-white uppercase font-bold rounded-xl hover:cursor-pointer hover:bg-teal-800 trasition-colors"
        />
      </form>
      <nav className="lg:flex lg:justify-between">
        <Link
          className="block text-center my-5 text-slate-500 uppercase text-sm"
          to="registrar"
        >
          ¿No tienes una cuenta? Regístrate
        </Link>
        <Link
          className="block text-center my-5 text-slate-500 uppercase text-sm"
          to="recuperar-password"
        >
          Olvidé Mi Password
        </Link>
      </nav>
    </>
  );
};

export default Login;
