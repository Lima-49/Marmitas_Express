const PedidoModel = require("../models/pedidos.model");
const PedidoSchema = require("../schemas/pedidos.schema");
const { getErrorStatusCode } = require("../utils/errors");
const BaseController = require("./base.controller");

class PedidoController extends BaseController {
  constructor() {
    super();
  }

  /**
   * Gets all the Pedidos from the database without filters.
   *
   * @param {Request} req
   * @param {Response} res
   * @returns {Promise<void>}
   */
  async getAll(req, res) {
    try {
      const result = await super._getAll(PedidoSchema, PedidoModel);
      res.status(200).json({
        message: "Pedido successfully retrieved",
        data: result,
      });
    } catch (error) {
      res.status(getErrorStatusCode(error)).json(error);
    }
  }

  /**
   * Gets an pedidos from the database by its id.
   *
   * @param {Request} req
   * @param {Response} res
   * @returns {Promise<void>}
   */
  async getById(req, res) {
    try {
      const result = await super._getById(
        PedidoSchema,
        PedidoModel,
        req.params.pedido_id
      );

      res.status(200).json({
        message: "Pedido successfully retrieved",
        data: result,
      });
    } catch (error) {
      res.status(getErrorStatusCode(error)).json(error);
    }
  }

  /**
   * Creates a new PEDIDO into the database.
   *
   * @param {Request} req
   * @param {Response} res
   * @returns {Promise<void>}
   */
  async create(req, res) {
    try {
      const result = await super._create(PedidoSchema, PedidoModel, req.body);

      res
        .status(201)
        .json({ message: "Pedido successfully created", data: result });
    } catch (error) {
      res.status(getErrorStatusCode(error)).json(error);
    }
  }

  /**
   * Updates an Pedido according to the given data and id.
   *
   * @param {Request} req
   * @param {Response} res
   * @returns {Promise<void>}
   */
  async update(req, res) {
    try {
      if (!(await PedidoSchema.exists({ _id: req.params.pedido_id }))) {
        res.status(404).json({
          message: "Pedido not found",
        });

        return;
      }

      await super._update(PedidoSchema, req.body, req.params.pedido_id);

      res.status(204).send();
    } catch (error) {
      res.status(getErrorStatusCode(error)).json(error);
    }
  }

  /**
   * Deletes an Pedido from the database according to the given id.
   *
   * @param {Request} req
   * @param {Response} res
   * @returns {Promise<void>}
   */
  async delete(req, res) {
    try {
      if (!(await PedidoSchema.exists({ _id: req.params.pedido_id }))) {
        res.status(404).json({
          message: "Pedido not found",
        });

        return;
      }

      await super._delete(PedidoSchema, req.params.pedido_id);

      res.status(204).send();
    } catch (error) {
      res.status(getErrorStatusCode(error)).json(error);
    }
  }
}

module.exports = PedidoController;
