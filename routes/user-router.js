const express = require('express')
const multer = require('multer')
const userController = require("../controller/user-controller")
const userAuth = require('../controller/auth-controller')

const userRouter = express.Router()

userRouter.post('/singup', userAuth.singup)//simple mean to add user
userRouter.post('/login', userAuth.login)
userRouter.get('/logout', userAuth.logout)
userRouter.post('/forgot-Password', userAuth.forgotPassword)
userRouter.patch('/reset-Password/:token', userAuth.resetPassword)

// Debug route to check environment variables
userRouter.get('/debug', (req, res) => {
   res.json({
      hasMongoUrl: !!process.env.MONGO_URL,
      hasJwtSecret: !!process.env.JWT_SECRET,
      hasJwtExpireIn: !!process.env.JWT_EXPIRE_IN,
      hasJwtCookieExpireIn: !!process.env.JWT_COOKIE_EXPIRE_IN,
      nodeEnv: process.env.NODE_ENV,
      vercel: process.env.VERCEL
   })
})

//authentication protect middleware protect all middelware  below this
userRouter.use(userAuth.protect)

userRouter.get('/me', userController.getMe, userController.get_user)
userRouter.get('/:id', userController.get_user)
userRouter.get('/', userController.get_Allusers)
userRouter.patch('/update-me',
   userController.uploadUserPhoto,
   userController.resizeUserPhoto,
   userController.updateMe)
userRouter.patch('/update-Password', userAuth.updatePassword)

userRouter.use(userAuth.restrectTo('admin'))
userRouter.delete('/delete-me', userController.deleteMe)
userRouter.delete('/:id', userController.deleteUser)

module.exports = userRouter
