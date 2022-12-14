import { Application, json, urlencoded } from 'express'
import http from 'http'
import cors from 'cors'
import helmet from 'helmet'
import hpp from 'hpp'
import cookieSession from 'cookie-session'
import compression from 'compression'
import { config } from './config'

export class CUTTeventsSERVER {
  private app: Application
  constructor(app: Application) {
    this.app = app
  }

  public start(): void {
    this.securityMiddleware(this.app)
    this.standardMiddleware(this.app)
    this.routesMiddleware(this.app)
    this.globalErrorHandler(this.app)
    this.startServer(this.app)
  }

  private securityMiddleware(app: Application): void {
    app.use(
      cookieSession({
        name: 'session',
        keys: [config.SECRET_KEY_ONE!, config.SECRET_KEY_TWO!],
        maxAge: 24 * 7 * 60 * 60 * 1000, // 7 days
        secure: config.NODE_ENV !== 'development'
      })
    )
    app.use(hpp())
    app.use(helmet())
    app.use(
      cors({
        origin: config.FRONTEND_URL,
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS']
      })
    )
  }
  private standardMiddleware(app: Application): void {
    app.use(compression())
    app.use(json({ limit: '50mb' }))
    app.use(urlencoded({ extended: true, limit: '50mb' }))
  }
  private routesMiddleware(app: Application): void {}
  private globalErrorHandler(app: Application): void {}
  private async startServer(app: Application): Promise<void> {
    try {
      const httpServer: http.Server = new http.Server(app)
      this.startHttpServer(httpServer)
    } catch (error) {
      console.log(error)
    }
  }

  private createSocketIO(httpServer: http.Server): void {}
  private startHttpServer(httpServer: http.Server): void {
    httpServer.listen(config.PORT, () => {
      console.log(`Server is running on port ${config.PORT}`)
    })
  }
}
