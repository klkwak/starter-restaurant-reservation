const knex = require("../db/connection");
const tableName = "tables";

function list() {
  return knex(tableName).select("*").orderBy("table_name", "asc");
}

function create(table) {
  return knex(tableName)
    .insert(table)
    .returning("*")
    .then((createdRecords) => createdRecords[0]);
}

function update(table_id, reservation_id) {
  return knex(tableName)
    .update({ reservation_id })
    .where({ table_id })
    .then((updatedRecords) => updatedRecords[0]);
}

module.exports = {
  list,
  create,
  update,
};
