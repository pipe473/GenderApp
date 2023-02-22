import { mongoose } from 'mongoose';

const listaSchema = mongoose.Schema({
    nombre: {
        type: String,
        trim: true,
        required: true
    },
    descripcion: {
        type:  String,
        trim: true,
        required: true
    },
    fechaEvento: {
        type: Date,
        default: Date.now(),
    },
    invitado: {
        type:  String,
        trim: true,
        required: true
    },
    creador: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Usuario",
    },
    colaboradores: [

        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Usuario",
        },
    ],
}, 
    {
        timestamps: true
    }
);

const Lista = mongoose.model("Lista", listaSchema );

export default Lista;
