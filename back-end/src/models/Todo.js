const { db, DataTypes, Model } = require("../../config/connection.js");

class Todo extends Model {}

Todo.init(
  {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    time: DataTypes.STRING,
  },
  {
    sequelize: db,
    modelName: "Todo",
  }
);

module.exports = Todo;
