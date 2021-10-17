
exports.up = function(knex) {
    return knex.schema.createTable('classroom', (table) => {
        table.increments();
        table.text('title');
        table.text('description');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('classroom');
};
