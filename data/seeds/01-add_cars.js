
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {model: 'BMW', price: 55000.00},
        {model: 'Ford', price: 25000.00},
        {model: 'Lexus', price: 75000.00}
      ]);
    });
};
