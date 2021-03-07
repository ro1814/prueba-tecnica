import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import cors from 'cors'
import fabRoutes from './routes/fabRoutes.js'
import productRoutes from './routes/productRoutes.js'

//Cuando se agregan archivos (de cualquier tipo) seguir el ejemplo: import products from './data/products.js'

dotenv.config();

connectDB()

const app = express()

app.get('/', (req, res) => {
    res.send('API is running...')
})

app.use('/api/products', productRoutes)
app.use('/api/fabs', fabRoutes)


app.use(cors())

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on  port on port ${PORT}`.yellow.bold))