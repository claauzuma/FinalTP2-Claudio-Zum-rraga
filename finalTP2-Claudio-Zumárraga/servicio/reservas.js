import ModelFactory from "../model/DAO/reservasFactory.js"
import { validar } from "./validaciones/reservas.js"

class Servicio {
    constructor(persistencia) {
        this.model = ModelFactory.get(persistencia)
    }

    obtenerReservas = async () => {
        const reservas = await this.model.obtenerReservas()
        return reservas
    }   
    

    obtenerDiversidadMenues = async(fecha) => {
        const reservas = this.obtenerReservas();
        const reservasAPartirDeFecha = reservas.filter(reserva => reserva.fecha >= fecha)

    }


    guardarReserva = async reserva => {
        const res = validar(reserva)
        if(res.result) {
            const reservaGuardada = await this.model.guardarReserva(reserva)
            return reservaGuardada
        }
        else {
            console.log(res.error)
            throw res.error
        }
    }

    actualizarProducto = async (id, producto) => {
        const productoActualizado = await this.model.actualizarProducto(id,producto)
        return productoActualizado
    }

    borrarProducto = async id => {
        const productoBorrado = await this.model.borrarProducto(id)
        return productoBorrado
    }
}

export default Servicio