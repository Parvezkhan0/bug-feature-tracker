require('dotenv').config()
const app = require('./app');
const { sequelize } = require('./models'); 

const PORT = process.env.PORT || 5001;

(async () => {
  try {
    await sequelize.authenticate(); 
    console.log('Database connected successfully.');

    app.listen(PORT, () => {
      console.log(`Server is running on ${PORT}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();
