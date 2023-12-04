import Servicio from '../servicio/votos.js'


class Controlador {
    constructor(persistencia) {
        this.servicio = new Servicio(persistencia)
    }

    obtenerVotosGenerales = async (req, res) => {
        try {
            const votosGenerales = await this.servicio.obtenerVotosGrales()
            res.json(votosGenerales)
        } catch {
            res.status(500).json({ error: error.message })

        }

    }

    cargarVoto = async (req, res) => {
        try {
            const voto = req.body
            const votoGuardado = await this.servicio.guardarVoto(voto)
            res.json(votoGuardado)
    
        }
        catch (error) {
            res.status(500).json({ error: error.message })
        }
    }


}

export default Controlador
