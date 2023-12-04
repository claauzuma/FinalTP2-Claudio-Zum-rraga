class ModelMem {
    constructor() {
        this.votos = [

        ]
    }

    obtenerVotos = async () => {    
     return this.votos
   
    }

    guardarVoto = async voto => {
        this.votos.push(voto)
        return voto
    }

}

export default ModelMem