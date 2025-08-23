const express = require('express');
const multer = require('multer');
const path = require('path');
const userController = require('../controller/user-controller');
const userAuth = require('../controller/auth-controller');

const userRouter = express.Router();

userRouter.post('/singup', userAuth.singup); //simple mean to add user
userRouter.post('/login', userAuth.login);
userRouter.get('/logout', userAuth.logout);
userRouter.post('/forgot-Password', userAuth.forgotPassword);
userRouter.patch('/reset-Password/:token', userAuth.resetPassword);

// Debug route to check environment variables
userRouter.get('/debug', (req, res) => {
  res.json({
    hasMongoUrl: !!process.env.MONGO_URL,
    hasJwtSecret: !!process.env.JWT_SECRET,
    hasJwtExpireIn: !!process.env.JWT_EXPIRE_IN,
    hasJwtCookieExpireIn: !!process.env.JWT_COOKIE_EXPIRE_IN,
    nodeEnv: process.env.NODE_ENV,
    vercel: process.env.VERCEL,
  });
});

// Create test user route
userRouter.post('/create-test-user', async (req, res) => {
   try {
     const userModel = require('../models/user-model');

     // Check if user already exists
     const existingUser = await userModel.findOne({
       email: 'farmancs2024@gmail.com',
     });
     if (existingUser) {
       return res.json({
         status: 'success',
         message: 'User already exists',
         user: existingUser,
       });
     }

     // Create new test user
     const testUser = await userModel.create({
       name: 'Farman Test',
       email: 'farmancs2024@gmail.com',
       password: 'test1234',
       passwordConfirm: 'test1234',
       role: 'user',
     });

     res.json({
       status: 'success',
       message: 'Test user created successfully',
       user: testUser,
     });
   } catch (error) {
     console.error('Error creating test user:', error);
     res.status(500).json({
       status: 'error',
       message: error.message,
     });
   }
 })

// Serve user photo route
userRouter.get('/photo/:userId', async (req, res) => {
   try {
     const userModel = require('../models/user-model');
     const user = await userModel.findById(req.params.userId);
     
     if (!user) {
       return res.status(404).json({ error: 'User not found' });
     }
     
     // If photo is base64, serve it directly
     if (user.photo && user.photo.startsWith('data:image')) {
       res.set('Content-Type', 'image/jpeg');
       const base64Data = user.photo.replace(/^data:image\/\w+;base64,/, '');
       const buffer = Buffer.from(base64Data, 'base64');
       res.send(buffer);
     } else {
       // If it's a filename, serve from static files
       res.sendFile(path.join(__dirname, '../public/img/users', user.photo || 'default.jpg'));
     }
   } catch (error) {
     console.error('Error serving user photo:', error);
     res.status(500).json({ error: 'Error serving photo' });
   }
 });

//authentication protect middleware protect all middelware  below this
userRouter.use(userAuth.protect);

userRouter.get('/me', userController.getMe, userController.get_user);
userRouter.get('/:id', userController.get_user);
userRouter.get('/', userController.get_Allusers);
userRouter.patch(
  '/update-me',
  userController.uploadUserPhoto,
  userController.resizeUserPhoto,
  userController.updateMe,
);
userRouter.patch('/update-Password', userAuth.updatePassword);

userRouter.use(userAuth.restrectTo('admin'));
userRouter.delete('/delete-me', userController.deleteMe);
userRouter.delete('/:id', userController.deleteUser);

module.exports = userRouter;
