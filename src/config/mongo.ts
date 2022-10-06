import dotenv from 'dotenv'
import { connect } from 'mongoose'

dotenv.config({ path: './config.env' })

const DB_URI = <string>(
  process.env.DATABASE?.replace(
    '<PASSWORD>',
    <string>process.env.DATABASE_PASSWORD
  )
)

const dbConnect = async (): Promise<void> => {
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

export default dbConnect
