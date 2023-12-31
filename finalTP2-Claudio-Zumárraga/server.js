
import express from 'express'
import RouterVotos from './router/votos.js'


class Server {

    constructor(port, persistencia) {
        this.port = port
        this.persistencia = persistencia
        this.app = express()
        this.server = null
    }

    async start() {
        this.app.use(express.json())
        this.app.use(express.urlencoded({extended: true}))

        this.app.use(express.static('public'))


        this.app.use('/api/votos', new RouterVotos(this.persistencia).start())

    
        const PORT = this.port
        this.server = this.app.listen(PORT, () => console.log(`Servidor express escuchando en http://localhost:${PORT}`))
        this.server.on('error', error => console.log(`Error en servidor: ${error.message}`))

        return this.app
    }


}


export default Server