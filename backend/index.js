import cors from 'cors';
import express from 'express';
import { pool } from './config/database.js';
import customersRouter from './routes/customers.js';
import invoicesRouter from './routes/invoices.js';
import { errorHandler, notFound } from './middleware/errorHandler.js';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    credentials: true
}));

// Routes
app.get('/', (req, res) => {
    res.json({
        success: true,
        message: 'Rishabh Jewellers API Server',
        version: '1.0.0',
        endpoints: {
            customers: '/api/customers',
            invoices: '/api/invoices'
        }
    });
});

app.get('/api/health', (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) {
            return res.status(500).json({
                success: false,
                message: 'Database connection failed',
                error: err.message
            });
        }
        connection.release();
        res.json({
            success: true,
            message: 'Server is healthy',
            database: 'Connected'
        });
    });
});

// API Routes
app.use('/api/customers', customersRouter);
app.use('/api/invoices', invoicesRouter);

// Error handling
app.use(notFound);
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`📍 API URL: http://localhost:${PORT}`);
    console.log(`💡 Make sure to create .env file from .env.example`);
});