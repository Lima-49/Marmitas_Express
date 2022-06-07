const mongoose = require("mongoose");

const pedidoSchema = mongoose.Schema({
  pedidos: String,
});

const Pedido = (module.exports = mongoose.model("pedido", pedidoSchema));

module.exports.get = function (callback, limit) {
  Pedido.find(callback).limit(limit);
};
