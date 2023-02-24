import Lista from '../models/Lista.js';
import Regalo from '../models/Regalo.js';

const agregarRegalo = async (req, res) => {
    // console.log(req.body);   
    const { lista } = (req.body);

    const listaExiste = await Lista.findById(lista);

    if (!listaExiste) {
        const error = new Error("La lista no existe");
        return res.status(404).json({ msg: error.message });
    }

    if (listaExiste.creador.toString() !== req.usuario._id.toString()) {
        const error = new Error("No tienes permisos para añadir regalos");
        return res.status(403).json({ msg: error.message });
    }

    try {
        const regaloAlmacenado = await Regalo.create(req.body);
        res.json(regaloAlmacenado);
    } catch (error) {
        console.log(error);        
    }

//     console.log(listaExiste);    
};

const obtenerRegalo = async (req, res) => {
    const { id } = req.params;

    const regalo = await Regalo.findById(id).populate("lista");

    if (!regalo) {
        const error = new Error("No se encuentra el regalo");
        return res.status(404).json({ msg: error.message });
    }

    if (regalo.lista.creador.toString() !== req.usuario._id.toString()) {
        const error = new Error("Acción no válida");
        return res.status(403).json({ msg: error.message });
    }
    res.json(regalo);

};

const actualizarRegalo = async (req, res) => {};

const eliminarRegalo = async (req, res) => {};

const cambiarEstado = async (req, res) => {};

export { 
    agregarRegalo,
    obtenerRegalo,
    actualizarRegalo,
    eliminarRegalo,
    cambiarEstado
}