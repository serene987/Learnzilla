# Rishabh Jewellers Backend API

## Setup Instructions

### 1. Install Dependencies
```bash
cd backend
npm install
```

### 2. Configure Database
1. Make sure MySQL is installed and running
2. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
3. Update `.env` with your MySQL credentials:
   ```
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=your_password
   DB_NAME=rishabh_jewellers
   ```

### 3. Create Database
Run the SQL script to create database and tables:
```bash
mysql -u root -p < database.sql
```

Or manually execute the SQL commands from `database.sql` in your MySQL client.

### 4. Start Server
```bash
npm start
```

The server will run on `http://localhost:3001`

## API Endpoints

### Health Check
- `GET /api/health` - Check server and database status

### Customers
- `GET /api/customers` - Get all customers
- `GET /api/customers/:id` - Get customer by ID
- `POST /api/customers` - Create new customer
- `PUT /api/customers/:id` - Update customer
- `DELETE /api/customers/:id` - Delete customer

### Invoices
- `GET /api/invoices` - Get all invoices
- `GET /api/invoices/:id` - Get invoice by ID with items
- `GET /api/invoices/number/:invoiceNo` - Get invoice by invoice number
- `POST /api/invoices` - Create new invoice with items
- `GET /api/invoices/utils/next-invoice-number` - Get next invoice number

## Sample API Requests

### Create Customer
```json
POST /api/customers
{
  "name": "John Doe",
  "address": "123 Main St, City, State - 400001",
  "gstin": "27AAAAA0000A1Z5",
  "contact": "9876543210"
}
```

### Create Invoice
```json
POST /api/invoices
{
  "invoice_no": "INV-0001",
  "customer_id": 1,
  "invoice_date": "2025-10-28",
  "total_amount": 50000.00,
  "cgst": 750.00,
  "sgst": 750.00,
  "total_tax": 1500.00,
  "grand_total": 51500.00,
  "items": [
    {
      "description": "Gold Necklace",
      "hsn_code": "7113",
      "weight": 25.500,
      "rate_per_gram": 6000.00,
      "amount": 153000.00
    }
  ]
}
```

## Database Schema

### customers
- id (PK)
- name
- address
- gstin
- contact
- created_at
- updated_at

### invoices
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

### invoice_items
- id (PK)
- invoice_id (FK)
- description
- hsn_code
- weight
- rate_per_gram
- amount
- created_at
