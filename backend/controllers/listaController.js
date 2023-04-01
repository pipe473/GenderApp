import Lista from '../models/Lista.js';
import Usuario from '../models/Usuario.js';

const obtenerListas = async (req, res) => {
    const listas = await Lista.find()
        .where('creador')
        .equals(req.usuario)
        .select('-regalos');

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

    const lista = await Lista.findById(id)
        .populate('regalos')
        .populate('colaboradores', 'nombre email');

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

const buscarInvitado = async (req, res) => {
    const {email} = req.body;    
    const usuario = await Usuario.findOne({email}).select('-confirmado -createdAt -password -token -updatedAt -__v')

    if (!usuario) {
        const error = new Error("EMail de usuario invitado no encontrado");
        return res.status(404).json({msg: error.message})
    }

    res.json(usuario)
};

const agregarInvitado = async (req, res) => {
    // console.log(req.params.id);    
    const lista = await Lista.findById(req.params.id)

    if (!lista) {
        const error = new Error("Lista no encontrada");
        return res.status(404).json({msg: error.message})
    }

    if (lista.creador._id.toString() !== req.usuario._id.toString()) {
        const error = new Error("No tienes permisos para añadir invitados, la lista no ha sido creada por ti");
        return res.status(404).json({msg: error.message})
    }

    // console.log(req.body);    

    const {email} = req.body;    
    const usuario = await Usuario.findOne({email}).select('-confirmado -createdAt -password -token -updatedAt -__v')

    if (!usuario) {
        const error = new Error("EMail de usuario invitado no encontrado");
        return res.status(404).json({msg: error.message})
    }

    // El invitado no es el admin de la lista
    if (lista.creador.toString() === usuario._id.toString()) {
        const error = new Error("El creador de la lista no puede ser uno de los colaboradores invitad@s");
        return res.status(404).json({msg: error.message})
    }

    // Revisar que ya no este agragado a la lista
    if (lista.colaboradores.includes(usuario._id)) {
        const error = new Error("El usuario ya pertenece a la lista");
        return res.status(404).json({msg: error.message})
    }

    // Si todo se cumple ok
    lista.colaboradores.push(usuario._id);
    await lista.save();
    res.json({ msg: 'Invitad@ colaborador agregado correctamente'})
};

const eliminarInvitado = async (req, res) => {
     // console.log(req.params.id);    
     const lista = await Lista.findById(req.params.id)

     if (!lista) {
         const error = new Error("Lista no encontrada");
         return res.status(404).json({msg: error.message})
     }
 
     if (lista.creador._id.toString() !== req.usuario._id.toString()) {
         const error = new Error("No tienes permisos para añadir invitados, la lista no ha sido creada por ti");
         return res.status(404).json({msg: error.message})
     }
 
     // console.log(req.body);    
 
     const {email} = req.body;    
 
      // Si todo se cumple ok se puede eliminar
    lista.colaboradores.pull(req.body.id);     

    await lista.save();
    res.json({ msg: 'Invitad@ colaborador eliminado correctamente'})
};


export {
    obtenerListas,
    nuevaLista,
    obtenerLista,
    editarLista,
    eliminarLista,
    buscarInvitado,
    agregarInvitado,
    eliminarInvitado
}