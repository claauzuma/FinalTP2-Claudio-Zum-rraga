import ModelFile from "./reservasFile.js"
import ModelMem from "./reservasMem.js"


class ModelFactory {
    static get(tipo) {
        switch (tipo) {
            case 'MEM':
                console.log('**** Persistiendo en Memoria ****')
                return new ModelMem()

            case 'FILE':
                console.log('**** Persistiendo en File System ****')
                return new ModelFile()

            default:
                console.log('**** Persistiendo en Memoria (default) ****')
                return new ModelMem()
        }
    }
}

export default ModelFactory