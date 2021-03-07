import mongoose from 'mongoose'

const productSchema = mongoose.Schema ({
    fab: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref:'Fabrica',
    },
    nombre:{
        type: String,
        required:true
    },
    relevancia: {
        type: Number,
        required: true,
        default: 0
    },
    precio: {
        type: String,
        required: true,
    },
    imagen:{
        type: String,
        required: false
    }
}, {
    timestamps: true
})

const Product = mongoose.model('Product', productSchema)

export default Product