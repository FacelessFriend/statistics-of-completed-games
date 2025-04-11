'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Difficulty extends Model {
    static associate(models) {
      Difficulty.hasMany(models.GameProgress, {
        foreignKey: 'difficulty_id',
        as: 'gameProgresses'
      });
    }
  }

  Difficulty.init({
    difficulty_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true
    }
  }, {
    sequelize,
    modelName: 'Difficulty',
    tableName: 'difficulties',
    timestamps: false
  });

  return Difficulty;
};