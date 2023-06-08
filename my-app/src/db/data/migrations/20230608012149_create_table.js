/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('notes', function(table) {
      table.string('id', 64).notNullable().unique().primary();
      table.string('title', 64).nullable();
      table.string('content', 1024).nullable();
      table.string('updateDay', 16).notNullable();
    });
};
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('notes');
};
