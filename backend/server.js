import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import cors from 'cors'
import fabRoutes from './routes/fabRoutes.js'
import productRoutes from './routes/productRoutes.js'
import colors from 'colors'
import path from 'path'

//Cuando se agregan archivos (de cualquier tipo) seguir el ejemplo: import products from './data/products.js'
const __dirname = path.resolve()
dotenv.config();

connectDB()

const app = express()


app.use('/api/products', productRoutes)
app.use('/api/fabs', fabRoutes)

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, '/frontend/build')))
    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html')))
} else {
    app.get('/', (req, res) => {
        res.send('API is running...')
    })
}

app.use(cors())

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on  port on port ${PORT}`.yellow.bold))