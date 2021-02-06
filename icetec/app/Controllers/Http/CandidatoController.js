'use strict'

const Candidatos = use("App/Models/Candidato")

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with candidatoes
 */
class CandidatoController {

  async index ({ request, response, view }) {
    const candidatos = Candidatos.all();
    return candidatos
  }


  async store ({ request, response }) {
    const data = request.all();
    try {
        const candidato = await Candidato.create(data);
        return user;
    } catch (error) {
        if (error.code === "23505") {
            return response.status(401).send({ error: "Usuário já cadastrado" });
        }
        return response.status(401).send({ error: error });
    }
  }


  async show ({ params, request, response, view }) {
  }

  async edit ({ params, request, response, view }) {
  }

  async update ({ params, request, response }) {
  }

  async destroy ({ params, request, response }) {
  }
}

module.exports = CandidatoController
