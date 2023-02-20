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
  
}
export { registrar };