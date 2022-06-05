const mongoose = require("mongoose");

class BaseController {
  BaseController() {}

  /**
   * Gets a model with the given data.
   *
   * @param {Object} Model the model to be get.
   * @param {Object} data the data to be set into the model.
   * @returns {Object} an object representing the model.
   */
  static getModel(Model, data) {
    const model = new Model();
    const props = Object.getOwnPropertyNames(model);
    model.id = data._id;
    model.createDate = data.create_date;
    model.updateDate = data.update_date;

    props.forEach((p) => {
      if (!model[p]) {
        model[p] = data[p];
      }
    });
    return model;
  }

  /**
   * Gets all the elements from the database without filters.
   *
   * @param {mongoose.Model} Schema the schema to be used.
   * @param {Object} Model the model to be used.
   * @returns {Promise<Object[]>} an array of elements representing the database data.
   */
  async _getAll(Schema, Model) {
    const result = await Schema.find({});

    const elements = [];

    result.forEach((element) => {
      elements.push(BaseController.getModel(Model, element));
    });

    return elements;
  }

  /**
   * Gets all the elements from the database without filters.
   *
   * @param {mongoose.Model} Schema the schema to be used.
   * @param {Object} Model the model to be used.
   * @param {string} id the element id.
   * @returns {Promise<Object[]>} an array of elements representing the database data.
   */
  async _getById(Schema, Model, id) {
    const result = await Schema.findById(id);

    if (!result) {
      return null;
    }

    return BaseController.getModel(Model, result);
  }

  /**
   * Creates a new element into the database.
   *
   * @param {mongoose.Model} Schema the schema to be used.
   * @param {Object} Model the model to be used.
   * @param {Object} data the element data.
   * @returns {Promise<Object>} the created element database data.
   */
  async _create(Schema, Model, data) {
    const schema = new Schema({
      ...data,
    });

    await schema.validate();
    const result = await schema.save();
    return BaseController.getModel(Model, result);
  }

  /**
   * Updates an element according to the given data and id.
   *
   * @param {mongoose.Model} Schema the schema to be used.
   * @param {Object} data the element data.
   * @param {string} id the element id.
   * @returns {Promise<void>} the created element database data.
   */
  async _update(Schema, data, id) {
    await Schema.updateOne({ _id: id }, { ...data, update_date: Date.now() });
  }

  /**
   * Deletes an annotation from the database according to the given id.
   *
   * @param {mongoose.Model} Schema the schema to be used.
   * @param {string} id the element id.
   * @returns {Promise<void>}
   */
  async _delete(Schema, id) {
    await Schema.deleteOne({
      _id: id,
    });
  }
}

module.exports = BaseController;