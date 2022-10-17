import dotenv from 'dotenv'

dotenv.config({
  path: './config.env'
})

class Config {
  public DATABASE: string | undefined
  public DATABASE_PASSWORD: string | undefined
  public NODE_ENV: string | undefined
  public PORT: string | undefined
  public JWT_SECRET: string | undefined
  public JWT_EXPIRES_IN: string | undefined
  public JWT_COOKIE_EXPIRES_IN: string | undefined
  public FRONTEND_URL: string | undefined
  public S3_BUCKET_NAME: string | undefined
  public AWS_ACCESS_KEY_ID: string | undefined
  public AWS_SECRET_ACCESS_KEY: string | undefined
  public AWS_REGION: string | undefined
  public SECRET_KEY_ONE: string | undefined
  public SECRET_KEY_TWO: string | undefined

  private readonly DEFAULT_DATABASE_URL: string =
    'mongodb+srv://XaviLaia:BrI6SYHBmQyixtKc@cluster0.rljgj.mongodb.net/projects?retryWrites=true&w=majority'

  constructor() {
    this.DATABASE = process.env.DATABASE || this.DEFAULT_DATABASE_URL
    this.DATABASE_PASSWORD = process.env.DATABASE_PASSWORD
    this.NODE_ENV = process.env.NODE_ENV
    this.PORT = process.env.PORT
    this.JWT_SECRET = process.env.JWT_SECRET
    this.JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN
    this.JWT_COOKIE_EXPIRES_IN = process.env.JWT_COOKIE_EXPIRES_IN
    this.FRONTEND_URL = process.env.FRONTEND_URL
    this.S3_BUCKET_NAME = process.env.S3_BUCKET_NAME
    this.AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID
    this.AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY
    this.AWS_REGION = process.env.AWS_REGION
    this.SECRET_KEY_ONE = process.env.SECRET_KEY_ONE
    this.SECRET_KEY_TWO = process.env.SECRET_KEY_TWO
  }

  public validateConfig(): void {
    for (const [key, value] of Object.entries(this)) {
      if (value === undefined) {
        throw new Error(`Missing config value for ${key}`)
      }
    }
  }
}

export const config: Config = new Config()
