import express from 'express';
import { query } from '../config/database.js';

const router = express.Router();

// GET all customers
router.get('/', async (req, res) => {
    try {
        const customers = await query('SELECT * FROM customers ORDER BY name ASC');
        res.json({
            success: true,
            data: customers
        });
    } catch (error) {
        console.error('Error fetching customers:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch customers',
            error: error.message
        });
    }
});

// GET single customer by ID
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const customers = await query('SELECT * FROM customers WHERE id = ?', [id]);
        
        if (customers.length === 0) {
            return res.status(404).json({
                success: false,
                message: 'Customer not found'
            });
        }
        
        res.json({
            success: true,
            data: customers[0]
        });
    } catch (error) {
        console.error('Error fetching customer:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch customer',
            error: error.message
        });
    }
});

// POST create new customer
router.post('/', async (req, res) => {
    try {
        const { name, address, gstin, contact } = req.body;
        
        // Validation
        if (!name || !name.trim()) {
            return res.status(400).json({
                success: false,
                message: 'Customer name is required'
            });
        }
        
        const result = await query(
            'INSERT INTO customers (name, address, gstin, contact) VALUES (?, ?, ?, ?)',
            [name.trim(), address || '', gstin || '', contact || '']
        );
        
        res.status(201).json({
            success: true,
            message: 'Customer created successfully',
            data: {
                id: result.insertId,
                name,
                address,
                gstin,
                contact
            }
        });
    } catch (error) {
        console.error('Error creating customer:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to create customer',
            error: error.message
        });
    }
});

// PUT update customer
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, address, gstin, contact } = req.body;
        
        // Validation
        if (!name || !name.trim()) {
            return res.status(400).json({
                success: false,
                message: 'Customer name is required'
            });
        }
        
        const result = await query(
            'UPDATE customers SET name = ?, address = ?, gstin = ?, contact = ? WHERE id = ?',
            [name.trim(), address || '', gstin || '', contact || '', id]
        );
        
        if (result.affectedRows === 0) {
            return res.status(404).json({
                success: false,
                message: 'Customer not found'
            });
        }
        
        res.json({
            success: true,
            message: 'Customer updated successfully'
        });
    } catch (error) {
        console.error('Error updating customer:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to update customer',
            error: error.message
        });
    }
});

// DELETE customer
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        
        const result = await query('DELETE FROM customers WHERE id = ?', [id]);
        
        if (result.affectedRows === 0) {
            return res.status(404).json({
                success: false,
                message: 'Customer not found'
            });
        }
        
        res.json({
            success: true,
            message: 'Customer deleted successfully'
        });
    } catch (error) {
        console.error('Error deleting customer:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to delete customer',
            error: error.message
        });
    }
});

export default router;
