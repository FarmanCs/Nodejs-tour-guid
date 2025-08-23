const mongoose = require('mongoose');
require('dotenv').config(); //simple and easy way to require env file
// const dotenv = require('dotenv')//if we do require the env via this way then  we must use the line 3 code for it config it and give a path for env file
// dotenv.config({ path: './.env' })

//error handle for uncaughtException
// process.on('uncaughtException', err => {
//    console.log("UNCAUGHT EXCEPTION : Shuting down...");
//    console.log(err.name, err.message);
//    process.exit(1)
// })
const app = require('./app');

// Connect to MongoDB only if we're not in a serverless environment
if (process.env.MONGO_URL) {
  const DB = process.env.MONGO_URL.replace(
    '<PASSWORD>',
    process.env.PASSWORD || '',
  );

  mongoose
    .connect(DB)
    .then(() => {
      console.log('Database connected');
    })
    .catch((err) => {
      console.log('Database connection error:', err);
    });
}

// For Vercel serverless deployment
if (process.env.NODE_ENV !== 'production' || process.env.VERCEL !== '1') {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server starting listening at port http://127.0.0.1:${PORT} `);
  });
}

//this catch the error instead of catching it above with then and catch
process.on('unhandledRejection', (err) => {
  console.log(err.name, err.message);
  console.log('UNHANDLE REJECTION Shutting down...');
  // Server.close(() => {//this line code only work if the code at line 25 is run
  //    process.exit(1)
  // })
  process.exit(1);
});

// Export for Vercel
module.exports = app;
