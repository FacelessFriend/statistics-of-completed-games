'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('games', {
      game_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      title: {
        type: Sequelize.STRING(100),
        allowNull: false
      },
      image_url: Sequelize.STRING(255),
      description: Sequelize.TEXT,
      genre_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'genres',
          key: 'genre_id'
        }
      },
      year_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'release_years',
          key: 'year_id'
        }
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('games');
  }
};