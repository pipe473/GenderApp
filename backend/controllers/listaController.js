import Lista from '../models/Lista.js';

const obtenerListas = async (req, res) => {
    const listas = await Lista.find().where('creador').equals(req.usuario);

    res.json(listas);
};

const nuevaLista = async (req, res) => {
    // console.log(req.body);    
    // console.log(req.usuario);
    const lista = new Lista(req.body);

    lista.creador = req.usuario._id;

    try {
        const listaAlmacenada = await lista.save();
        res.json(listaAlmacenada);
    } catch (error) {
        console.log(error);        
    }
    
};

const obtenerLista = async (req, res) => {};

const editarLista = async (req, res) => {};

const eliminarLista = async (req, res) => {};

const agregarInvitado = async (req, res) => {};

const eliminarInvitado = async (req, res) => {};

const obtenerListaProductos = async (req, res) => {};

export {
    obtenerListas,
    nuevaLista,
    obtenerLista,
    editarLista,
    eliminarLista,
    agregarInvitado,
    eliminarInvitado,
    obtenerListaProductos
}