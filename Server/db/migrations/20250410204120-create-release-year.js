'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('release_years', {
      year_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      year: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
        validate: {
          min: 1970,
          max: new Date().getFullYear()
        }
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('release_years');
  }
};