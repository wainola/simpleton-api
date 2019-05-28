const Joi = require("joi");
const clientValidation = require("../validators/client");
const Errors = require("../errors");
const ClientModel = require("../models/clientModel");

class ClientHandler {
  static async postClient(request, response) {
    const { body, database } = request;

    console.log("body::", body);

    const validate = Joi.validate(body, clientValidation);

    if (validate.error !== null) {
      return response.status(422).send(Errors[422]);
    }

    return ClientModel.postClient(body, database, response);
  }

  static async getClientById(id) {}
}

module.exports = ClientHandler;
