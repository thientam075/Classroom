
exports.up = function(knex) {
    return knex.schema.createTable('sticker', (table) => {
        table.increments();
        table.text('title');
        table.text('description');
        table.float('rating');
        table.text('URL');
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('sticker');
};
