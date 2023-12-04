import express from 'express'
import Controlador from '../controlador/votos.js'


class Router {
    constructor(persistencia) {
        this.router = express.Router()
        this.controlador = new Controlador(persistencia)
    }

    start() {

        this.router.post('/', this.controlador.cargarVoto)
        this.router.get('/generales', this.controlador.obtenerVotosGenerales)
        
        return this.router
    }
}

export default Router

