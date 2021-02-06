'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CandidatoSchema extends Schema {
  up () {
    this.create('candidatoes', (table) => {
      table.increments()
      table.string('nome')
      table.string('email')
      table.date('data_nascimento')
      table.string('linkedin')
      table.string('skills')
      table.timestamps()
    })
  }

  down () {
    this.drop('candidatoes')
  }
}

module.exports = CandidatoSchema
