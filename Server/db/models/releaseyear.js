'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ReleaseYear extends Model {
    static associate(models) {
      ReleaseYear.hasMany(models.Game, {
        foreignKey: 'year_id',
        as: 'games'
      });
    }
  }

  ReleaseYear.init({
    year_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      validate: {
        min: 1970,
        max: new Date().getFullYear()
      }
    }
  }, {
    sequelize,
    modelName: 'ReleaseYear',
    tableName: 'release_years',
    timestamps: false
  });

  return ReleaseYear;
};