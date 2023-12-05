
export const validar = voto => {

let mensajeError ="";
const distritosValidos = ["zona1", "zona2", "zona3", "zona4"];
const candValidos = ["candidatoA","candidatoB","candidatoC","enblanco"];


if(!distritosValidos.includes(voto.distrito))
{
    mensajeError += "Zona no correspondiente -- "

}

if(!candValidos.includes(voto.candidato))
{
    mensajeError += "Candidato no valido"

}


return mensajeError

}