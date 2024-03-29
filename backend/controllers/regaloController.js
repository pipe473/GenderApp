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
        // Almacenar el ID en la lista
        listaExiste.regalos.push(regaloAlmacenado._id);
        await listaExiste.save();
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

const actualizarRegalo = async (req, res) => {
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

    regalo.nombre = req.body.nombre || regalo.nombre;
    regalo.descripcion = req.body.descripcion || regalo.descripcion;
    regalo.seleccion = req.body.seleccion || regalo.seleccion;
    regalo.fechaEvento = req.body.fechaEvento || regalo.fechaEvento;

    try {
        const regaloAlmacenado = await regalo.save();
        res.json(regaloAlmacenado);
    } catch (error) {
        console.log(error);
    }

};

const eliminarRegalo = async (req, res) => {
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

    try {
        const lista = await Lista.findById(regalo.lista)
        lista.regalos.pull(regalo._id);

        await Promise.allSettled([await lista.save(), await regalo.deleteOne()]);


        await regalo.deleteOne();
        res.json({ msg: "El regalo se ha eliminado correctamente" })
    } catch (error) {
        console.log(error);
    }
};

const cambiarEstado = async (req, res) => {
    const { id } = req.params;
    const regalo = await Regalo.findById(id).populate("lista");
    

    if (!regalo) {
        const error = new Error("No se encuentra el regalo");
        return res.status(404).json({ msg: error.message });
    }  

    if (regalo.lista.creador.toString() !== req.usuario._id.toString() && 
    !regalo.lista.colaboradores.some( 
         (colaborador) => colaborador._id.toString() === req.usuario._id.toString() )) {
        const error = new Error("Acción no válida, no tienes los permisos para acceder a esta lista");
        return res.status(401).json({ msg: error.message });  
    }  

    regalo.estado = !regalo.estado;
    regalo.elegido = req.usuario._id;
    await regalo.save();

    const regaloAmacenado = await Regalo.findById(id).populate("lista").populate("elegido");

    res.json(regaloAmacenado)
};

export { 
    agregarRegalo,
    obtenerRegalo,
    actualizarRegalo,
    eliminarRegalo,
    cambiarEstado
}