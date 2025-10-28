import api from './api';

const invoiceService = {
    // Get all invoices
    getAllInvoices: async () => {
        try {
            const response = await api.get('/invoices');
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    // Get invoice by ID
    getInvoiceById: async (id) => {
        try {
            const response = await api.get(`/invoices/${id}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    // Get invoice by invoice number
    getInvoiceByNumber: async (invoiceNo) => {
        try {
            const response = await api.get(`/invoices/number/${invoiceNo}`);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    // Create new invoice
    createInvoice: async (invoiceData) => {
        try {
            const response = await api.post('/invoices', invoiceData);
            return response.data;
        } catch (error) {
            throw error;
        }
    },

    // Get next invoice number
    getNextInvoiceNumber: async () => {
        try {
            const response = await api.get('/invoices/utils/next-invoice-number');
            return response.data;
        } catch (error) {
            throw error;
        }
    },
};

export default invoiceService;
