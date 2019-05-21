const queries = require('./queries');
const Errors = require('../../errors');
const ClientEmail = require('../../email');

class ClientModel {
  static async postClient(data, database, response) {
    const dataToInsert = [
      data.nombre,
      data.apellido,
      data.email,
      data.telefono,
      data.razon,
      data.direccion
    ];

    try {
      const insertClient = await database.query(queries.insertClient, dataToInsert);

      if (insertClient.rows.length) {
        ClientEmail.sendEmail({}, {});
      }

      return response.status(200).send({ insertion: true, data: insertClient.rows });
    } catch (err) {
      return response.status(500).send({ msg: Errors[500], meta: err });
    }
  }
}

module.exports = ClientModel;
