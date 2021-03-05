import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import fabs from './data/fabs.js'
import products from './data/products.js'
import Fabrica from './models/fabModel.js'
import Product from './models/productModel.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
    try{
        await Product.deleteMany()
        await Fabrica.deleteMany()
        
        const createdFabs = await Fabrica.insertMany(fabs)

        const adminFab = createdFabs[0]._id

        const sampleProducts = products.map(product => {
            return { ...product, fab: adminFab }
        })

        await Product.insertMany(sampleProducts)

        console.log('Data Imported!'.green.inverse)
        process.exit()


    } catch (error){
        console.error(`${error}`.red.inverse)
        process.exit(1)
    }
}

const destroyData = async () => {
    try{
        await Product.deleteMany()
        await Fabrica.deleteMany()

        console.log('Data Destroyed!'.red.inverse)
        process.exit()


    } catch (error){
        console.error(`${error}`.red.inverse)
        process.exit(1)
    }
}

if(process.argv[2] === '-d'){
    destroyData()
} else {
    importData()
}