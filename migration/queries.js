const pgcrypto = `CREATE EXTENSION IF NOT EXISTS "pgcrypto"`;

const clientTable = `
DROP TABLE IF EXISTS CLIENT;
CREATE TABLE CLIENT (
  id uuid not null primary key default gen_random_uuid(),
  nombre text not null,
  apellido text not null,
  email text not null,
  telefono text not null,
  razon text not null,
  direccion text not null,
  createdAt timestamp not null default now(),
  updateAt timestamp default null,
  deletedAt timestamp default null
);`;

module.exports = {
  pgcrypto,
  clientTable
};
