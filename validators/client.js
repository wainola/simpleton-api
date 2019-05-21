const Joi = require('joi');

module.exports = Joi.object().keys({
  nombre: Joi.string().required(),
  apellido: Joi.string().required(),
  email: Joi.string()
    .email()
    .required(),
  telefono: Joi.string().required(),
  razon: Joi.string().required(),
  direccion: Joi.string().required()
});
