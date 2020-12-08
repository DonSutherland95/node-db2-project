
exports.up = function(knex) {
  return knex.schema.createTable('cars', table =>{
      table.increments();
      table.text('model', 128).notNullable();
      table.float('price').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
