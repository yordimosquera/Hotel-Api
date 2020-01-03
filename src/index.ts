import { InfraWeb } from '../src/server'
import { middlewareServer } from './middleware'
import { routesServer } from './routes'
import { connection } from './database/connection'

export default class Server extends InfraWeb {
    constructor() {
        super()
        connection()
        this.use(middlewareServer)
        this.mountRoutes(routesServer)
    }
    public static bootstrap(): Server {
        return new Server()
    }
}

Server.bootstrap().listen()