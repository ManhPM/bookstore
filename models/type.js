"use strict";
import { Model } from "sequelize";
module.exports = (sequelize, DataTypes) => {
  class Type extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Item }) {
      this.hasOne(Item, { foreignKey: "id_type" });
    }
  }
  Type.init(
    {
      id_type: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Type",
      timestamps: false,
      underscored: true,
    }
  );
  return Type;
};
