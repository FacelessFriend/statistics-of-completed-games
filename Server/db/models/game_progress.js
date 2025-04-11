'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class GameProgress extends Model {
    static associate(models) {
      GameProgress.belongsTo(models.User, {
        foreignKey: 'user_id'
      });
      
      GameProgress.belongsTo(models.Game, {
        foreignKey: 'game_id'
      });

      GameProgress.belongsTo(models.Status, {
        foreignKey: 'status_id'
      });

      GameProgress.belongsTo(models.Difficulty, {
        foreignKey: 'difficulty_id'
      });
    }
  }

  GameProgress.init({
    progress_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: DataTypes.INTEGER,
    game_id: DataTypes.INTEGER,
    status_id: DataTypes.INTEGER,
    difficulty_id: DataTypes.INTEGER,
    score: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'GameProgress',
    tableName: 'game_progress',
    timestamps: false
  });

  return GameProgress;
};