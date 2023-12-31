"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Wishlist extends Model {
    static associate({ User, Item }) {
      this.belongsTo(User, { foreignKey: "id_user" });
      this.belongsTo(Item, { foreignKey: "id_item" });
    }
  }
  Wishlist.init(
    {
      id_item: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      id_user: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
    },
    {
      sequelize,
      modelName: "Wishlist",
      timestamps: false,
    }
  );
  return Wishlist;
};
