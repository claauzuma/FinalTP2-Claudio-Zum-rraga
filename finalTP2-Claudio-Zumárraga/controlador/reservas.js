import Servicio from '../servicio/reservas.js'


class Controlador {
    constructor(persistencia) {
        this.servicio = new Servicio(persistencia)
    }

    obtenerReservas = async (req,res) => {
        const reservas = await this.servicio.obtenerReservas()
        res.json(reservas)
    }

    obtenerDiversidadMenues = async (req, res) => {

        if (req.body) {
            const fecha = req.body
            const diversidad = await this.servicio.obtenerDiversidadMenues(fecha)
            return diversidad

        }
        else {
        res.status(400).json({ message: 'error' })
        }
    }




    guardarReserva = async (req,res) => {
        try {
            const reserva = req.body
            const reservaGuardada = await this.servicio.guardarReserva(reserva)
            res.json(reservaGuardada)
            //res.redirect('/')
        }
        catch(error) {
            res.status(500).json({error: error.message})
        }
    }

    // --------- PUT (actualización parcial) ----------
    actualizarProducto = async (req,res) => {
        const { id } = req.params
        const producto = req.body
        const productoActualizado = await this.servicio.actualizarProducto(id, producto)
        res.json(productoActualizado)
    }

    borrarProducto = async (req,res) => {
        const { id } = req.params
        const productoBorrado = await this.servicio.borrarProducto(id)
        res.json(productoBorrado)
    }
}

export default Controlador
