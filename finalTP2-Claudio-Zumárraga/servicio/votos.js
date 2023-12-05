import ModelFactory from "../model/DAO/votosFactory.js"
import { validar } from "./validaciones/votos.js"

class Servicio {
    constructor(persistencia) {
        this.model = ModelFactory.get(persistencia)
    }

    obtenerVotosGrales = async () => {
        const votosGenerales = { generales : { } }
        const votos = await this.model.obtenerVotos()
        const votosCandidatosA = votos.map(v => v.candidato =="candidatoA").reduce((acc,voto) =>acc +voto,0)
        const votosCandidatosB = votos.map(v => v.candidato =="candidatoB").reduce((acc,voto) =>acc +voto,0)
        const votosCandidatosC = votos.map(v => v.candidato =="candidatoC").reduce((acc,voto) =>acc +voto,0)
        const votosEnBlanco = votos.map(v => v.candidato =="enblanco").reduce((acc,voto) =>acc +voto,0)
        votosGenerales.generales.candidatoA = votosCandidatosA
        votosGenerales.generales.candidatoB = votosCandidatosB
        votosGenerales.generales.candidatoC = votosCandidatosC
        votosGenerales.generales.enblanco = votosEnBlanco
        return votosGenerales
    }   
    

    guardarVoto = async voto => {
        const res = validar(voto)
        if(res =="") {
            await this.model.guardarVoto(voto)
            const votoCargado = "Voto cargado"
            return votoCargado
        }
        else {
            console.log(res)
            throw new Error(res)
        }
    }

}

export default Servicio