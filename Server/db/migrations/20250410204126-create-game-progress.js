'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('game_progress', {
      progress_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'user_id'
        }
      },
      game_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'games',
          key: 'game_id'
        }
      },
      status_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'statuses',
          key: 'status_id'
        }
      },
      difficulty_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'difficulties',
          key: 'difficulty_id'
        }
      },
      score: Sequelize.INTEGER
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('game_progress');
  }
};