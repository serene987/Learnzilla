# ⚡ Quick Start Guide

Get up and running in 5 minutes!

## 🎯 Prerequisites

- Node.js installed
- MySQL installed and running
- Terminal/Command Prompt

## 🚀 5-Minute Setup

### 1. Database Setup (2 minutes)

```bash
# Login to MySQL
mysql -u root -p

# Run this in MySQL prompt
CREATE DATABASE rishabh_jewellers;
USE rishabh_jewellers;

# Copy and paste the contents of backend/database.sql
# Or run: source /path/to/backend/database.sql

# Verify
SHOW TABLES;
# You should see: customers, invoices, invoice_items

EXIT;
```

### 2. Backend Setup (1 minute)

```bash
# Navigate to backend
cd backend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Edit .env with your MySQL password
# DB_PASSWORD=your_mysql_password

# Start server
npm start
```

✅ You should see: "✅ Database connected successfully"

### 3. Frontend Setup (2 minutes)

```bash
# Open new terminal
cd frontend

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Start development server
npm run dev
```

✅ You should see: "Local: http://localhost:5173"

### 4. Open Application

Open browser: **http://localhost:5173**

## 🎉 You're Ready!

### Test the Application

1. **Create a Customer**
   - Click "Add New Customer"
   - Fill in: Name, Address, GSTIN, Contact
   - Click "Create Customer"

2. **Create an Invoice**
   - Select the customer
   - Click "Proceed to Billing"
   - Add item: Gold Necklace, 25.500g, ₹6000/g
   - Click "Preview Invoice"

3. **Save & Download**
   - Click "Download PDF"
   - Click "Save Invoice"
   - Go to "View Invoices"

## 🔧 Common Issues

### Database Connection Failed
```bash
# Check MySQL is running
sudo systemctl status mysql

# Or on Mac
brew services list
```

### Port Already in Use
```bash
# Kill process on port 3001
lsof -ti:3001 | xargs kill -9

# Or change port in backend/.env
PORT=3002
```

### Frontend Not Loading
```bash
# Clear cache and reinstall
cd frontend
rm -rf node_modules package-lock.json
npm install
npm run dev
```

## 📚 Next Steps

- Read [SETUP_GUIDE.md](SETUP_GUIDE.md) for detailed setup
- Check [FEATURES.md](FEATURES.md) for all features
- See [DEPLOYMENT.md](DEPLOYMENT.md) for production deployment

## 🆘 Need Help?

- Check [README.md](README.md) for documentation
- Email: info@rishabhjewellers.com

---

**Happy Billing! 💎**
