import express from 'express';
import { query } from '../config/database.js';

const router = express.Router();

// GET all invoices with customer details
router.get('/', async (req, res) => {
    try {
        const invoices = await query(`
            SELECT i.*, c.name as customer_name, c.address, c.gstin, c.contact
            FROM invoices i
            LEFT JOIN customers c ON i.customer_id = c.id
            ORDER BY i.created_at DESC
        `);
        
        res.json({
            success: true,
            data: invoices
        });
    } catch (error) {
        console.error('Error fetching invoices:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch invoices',
            error: error.message
        });
    }
});

// GET single invoice with items
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        
        // Get invoice with customer details
        const invoices = await query(`
            SELECT i.*, c.name as customer_name, c.address, c.gstin, c.contact
            FROM invoices i
            LEFT JOIN customers c ON i.customer_id = c.id
            WHERE i.id = ?
        `, [id]);
        
        if (invoices.length === 0) {
            return res.status(404).json({
                success: false,
                message: 'Invoice not found'
            });
        }
        
        // Get invoice items
        const items = await query(
            'SELECT * FROM invoice_items WHERE invoice_id = ? ORDER BY id ASC',
            [id]
        );
        
        res.json({
            success: true,
            data: {
                ...invoices[0],
                items
            }
        });
    } catch (error) {
        console.error('Error fetching invoice:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch invoice',
            error: error.message
        });
    }
});

// GET invoice by invoice number
router.get('/number/:invoiceNo', async (req, res) => {
    try {
        const { invoiceNo } = req.params;
        
        const invoices = await query(`
            SELECT i.*, c.name as customer_name, c.address, c.gstin, c.contact
            FROM invoices i
            LEFT JOIN customers c ON i.customer_id = c.id
            WHERE i.invoice_no = ?
        `, [invoiceNo]);
        
        if (invoices.length === 0) {
            return res.status(404).json({
                success: false,
                message: 'Invoice not found'
            });
        }
        
        // Get invoice items
        const items = await query(
            'SELECT * FROM invoice_items WHERE invoice_id = ? ORDER BY id ASC',
            [invoices[0].id]
        );
        
        res.json({
            success: true,
            data: {
                ...invoices[0],
                items
            }
        });
    } catch (error) {
        console.error('Error fetching invoice:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch invoice',
            error: error.message
        });
    }
});

// POST create new invoice with items
router.post('/', async (req, res) => {
    try {
        const {
            invoice_no,
            customer_id,
            invoice_date,
            total_amount,
            cgst,
            sgst,
            total_tax,
            grand_total,
            items
        } = req.body;
        
        // Validation
        if (!invoice_no || !customer_id || !invoice_date) {
            return res.status(400).json({
                success: false,
                message: 'Invoice number, customer ID, and date are required'
            });
        }
        
        if (!items || !Array.isArray(items) || items.length === 0) {
            return res.status(400).json({
                success: false,
                message: 'At least one item is required'
            });
        }
        
        // Check if invoice number already exists
        const existingInvoice = await query(
            'SELECT id FROM invoices WHERE invoice_no = ?',
            [invoice_no]
        );
        
        if (existingInvoice.length > 0) {
            return res.status(400).json({
                success: false,
                message: 'Invoice number already exists'
            });
        }
        
        // Insert invoice
        const invoiceResult = await query(
            `INSERT INTO invoices 
            (invoice_no, customer_id, invoice_date, total_amount, cgst, sgst, total_tax, grand_total) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
            [invoice_no, customer_id, invoice_date, total_amount, cgst, sgst, total_tax, grand_total]
        );
        
        const invoiceId = invoiceResult.insertId;
        
        // Insert invoice items
        for (const item of items) {
            await query(
                `INSERT INTO invoice_items 
                (invoice_id, description, hsn_code, weight, rate_per_gram, amount) 
                VALUES (?, ?, ?, ?, ?, ?)`,
                [
                    invoiceId,
                    item.description,
                    item.hsn_code || '',
                    item.weight,
                    item.rate_per_gram,
                    item.amount
                ]
            );
        }
        
        res.status(201).json({
            success: true,
            message: 'Invoice created successfully',
            data: {
                id: invoiceId,
                invoice_no
            }
        });
    } catch (error) {
        console.error('Error creating invoice:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to create invoice',
            error: error.message
        });
    }
});

// GET next invoice number
router.get('/utils/next-invoice-number', async (req, res) => {
    try {
        const result = await query(
            'SELECT invoice_no FROM invoices ORDER BY id DESC LIMIT 1'
        );
        
        let nextNumber;
        if (result.length === 0) {
            nextNumber = 'INV-0001';
        } else {
            const lastInvoice = result[0].invoice_no;
            const match = lastInvoice.match(/INV-(\d+)/);
            if (match) {
                const num = parseInt(match[1]) + 1;
                nextNumber = `INV-${num.toString().padStart(4, '0')}`;
            } else {
                nextNumber = 'INV-0001';
            }
        }
        
        res.json({
            success: true,
            data: { next_invoice_number: nextNumber }
        });
    } catch (error) {
        console.error('Error generating invoice number:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to generate invoice number',
            error: error.message
        });
    }
});

export default router;
