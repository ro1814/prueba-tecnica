import mongoose from 'mongoose'

const fabSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    cif: {
        type: String,
        required: true,
        unique: true
    },
    direccion: {
        type: String,
        require: true
    }
}, {
    timestamps: true
})

const Fabrica = mongoose.model('Fabrica', fabSchema)

export default Fabrica