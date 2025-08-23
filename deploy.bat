@echo off
echo 🚀 Starting Natours Deployment to Vercel...

echo 📦 Building frontend assets...
call npm run build

if %ERRORLEVEL% EQU 0 (
    echo ✅ Frontend build successful!
) else (
    echo ❌ Frontend build failed!
    pause
    exit /b 1
)

echo 🌐 Deploying to Vercel...
call vercel --prod

echo 🎉 Deployment completed!
echo 📝 Don't forget to set up your environment variables in Vercel dashboard:
echo    - MONGO_URL
echo    - PASSWORD
echo    - JWT_SECRET
echo    - JWT_EXPIRE_IN
echo    - JWT_COOKIE_EXPIRE_IN
echo    - GEMAIL_USERNAME
echo    - GMAIL_PASSWORD
echo    - EMAIL_FROM
echo    - STRIPE_SECRET_KEY
echo    - STRIPE_WEBHOOK_SECRET
echo    - MAPBOX_TOKEN
echo    - NODE_ENV=production

pause 