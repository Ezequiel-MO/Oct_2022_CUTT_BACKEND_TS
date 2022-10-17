import { connect } from 'mongoose'
import mongoose from 'mongoose'
import { config } from './config'

const DB_URI = <string>(
  config.DATABASE?.replace('<PASSWORD>', <string>config.DATABASE_PASSWORD)
)

export const dbConnect = async (): Promise<void> => {
  try {
    const connection = await connect(DB_URI)
    console.log(
      `MongoDB connected: ${connection.connection.host} ${connection.connection.port}`
    )
  } catch (err: any) {
    console.error(`DB connection error: ${err.message}`)
    process.exit(1)
  }
  await connect(DB_URI)
}

mongoose.connection.on('disconnected', connect)
