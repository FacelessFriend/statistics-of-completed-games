'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    static associate(models) {
      Game.belongsToMany(models.User, {
        through: 'game_progress',
        foreignKey: 'game_id',
        otherKey: 'user_id'
      });
      
      Game.hasMany(models.Enemy, {
        foreignKey: 'game_id',
        as: 'enemies'
      });

      Game.belongsTo(models.Genre, {
        foreignKey: 'genre_id'
      });

      Game.belongsTo(models.ReleaseYear, {
        foreignKey: 'year_id'
      });
    }
  }

  Game.init({
    game_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    image_url: DataTypes.STRING(255),
    description: DataTypes.TEXT,
    genre_id: DataTypes.INTEGER,
    year_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Game',
    tableName: 'games',
    timestamps: false
  });

  return Game;
};