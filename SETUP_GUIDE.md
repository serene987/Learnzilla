# 🚀 Complete Setup Guide - Rishabh Jewellers Billing System

This guide will walk you through setting up the complete billing system from scratch.

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **MySQL** (v8.0 or higher) - [Download](https://dev.mysql.com/downloads/)
- **Git** (optional) - [Download](https://git-scm.com/)
- A code editor like VS Code

## 🔧 Step-by-Step Setup

### Step 1: Install MySQL

#### On Ubuntu/Debian:
```bash
sudo apt update
sudo apt install mysql-server
sudo systemctl start mysql
sudo systemctl enable mysql
```

#### On macOS:
```bash
brew install mysql
brew services start mysql
```

#### On Windows:
Download and install from [MySQL Downloads](https://dev.mysql.com/downloads/installer/)

### Step 2: Configure MySQL

1. Login to MySQL:
```bash
mysql -u root -p
```

2. Create a new user (optional but recommended):
```sql
CREATE USER 'jeweller'@'localhost' IDENTIFIED BY 'your_secure_password';
GRANT ALL PRIVILEGES ON *.* TO 'jeweller'@'localhost';
FLUSH PRIVILEGES;
EXIT;
```

### Step 3: Setup Database

1. Navigate to the backend directory:
```bash
cd backend
```

2. Import the database schema:
```bash
mysql -u root -p < database.sql
```

Or manually:
```bash
mysql -u root -p
source /path/to/backend/database.sql
```

3. Verify database creation:
```sql
SHOW DATABASES;
USE rishabh_jewellers;
SHOW TABLES;
```

You should see:
- customers
- invoices
- invoice_items

### Step 4: Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env
```

4. Edit `.env` file with your MySQL credentials:
```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=rishabh_jewellers
DB_PORT=3306
PORT=3001
FRONTEND_URL=http://localhost:5173
```

5. Test the backend:
```bash
npm start
```

You should see:
```
✅ Database connected successfully
🚀 Server running on port 3001
📍 API URL: http://localhost:3001
```

6. Test API health:
Open browser and visit: http://localhost:3001/api/health

### Step 5: Frontend Setup

1. Open a new terminal and navigate to frontend:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env
```

4. Edit `.env` file:
```env
VITE_API_URL=http://localhost:3001/api
```

5. Build the frontend (to verify everything works):
```bash
npm run build
```

You should see a successful build message.

6. Start the development server:
```bash
npm run dev
```

You should see:
```
VITE v6.x.x  ready in xxx ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

### Step 6: Access the Application

1. Open your browser and go to: http://localhost:5173

2. You should see the Rishabh Jewellers landing page

3. Test the complete flow:
   - Select or create a customer
   - Add invoice items
   - Preview and save invoice
   - Download/Print PDF

## 🧪 Testing the Application

### Test 1: Create a Customer

1. Go to http://localhost:5173
2. Click "Add New Customer"
3. Fill in the details:
   - Name: Test Customer
   - Address: 123 Test Street, Mumbai - 400001
   - GSTIN: 27AAAAA0000A1Z5
   - Contact: 9876543210
4. Click "Create Customer"
5. Select the newly created customer
6. Click "Proceed to Billing"

### Test 2: Create an Invoice

1. After selecting customer, you'll be on the billing page
2. Add item details:
   - Description: Gold Necklace
   - HSN Code: 7113
   - Weight: 25.500
   - Rate/g: 6000.00
3. Click "Add Item" to add more items
4. Verify auto-calculations are working
5. Click "Preview Invoice"

### Test 3: Save and Download

1. Review the invoice preview
2. Click "Download PDF" - PDF should download
3. Click "Print" - Print dialog should open
4. Click "Save Invoice" - Invoice should save to database
5. Go to "View Invoices" to see all invoices

## 🐛 Troubleshooting

### Issue: Database Connection Failed

**Error:** `❌ Database connection failed`

**Solution:**
1. Check MySQL is running:
   ```bash
   sudo systemctl status mysql
   ```
2. Verify credentials in `backend/.env`
3. Test MySQL connection:
   ```bash
   mysql -u root -p
   ```

### Issue: Port Already in Use

**Error:** `Port 3001 is already in use`

**Solution:**
1. Find process using port:
   ```bash
   lsof -i :3001
   ```
2. Kill the process:
   ```bash
   kill -9 <PID>
   ```
3. Or change port in `backend/.env`

### Issue: Frontend Not Loading

**Error:** Blank page or errors in console

**Solution:**
1. Check backend is running
2. Verify API URL in `frontend/.env`
3. Clear browser cache
4. Check browser console for errors

### Issue: PDF Not Generating

**Error:** PDF download fails

**Solution:**
1. Check browser console for errors
2. Verify jsPDF is installed:
   ```bash
   cd frontend
   npm list jspdf
   ```
3. Reinstall if needed:
   ```bash
   npm install jspdf jspdf-autotable
   ```

### Issue: CORS Error

**Error:** `Access to XMLHttpRequest blocked by CORS policy`

**Solution:**
1. Verify `FRONTEND_URL` in `backend/.env` matches your frontend URL
2. Restart backend server
3. Clear browser cache

## 📦 Production Deployment

### Backend Deployment (Render/Railway)

1. Create account on [Render](https://render.com) or [Railway](https://railway.app)
2. Create new Web Service
3. Connect your GitHub repository
4. Set environment variables:
   - DB_HOST
   - DB_USER
   - DB_PASSWORD
   - DB_NAME
   - PORT
   - FRONTEND_URL
5. Deploy

### Frontend Deployment (Vercel)

1. Create account on [Vercel](https://vercel.com)
2. Import your GitHub repository
3. Set root directory to `frontend`
4. Set environment variable:
   - VITE_API_URL (your backend URL)
5. Deploy

### Database Deployment (PlanetScale)

1. Create account on [PlanetScale](https://planetscale.com)
2. Create new database
3. Import schema from `database.sql`
4. Get connection details
5. Update backend environment variables

## 🔐 Security Checklist

Before going to production:

- [ ] Change all default passwords
- [ ] Use environment variables for all sensitive data
- [ ] Enable HTTPS
- [ ] Implement authentication
- [ ] Add rate limiting
- [ ] Sanitize all user inputs
- [ ] Regular database backups
- [ ] Update dependencies regularly

## 📚 Additional Resources

- [React Documentation](https://react.dev/)
- [Express.js Guide](https://expressjs.com/)
- [MySQL Documentation](https://dev.mysql.com/doc/)
- [Tailwind CSS](https://tailwindcss.com/)
- [jsPDF Documentation](https://github.com/parallax/jsPDF)

## 🆘 Getting Help

If you encounter issues:

1. Check the error message carefully
2. Review this guide
3. Check the README files in backend and frontend
4. Search for the error online
5. Contact support: info@rishabhjewellers.com

## ✅ Verification Checklist

After setup, verify:

- [ ] MySQL is running and accessible
- [ ] Database and tables are created
- [ ] Backend server starts without errors
- [ ] API health check returns success
- [ ] Frontend builds successfully
- [ ] Frontend dev server starts
- [ ] Can access application in browser
- [ ] Can create a customer
- [ ] Can create an invoice
- [ ] Can download PDF
- [ ] Can save invoice to database
- [ ] Can view all invoices

## 🎉 Success!

If all checks pass, your Rishabh Jewellers Billing System is ready to use!

---

**Need Help?** Contact: info@rishabhjewellers.com
