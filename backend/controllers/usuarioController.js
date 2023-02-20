import Usuario from '../models/Usuario.js';
import generarId from '../helpers/generarId.js';

const registrar = async (req, res) => {
    // evitar registros duplicados
    const { email } = req.body;
    const existeUsuario = await Usuario.findOne({ email });

    if (existeUsuario) {
        const error = new Error("Usuario ya registrado");
        return res.status(400).json({ msg: error.message });
    }
    

    try {
        const user = new Usuario(req.body);
        user.token = generarId();
        const savedUser = await user.save();
        res.json(savedUser);
        
    } catch (error) {
        console.log(error);        
    } 
};

const autenticar = async (req, res) => {
    const { email, password } = req.body;

    // Comprobar si el usuario existe
    const usuario = await Usuario.findOne({ email })
    // console.log(usuario);
    if (!usuario) {
        const error = new Error("El usuario no existe");
        return res.status(404).json({ msg: error.message });
    }

    // Comprobar si el usuario esta confirmado
    if (!usuario.confirmado) {
        const error = new Error("Tu cuenta no ha sido confirmada");
        return res.status(403).json({ msg: error.message });
    }

    // Comprobar su password
    if (await usuario.comprobarPassword(password)) {
        res.json({
            _id: usuario._id,
            nombre: usuario.nombre,
            email: usuario.email,
        })
    } else {
        const error = new Error("El password es incorrecto");
        return res.status(403).json({ msg: error.message });      
    }

}

export { registrar, autenticar };