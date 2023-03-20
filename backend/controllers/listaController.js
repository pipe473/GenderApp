import Lista from '../models/Lista.js';
import Regalo from '../models/Regalo.js';

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

const obtenerLista = async (req, res) => {
    const { id } = req.params;

    const lista = await Lista.findById(id);

    if (!lista) {
       const error = new Error("Lista no encontrada");
       return res.status(404).json({ msg: error.message });  
    }   

    if (lista.creador.toString() !== req.usuario._id.toString() ) {
        const error = new Error("Acción no válida, no tienes los permisos para acceder a esta lista");
        return res.status(401).json({ msg: error.message });  
    }  

    //  Obtener los regalos de la lista
    //  const regalos = await Regalo.find().where("lista").equals(lista._id);
    //  console.log(regalo);    

    res.json(lista);
};

const editarLista = async (req, res) => {
    const { id } = req.params;

    const lista = await Lista.findById(id);

    if (!lista) {
       const error = new Error("Lista no encontrada");
       return res.status(404).json({ msg: error.message });  
    }   

    if (lista.creador.toString() !== req.usuario._id.toString() ) {
        const error = new Error("Acción no válida, no tienes los permisos para acceder a esta lista");
        return res.status(401).json({ msg: error.message });  
    }  

    lista.nombre = req.body.nombre || lista.nombre;
    lista.descripcion = req.body.descripcion || lista.descripcion;
    lista.fechaEvento = req.body.fechaEvento || lista.fechaEvento;
    lista.invitada = req.body.invitada || lista.invitada;

    try {
        const listaAlmacenada = await lista.save();
        res.json(listaAlmacenada);
    } catch (error) {
        console.log(error);        
    }
};

const eliminarLista = async (req, res) => {
    const { id } = req.params;

    const lista = await Lista.findById(id);

    if (!lista) {
       const error = new Error("Lista no encontrada");
       return res.status(404).json({ msg: error.message });  
    }   

    if (lista.creador.toString() !== req.usuario._id.toString() ) {
        const error = new Error("Acción no válida, no tienes los permisos para acceder a esta lista");
        return res.status(401).json({ msg: error.message });  
    }  

    try {
        await lista.deleteOne();
        res.json({ msg: "Lista eliminada correctamente" });
    } catch (error) {
        console.log(error);        
    }
};

const agregarInvitado = async (req, res) => {};

const eliminarInvitado = async (req, res) => {};


export {
    obtenerListas,
    nuevaLista,
    obtenerLista,
    editarLista,
    eliminarLista,
    agregarInvitado,
    eliminarInvitado
}