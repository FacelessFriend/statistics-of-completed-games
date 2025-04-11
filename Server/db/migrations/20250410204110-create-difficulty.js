'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('difficulties', {
      difficulty_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique: true
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('difficulties');
  }
};