# 🚀 Natours Deployment Checklist

## Pre-Deployment Setup

### 1. MongoDB Atlas Setup ✅

- [ ] Create MongoDB Atlas account
- [ ] Create a new cluster (free tier)
- [ ] Create database user with read/write permissions
- [ ] Get connection string
- [ ] Whitelist IP addresses (0.0.0.0/0 for Vercel)

### 2. Environment Variables Setup ✅

Set up these variables in Vercel dashboard:

#### Database

- [ ] `MONGO_URL` - MongoDB connection string
- [ ] `PASSWORD` - MongoDB user password

#### Authentication

- [ ] `JWT_SECRET` - Long, secure random string
- [ ] `JWT_EXPIRE_IN` - Token expiration (e.g., "90d")
- [ ] `JWT_COOKIE_EXPIRE_IN` - Cookie expiration in days (e.g., "90")

#### Email Configuration

- [ ] `GEMAIL_USERNAME` - Your Gmail address
- [ ] `GMAIL_PASSWORD` - Gmail App Password (not regular password)
- [ ] `EMAIL_FROM` - Sender email (e.g., "noreply@natours.com")

#### Payment (Stripe)

- [ ] `STRIPE_SECRET_KEY` - Stripe secret key (starts with "sk*test*")
- [ ] `STRIPE_WEBHOOK_SECRET` - Stripe webhook secret

#### Optional Services

- [ ] `MAPBOX_TOKEN` - Mapbox API token for maps
- [ ] `NODE_ENV` - Set to "production"

### 3. Gmail Setup ✅

- [ ] Enable 2-factor authentication on Gmail
- [ ] Generate App Password
- [ ] Use App Password in `GMAIL_PASSWORD` variable

### 4. Stripe Setup ✅

- [ ] Create Stripe account
- [ ] Get test API keys
- [ ] Set up webhook endpoints (if needed)

## Deployment Steps

### 1. Build Frontend Assets ✅

```bash
npm run build
```

### 2. Deploy to Vercel ✅

```bash
# Option 1: Using Vercel CLI
vercel --prod

# Option 2: Using deployment script
./deploy.sh  # Linux/Mac
deploy.bat   # Windows
```

### 3. Configure Vercel Settings ✅

- [ ] Set environment variables in Vercel dashboard
- [ ] Configure build settings if needed
- [ ] Set up custom domain (optional)

## Post-Deployment Verification

### 1. Basic Functionality ✅

- [ ] Homepage loads correctly
- [ ] Tour listings display
- [ ] User registration works
- [ ] User login works
- [ ] Tour details page loads

### 2. Advanced Features ✅

- [ ] Image uploads work
- [ ] Email notifications sent
- [ ] Payment processing works
- [ ] Maps display correctly
- [ ] Reviews system works

### 3. Security Testing ✅

- [ ] Rate limiting active
- [ ] CORS properly configured
- [ ] JWT authentication working
- [ ] File upload restrictions active

## Troubleshooting

### Common Issues

1. **MongoDB Connection Error**

   - Check connection string format
   - Verify IP whitelist includes Vercel
   - Ensure username/password are correct

2. **Email Not Sending**

   - Verify Gmail App Password
   - Check 2FA is enabled
   - Test with different email service

3. **File Upload Issues**

   - Check file size limits
   - Verify upload directory permissions
   - Test with different file types

4. **Payment Processing**
   - Verify Stripe keys are correct
   - Check webhook configuration
   - Test with Stripe test cards

### Environment Variable Format Examples

```bash
# MongoDB
MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/natours?retryWrites=true&w=majority
PASSWORD=your_actual_password

# JWT
JWT_SECRET=your-super-secret-jwt-key-that-is-very-long-and-secure
JWT_EXPIRE_IN=90d
JWT_COOKIE_EXPIRE_IN=90

# Gmail
GEMAIL_USERNAME=your.email@gmail.com
GMAIL_PASSWORD=your-16-digit-app-password
EMAIL_FROM=noreply@natours.com

# Stripe
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key_here
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret_here

# Optional
MAPBOX_TOKEN=pk.eyJ1IjoieW91ci11c2VybmFtZSIsImEiOiJjbGV4YW1wbGUifQ.example
NODE_ENV=production
```

## Performance Optimization

### 1. Image Optimization ✅

- [ ] Compress tour images
- [ ] Use appropriate image formats
- [ ] Implement lazy loading

### 2. Database Optimization ✅

- [ ] Add proper indexes
- [ ] Optimize queries
- [ ] Monitor performance

### 3. Caching ✅

- [ ] Implement Redis caching (if needed)
- [ ] Use CDN for static assets
- [ ] Enable browser caching

## Monitoring & Maintenance

### 1. Error Monitoring ✅

- [ ] Set up error tracking (Sentry, etc.)
- [ ] Monitor application logs
- [ ] Set up alerts for critical errors

### 2. Performance Monitoring ✅

- [ ] Monitor response times
- [ ] Track database performance
- [ ] Monitor memory usage

### 3. Security Monitoring ✅

- [ ] Regular security audits
- [ ] Monitor for suspicious activity
- [ ] Keep dependencies updated

## Backup & Recovery

### 1. Database Backup ✅

- [ ] Set up automated MongoDB backups
- [ ] Test backup restoration
- [ ] Document recovery procedures

### 2. Code Backup ✅

- [ ] Use Git for version control
- [ ] Regular commits and pushes
- [ ] Tag important releases

## Success Criteria ✅

- [ ] Application deploys successfully
- [ ] All core features work correctly
- [ ] Security measures are active
- [ ] Performance is acceptable
- [ ] Error handling is robust
- [ ] Monitoring is in place

---

**🎉 Congratulations! Your Natours application is now live!**

Remember to:

- Monitor the application regularly
- Keep dependencies updated
- Backup data regularly
- Test new features before deployment
- Document any changes made
