# Natours - Tour Booking Application

A full-stack tour booking application built with Node.js, Express, MongoDB, and Pug templating engine.

## 🚀 Features

- **Tour Management**: CRUD operations for tours with image uploads
- **User Authentication**: JWT-based authentication with bcrypt password hashing
- **Booking System**: Tour booking with Stripe payment integration
- **Review System**: User reviews and ratings for tours
- **Email Notifications**: Welcome emails and password reset functionality
- **Security**: Rate limiting, CORS, XSS protection, and data sanitization
- **Responsive Design**: Mobile-friendly interface

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM
- **Frontend**: Pug templating engine, Vanilla JavaScript
- **Authentication**: JWT, bcrypt
- **File Upload**: Multer
- **Email**: Nodemailer
- **Payment**: Stripe
- **Security**: Helmet, express-rate-limit, express-mongo-sanitize

## 📁 Project Structure

```
deployment/
├── app.js                 # Main Express application
├── server.js             # Server entry point
├── package.json          # Dependencies and scripts
├── vercel.json          # Vercel deployment configuration
├── controller/          # Business logic controllers
├── models/             # MongoDB schemas
├── routes/             # API routes
├── views/              # Pug templates
├── public/             # Static assets (CSS, JS, images)
├── utils/              # Helper functions
└── dev-data/           # Development data
```

## 🚀 Deployment to Vercel

### Prerequisites

1. **MongoDB Atlas Account**: Set up a free MongoDB Atlas cluster
2. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
3. **Stripe Account**: For payment processing
4. **Gmail Account**: For email notifications

### Step 1: Set up MongoDB Atlas

1. Create a free MongoDB Atlas account
2. Create a new cluster
3. Get your connection string
4. Replace `<username>`, `<PASSWORD>`, and cluster details in the connection string

### Step 2: Environment Variables

Set up the following environment variables in Vercel:

```bash
# Database
MONGO_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/natours
PASSWORD=your_mongodb_password

# JWT
JWT_SECRET=your_very_long_and_secure_jwt_secret
JWT_EXPIRE_IN=90d
JWT_COOKIE_EXPIRE_IN=90

# Email (Gmail)
GEMAIL_USERNAME=your_gmail@gmail.com
GMAIL_PASSWORD=your_gmail_app_password
EMAIL_FROM=noreply@natours.com

# Stripe
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=whsec_your_stripe_webhook_secret

# Mapbox (optional)
MAPBOX_TOKEN=pk.your_mapbox_token

# App
NODE_ENV=production
```

### Step 3: Deploy to Vercel

1. **Install Vercel CLI**:

   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:

   ```bash
   vercel login
   ```

3. **Deploy**:

   ```bash
   vercel
   ```

4. **Set Environment Variables**:

   - Go to your Vercel dashboard
   - Navigate to your project settings
   - Add all the environment variables listed above

5. **Redeploy**:
   ```bash
   vercel --prod
   ```

### Step 4: Configure Gmail for Email

1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password
3. Use the App Password in the `GMAIL_PASSWORD` environment variable

### Step 5: Configure Stripe

1. Create a Stripe account
2. Get your test API keys
3. Set up webhook endpoints for payment processing

## 🔧 Local Development

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd deployment
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Create .env file**:

   ```bash
   cp env.example .env
   # Edit .env with your configuration
   ```

4. **Build frontend assets**:

   ```bash
   npm run build
   ```

5. **Start development server**:
   ```bash
   npm run dev
   ```

## 📝 API Endpoints

### Tours

- `GET /api/v1/tours` - Get all tours
- `GET /api/v1/tours/:id` - Get specific tour
- `POST /api/v1/tours` - Create new tour (admin only)
- `PATCH /api/v1/tours/:id` - Update tour (admin only)
- `DELETE /api/v1/tours/:id` - Delete tour (admin only)

### Users

- `POST /api/v1/users/signup` - User registration
- `POST /api/v1/users/login` - User login
- `GET /api/v1/users/logout` - User logout
- `PATCH /api/v1/users/updateMe` - Update user profile

### Reviews

- `GET /api/v1/tours/:tourId/review` - Get tour reviews
- `POST /api/v1/tours/:tourId/review` - Create review

### Bookings

- `GET /api/v1/bookings` - Get user bookings
- `POST /api/v1/bookings` - Create booking

## 🔒 Security Features

- Rate limiting on API endpoints
- CORS protection
- XSS protection
- NoSQL injection protection
- Parameter pollution protection
- Secure HTTP headers
- JWT token validation

## 📱 Frontend Features

- Responsive design
- Interactive maps with Mapbox
- Real-time form validation
- File upload with preview
- Payment processing with Stripe
- Email notifications

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

## 🆘 Support

For support, please open an issue in the GitHub repository or contact the development team.
