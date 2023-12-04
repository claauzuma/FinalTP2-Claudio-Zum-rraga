import express from 'express'
import Controlador from '../controlador/reservas.js'


class Router {
    constructor(persistencia) {
        this.router = express.Router()
        this.controlador = new Controlador(persistencia)
    }

    start() {
        this.router.get('/', this.controlador.obtenerReservas)
        this.router.get('/', this.controlador.obtenerDiversidadMenues)
        this.router.post('/', this.controlador.guardarReserva)
        


        return this.router
    }
}

export default Router

