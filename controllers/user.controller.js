const UserModel = require("../models/user.model");
const UserSchema = require("../schemas/user.schema");
const { getErrorStatusCode } = require("../utils/errors");
const BaseController = require("./base.controller");

class UserController extends BaseController {
  constructor() {
    super();
  }

  /**
   * Gets all the Users from the database without filters.
   *
   * @param {Request} req
   * @param {Response} res
   * @returns {Promise<void>}
   */
  async getAll(req, res) {
    try {
      const result = await super._getAll(UserSchema, UserModel);
      res.status(200).json({
        message: "Users successfully retrieved",
        data: result,
      });
    } catch (error) {
      res.status(getErrorStatusCode(error)).json(error);
    }
  }

  /**
   * Gets an Users from the database by its id.
   *
   * @param {Request} req
   * @param {Response} res
   * @returns {Promise<void>}
   */
  async getById(req, res) {
    try {
      const result = await super._getById(
        UserSchema,
        UserModel,
        req.params.user_id
      );

      res.status(200).json({
        message: "User successfully retrieved",
        data: result,
      });
    } catch (error) {
      res.status(getErrorStatusCode(error)).json(error);
    }
  }

  /**
   * Creates a new USER into the database.
   *
   * @param {Request} req
   * @param {Response} res
   * @returns {Promise<void>}
   */
  async create(req, res) {
    try {
      const result = await super._create(UserSchema, UserModel, req.body);

      res
        .status(201)
        .json({ message: "User successfully created", data: result });
    } catch (error) {
      res.status(getErrorStatusCode(error)).json(error);
    }
  }

  /**
   * Updates an User according to the given data and id.
   *
   * @param {Request} req
   * @param {Response} res
   * @returns {Promise<void>}
   */
  async update(req, res) {
    try {
      if (!(await UserSchema.exists({ _id: req.params.user_id }))) {
        res.status(404).json({
          message: "User not found",
        });

        return;
      }

      await super._update(UserSchema, req.body, req.params.user_id);

      res.status(204).send();
    } catch (error) {
      res.status(getErrorStatusCode(error)).json(error);
    }
  }

  /**
   * Deletes an USER from the database according to the given id.
   *
   * @param {Request} req
   * @param {Response} res
   * @returns {Promise<void>}
   */
  async delete(req, res) {
    try {
      if (!(await UserSchema.exists({ _id: req.params.user_id }))) {
        res.status(404).json({
          message: "User not found",
        });

        return;
      }

      await super._delete(UserSchema, req.params.user_id);

      res.status(204).send();
    } catch (error) {
      res.status(getErrorStatusCode(error)).json(error);
    }
  }
}

module.exports = UserController;
