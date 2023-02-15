import Usuario from '../models/Usuario.js';

const registrar = async (req, res) => {

    try {
        const user = new Usuario(req.body);
        const savedUser = await user.save();
        res.json(savedUser);
        
    } catch (error) {
        console.log(error);        
    }    
  
}
export { registrar };