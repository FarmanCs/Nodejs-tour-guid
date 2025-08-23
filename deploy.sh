#!/bin/bash

echo "🚀 Starting Natours Deployment to Vercel..."

# Build the frontend assets
echo "📦 Building frontend assets..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Frontend build successful!"
else
    echo "❌ Frontend build failed!"
    exit 1
fi

# Deploy to Vercel
echo "🌐 Deploying to Vercel..."
vercel --prod

echo "🎉 Deployment completed!"
echo "📝 Don't forget to set up your environment variables in Vercel dashboard:"
echo "   - MONGO_URL"
echo "   - PASSWORD"
echo "   - JWT_SECRET"
echo "   - JWT_EXPIRE_IN"
echo "   - JWT_COOKIE_EXPIRE_IN"
echo "   - GEMAIL_USERNAME"
echo "   - GMAIL_PASSWORD"
echo "   - EMAIL_FROM"
echo "   - STRIPE_SECRET_KEY"
echo "   - STRIPE_WEBHOOK_SECRET"
echo "   - MAPBOX_TOKEN"
echo "   - NODE_ENV=production" 