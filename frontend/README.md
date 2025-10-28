# 💎 Rishabh Jewellers - Frontend

A modern, responsive billing web application for jewellery businesses built with React, Vite, and Tailwind CSS.

## 🚀 Features

- **Phase 1**: Customer selection and creation
- **Phase 2**: Interactive billing form with auto-calculations
- **Phase 3**: Invoice preview with PDF generation
- **Invoice Management**: View all invoices
- **PDF Generation**: Download and print invoices
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Modern UI**: Beautiful pink and gold theme for jewellery branding

## 🛠️ Tech Stack

- **React 19** - UI framework
- **Vite** - Build tool
- **React Router DOM** - Routing
- **Tailwind CSS** - Styling
- **Axios** - HTTP client
- **jsPDF** - PDF generation
- **jsPDF-AutoTable** - PDF table generation

## 📦 Installation

1. Navigate to the frontend directory:
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

4. Update `.env` with your backend API URL:
```env
VITE_API_URL=http://localhost:3001/api
```

## 🏃 Running the Application

### Development Mode
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navbar.jsx
│   └── Footer.jsx
├── pages/              # Page components
│   ├── PhaseOne.jsx    # Customer selection
│   ├── PhaseTwo.jsx    # Billing form
│   ├── PhaseThree.jsx  # Invoice preview
│   └── InvoicesList.jsx # All invoices
├── services/           # API services
│   ├── api.js          # Axios instance
│   ├── customerService.js
│   └── invoiceService.js
├── utils/              # Utility functions
│   └── pdfGenerator.js # PDF generation
├── App.jsx             # Main app component
├── main.jsx            # Entry point
└── index.css           # Global styles
```

## 🎨 Features Breakdown

### Phase 1: Customer Selection
- Select existing customer from dropdown
- Add new customer with form validation
- Customer details: Name, Address, GSTIN, Contact

### Phase 2: Billing Form
- Auto-generated invoice number
- Date selection
- Multiple item rows with:
  - Description
  - HSN Code
  - Weight (grams)
  - Rate per gram
  - Auto-calculated amount
- Add/Remove items dynamically
- Real-time calculation of:
  - Subtotal
  - CGST (1.5%)
  - SGST (1.5%)
  - Total Tax
  - Grand Total

### Phase 3: Invoice Preview
- Professional invoice layout
- Company branding
- Customer details
- Itemized list
- Tax breakdown
- Bank details
- Terms & conditions
- Actions:
  - Download PDF
  - Print PDF
  - Save to database
  - Edit invoice

### Invoice Management
- View all invoices in table format
- Search and filter capabilities
- Click to view invoice details
- Export options

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:
```javascript
colors: {
  primary: { ... },  // Pink shades
  gold: { ... }      // Gold shades
}
```

### Company Details
Update company information in:
- `src/utils/pdfGenerator.js` - For PDF generation
- `src/pages/PhaseThree.jsx` - For invoice preview

### Tax Rates
Modify tax calculations in:
- `src/pages/PhaseTwo.jsx` - Line ~60-65

## 🔧 Configuration

### API Endpoint
Set the backend API URL in `.env`:
```env
VITE_API_URL=http://localhost:3001/api
```

### Build Configuration
Modify `vite.config.js` for build settings.

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🐛 Troubleshooting

### API Connection Issues
- Ensure backend server is running on port 3001
- Check CORS configuration in backend
- Verify API URL in `.env` file

### PDF Generation Issues
- Check browser console for errors
- Ensure jsPDF is properly installed
- Verify invoice data structure

### Styling Issues
- Run `npm run build` to regenerate Tailwind CSS
- Clear browser cache
- Check for conflicting CSS

## 📄 License

This project is proprietary software for Rishabh Jewellers.

## 👥 Support

For support, contact: info@rishabhjewellers.com
