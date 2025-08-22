require('dotenv').config()

console.log('Starting application...');
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('DB_HOST:', process.env.DB_HOST);

const app = require('./app');
const { sequelize } = require('./models'); 

const PORT = process.env.PORT || 5001;

(async () => {
  try {
    console.log('Attempting database connection...');
    await sequelize.authenticate(); 
    console.log('Database connected successfully.');

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    process.exit(1); // Exit if database fails - prevents timeout
  }
})();