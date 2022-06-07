const express = require('express')
const router = express.Router()

//ROI ROUTES ----------------------------------
const PedidoController = require('../../controllers/pedidos.controller');
const pedidocontroller = new PedidoController


router.route("/").get(pedidocontroller.getAll)
router.route("/").post(pedidocontroller.create);
router.route("/:pedido_id").get(pedidocontroller.getById)
router.route("/:pedido_id").put(pedidocontroller.update)
router.route("/:pedido_id").delete(pedidocontroller.delete);


module.exports = router
