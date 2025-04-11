'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Enemy extends Model {
    static associate(models) {
      Enemy.belongsTo(models.Game, {
        foreignKey: 'game_id',
        as: 'game'
      });
    }
  }

  Enemy.init({
    enemy_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    description: DataTypes.TEXT,
    image_url: DataTypes.STRING(255),
    game_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Enemy',
    tableName: 'enemies',
    timestamps: false
  });

  return Enemy;
};