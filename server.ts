import dotenv from 'dotenv'
import mongoose from 'mongoose'
import app from './src/app'
import dbConnect from './src/config/mongo'

dotenv.config({ path: './config.env' })

mongoose.connection.on('disconnected', () => console.log('disconnected'))
mongoose.connection.on('connected', () => console.log('connected'))

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  dbConnect()
  console.log(`Server running on port ${PORT}`)
})
