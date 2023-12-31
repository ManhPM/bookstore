"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Provider extends Model {
    static associate({ Import_invoice }) {
      this.hasMany(Import_invoice, { foreignKey: "id_provider" });
    }
  }
  Provider.init(
    {
      id_provider: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      phone: DataTypes.STRING,
      address: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Provider",
      timestamps: false,
    }
  );
  return Provider;
};
