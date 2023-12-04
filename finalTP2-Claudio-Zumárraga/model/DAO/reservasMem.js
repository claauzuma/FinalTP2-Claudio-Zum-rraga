class ModelMem {
    constructor() {
        this.reservas = [

        ]
    }

    obtenerReservas = async () => {    
         return this.reservas
        
    }

    guardarReserva = async reserva => {
        this.reservas.push(reserva)
        return reserva
    }

    actualizarProducto = async (id, producto) => {
        producto.id = id

        const index = this.productos.findIndex( producto => producto.id === id )
        if(index != -1) {
            const productoAnt = this.productos[index]
            const productoNuevo = { ...productoAnt, ...producto }
            this.productos.splice(index,1,productoNuevo)
            return productoNuevo
        }
        else {
            this.productos.push(producto)
            return producto
        }
    }

    borrarProducto = async id => {
        let producto = {}

        const index = this.productos.findIndex( producto => producto.id === id )
        if(index != -1) {
            producto = this.productos.splice(index,1)[0]
        }
        return producto    
    }
}

export default ModelMem