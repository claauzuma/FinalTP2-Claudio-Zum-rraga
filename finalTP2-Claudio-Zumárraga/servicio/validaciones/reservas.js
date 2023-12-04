import Joi from 'joi'

export const validar = reserva =>{

    const reservaSchema = Joi.object({
        fechaReserva: Joi.string().required(),
        nombre: Joi.string().required(),
        telefono: Joi.string().required(),
        cantComensales: Joi.number().min(0),
        preferenciaComensales: Joi.string().valid('Sin tacc', 'Omnivoro', 'Vegano').required()
    })
    const { error } = reservaSchema.validate(reserva)
    if(error) {
        return { result: false, error }
    }
    return { result: true }

}