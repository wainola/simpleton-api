module.exports = {
  insertClient: `
    INSERT INTO CLIENT(nombre, apellido, email, telefono, razon, direccion) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;
  `
};
