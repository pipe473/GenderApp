import mongoose from 'mongoose';

const regaloSchema = mongoose.Schema({
    nombre: {
        type: String,
        trim: true,
        required: true
    },
    descripcion: {
        type: String,
        trim: true,
        required: true
    },
    estado: {
        type: Boolean,
        default: false
    },
    fechaEvento: {
        type: Date,
        required: true,
        default: Date.now(),
    },
    seleccion: {
        type: String,
        required: true,
        enum: ['Me lo pido', 'Me lo pienso', 'Comprado']
    },
    lista: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Lista',
    }
},
{
    timestamps: true
});

const Regalo = mongoose.model("Regalo", regaloSchema);

export default Regalo;