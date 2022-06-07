class UserModel {
    constructor(
      id,
      name,
      adress,
      phone,
      pedidos,
      price,

    ) {
      this.id = id;
      this.name = name;
      this.adress = adress;
      this.phone = phone;
      this.pedidos = pedidos
      this.price = price;
    }
  }
  
  module.exports = UserModel;
  