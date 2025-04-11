require('dotenv').config();

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  require('dotenv').config();

  const { Sequelize } = require('sequelize');
  
  const sequelize = new Sequelize({
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'postgres',
    logging: console.log,
    dialectOptions: {
      ssl: process.env.NODE_ENV === 'production' ? { require: true, rejectUnauthorized: false } : false
    }
  });
  
  async function testConnection() {
    try {
      await sequelize.authenticate();
      console.log('✅ Подключение к PostgreSQL успешно установлено!');
    } catch (error) {
      console.error('❌ Ошибка подключения к PostgreSQL:', error);
    } finally {
      await sequelize.close();
      process.exit();
    }
  }
  
  testConnection();