# 💎 Rishabh Jewellers - Automated Billing System

A complete full-stack web application for automated jewellery billing with invoice generation, PDF export, and database management.

## 🌟 Overview

This is a comprehensive 3-phase billing system designed specifically for jewellery businesses:

1. **Phase 1**: Customer selection or creation
2. **Phase 2**: Interactive billing form with auto-calculations
3. **Phase 3**: Invoice preview with PDF generation and database storage

## 🏗️ Architecture

```
┌─────────────────┐
│  React Frontend │
│   (Port 5173)   │
└────────┬────────┘
         │
         │ REST API
         │
┌────────▼────────┐
│  Express.js API │
│   (Port 3001)   │
└────────┬────────┘
         │
         │ MySQL
         │
┌────────▼────────┐
│ MySQL Database  │
│   (Port 3306)   │
└─────────────────┘
```

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- MySQL (v8.0 or higher)
- npm or yarn

### 1. Clone and Setup

```bash
# Clone the repository
git clone <repository-url>
cd rishabh-jewellers

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### 2. Database Setup

```bash
# Login to MySQL
mysql -u root -p

# Run the database script
source backend/database.sql

# Or manually execute the SQL file
```

### 3. Configure Environment

**Backend** (`backend/.env`):
```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=rishabh_jewellers
DB_PORT=3306
PORT=3001
FRONTEND_URL=http://localhost:5173
```

**Frontend** (`frontend/.env`):
```env
VITE_API_URL=http://localhost:3001/api
```

### 4. Start the Application

**Terminal 1 - Backend:**
```bash
cd backend
npm start
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

### 5. Access the Application

- Frontend: http://localhost:5173
- Backend API: http://localhost:3001
- API Health Check: http://localhost:3001/api/health

## 📦 Project Structure

```
rishabh-jewellers/
├── backend/
│   ├── config/
│   │   └── database.js          # MySQL connection
│   ├── routes/
│   │   ├── customers.js         # Customer endpoints
│   │   └── invoices.js          # Invoice endpoints
│   ├── middleware/
│   │   └── errorHandler.js      # Error handling
│   ├── database.sql             # Database schema
│   ├── index.js                 # Server entry point
│   ├── package.json
│   └── README.md
│
├── frontend/
│   ├── src/
│   │   ├── components/          # Reusable components
│   │   ├── pages/               # Page components
│   │   ├── services/            # API services
│   │   ├── utils/               # Utilities (PDF)
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/
│   ├── package.json
│   └── README.md
│
└── README.md                    # This file
```

## 🎯 Features

### Customer Management
- ✅ Add new customers
- ✅ View all customers
- ✅ Select customer for billing
- ✅ Store customer details (Name, Address, GSTIN, Contact)

### Invoice Creation
- ✅ Auto-generated invoice numbers
- ✅ Date selection
- ✅ Multiple item entries
- ✅ Auto-calculation of amounts
- ✅ Tax calculation (CGST 1.5% + SGST 1.5%)
- ✅ Grand total calculation

### Invoice Management
- ✅ View all invoices
- ✅ Search invoices
- ✅ View invoice details
- ✅ Invoice history

### PDF Generation
- ✅ Professional invoice layout
- ✅ Company branding
- ✅ Download as PDF
- ✅ Print invoice
- ✅ Matches traditional invoice format

### Database
- ✅ MySQL database
- ✅ Relational data structure
- ✅ Foreign key constraints
- ✅ Indexed for performance

## 🔌 API Endpoints

### Customers
- `GET /api/customers` - Get all customers
- `GET /api/customers/:id` - Get customer by ID
- `POST /api/customers` - Create new customer
- `PUT /api/customers/:id` - Update customer
- `DELETE /api/customers/:id` - Delete customer

### Invoices
- `GET /api/invoices` - Get all invoices
- `GET /api/invoices/:id` - Get invoice by ID
- `GET /api/invoices/number/:invoiceNo` - Get invoice by number
- `POST /api/invoices` - Create new invoice
- `GET /api/invoices/utils/next-invoice-number` - Get next invoice number

## 🗄️ Database Schema

### customers
```sql
- id (PK)
- name
- address
- gstin
- contact
- created_at
- updated_at
```

### invoices
```sql
- id (PK)
- invoice_no (UNIQUE)
- customer_id (FK)
- invoice_date
- total_amount
- cgst
- sgst
- total_tax
- grand_total
- created_at
- updated_at
```

### invoice_items
```sql
- id (PK)
- invoice_id (FK)
- description
- hsn_code
- weight
- rate_per_gram
- amount
- created_at
```

## 🎨 Technology Stack

### Frontend
- React 19
- Vite
- Tailwind CSS
- React Router DOM
- Axios
- jsPDF

### Backend
- Node.js
- Express.js
- MySQL
- CORS

## 🔧 Development

### Backend Development
```bash
cd backend
npm start  # Uses nodemon for auto-reload
```

### Frontend Development
```bash
cd frontend
npm run dev  # Vite dev server with HMR
```

### Build for Production

**Frontend:**
```bash
cd frontend
npm run build
npm run preview  # Preview production build
```

**Backend:**
```bash
cd backend
# Set NODE_ENV=production in .env
npm start
```

## 🚀 Deployment

### Frontend (Vercel)
1. Push code to GitHub
2. Connect repository to Vercel
3. Set environment variables
4. Deploy

### Backend (Render/Railway)
1. Push code to GitHub
2. Connect repository to Render/Railway
3. Set environment variables
4. Deploy

### Database (PlanetScale/ClearDB)
1. Create MySQL database
2. Import schema from `database.sql`
3. Update connection details in backend `.env`

## 🐛 Troubleshooting

### Database Connection Failed
- Check MySQL is running: `sudo service mysql status`
- Verify credentials in `.env`
- Check database exists: `SHOW DATABASES;`

### API Not Responding
- Check backend server is running
- Verify port 3001 is not in use
- Check CORS configuration

### Frontend Not Loading
- Clear browser cache
- Check console for errors
- Verify API URL in `.env`

### PDF Not Generating
- Check browser console
- Verify jsPDF is installed
- Check invoice data structure

## 📝 Sample Data

The database includes sample customer data for testing:
- Name: Sample Customer
- Address: 123 Main Street, City, State - 400001
- GSTIN: 27AAAAA0000A1Z5
- Contact: 9876543210

## 🔐 Security Notes

- Never commit `.env` files
- Use environment variables for sensitive data
- Implement authentication for production
- Use HTTPS in production
- Sanitize user inputs
- Use prepared statements (already implemented)

## 📈 Future Enhancements

- [ ] User authentication (JWT/Firebase)
- [ ] Email invoice to customers
- [ ] SMS notifications
- [ ] Dashboard with analytics
- [ ] Multi-branch support
- [ ] Inventory management
- [ ] Payment tracking
- [ ] GST reports
- [ ] Backup and restore

## 📄 License

Proprietary software for Rishabh Jewellers.

## 👥 Contributors

- Development Team

## 📞 Support

For support and queries:
- Email: info@rishabhjewellers.com
- Phone: +91 98765 43210

---

**Made with ❤️ for Rishabh Jewellers**
