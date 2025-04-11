require('dotenv').config();

console.log('DATABASE_URL:', process.env.DATABASE_URL);

const { Sequelize } = require('sequelize');

console.log('Пытаюсь подключиться по URL:', process.env.DATABASE_URL);

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  logging: console.log, // Включаем логирование SQL-запросов
  dialectOptions: {
    ssl: process.env.NODE_ENV === 'production' ? { require: true, rejectUnauthorized: false } : false
  }
});

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('✅ Подключение к PostgreSQL успешно установлено!');
    
    // Дополнительная проверка - запрос к БД
    const [result] = await sequelize.query('SELECT version() AS postgres_version');
    console.log('ℹ️ Версия PostgreSQL:', result[0].postgres_version);
  } catch (error) {
    console.error('❌ Ошибка подключения к PostgreSQL:');
    console.error('Полный URL подключения:', process.env.DATABASE_URL);
    console.error('Детали ошибки:', error.original || error);
  } finally {
    await sequelize.close();
    process.exit();
  }
}

testConnection();