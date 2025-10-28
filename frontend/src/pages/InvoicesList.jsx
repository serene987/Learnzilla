import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import invoiceService from '../services/invoiceService';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const InvoicesList = () => {
    const navigate = useNavigate();
    const [invoices, setInvoices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchInvoices();
    }, []);

    const fetchInvoices = async () => {
        try {
            setLoading(true);
            const data = await invoiceService.getAllInvoices();
            setInvoices(data);
            setError('');
        } catch (err) {
            setError('Failed to load invoices. Please check if the backend server is running.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleViewInvoice = async (invoiceId) => {
        try {
            const response = await invoiceService.getInvoiceById(invoiceId);
            const invoiceData = response.data;
            navigate('/preview', { state: { invoiceData, viewOnly: true } });
        } catch (err) {
            setError('Failed to load invoice details');
            console.error(err);
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-primary-50 to-white">
            <Navbar />

            <main className="flex-grow container mx-auto px-4 py-8 max-w-7xl">
                <div className="card">
                    <div className="flex justify-between items-center mb-6">
                        <div>
                            <h1 className="text-3xl font-serif font-bold text-gray-800 mb-2">
                                All Invoices
                            </h1>
                            <p className="text-gray-600">
                                View and manage your invoices
                            </p>
                        </div>
                        <button
                            onClick={() => navigate('/')}
                            className="btn-primary"
                        >
                            ➕ New Invoice
                        </button>
                    </div>

                    {error && (
                        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
                            {error}
                        </div>
                    )}

                    {loading ? (
                        <div className="text-center py-12">
                            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
                            <p className="mt-4 text-gray-600">Loading invoices...</p>
                        </div>
                    ) : invoices.length === 0 ? (
                        <div className="text-center py-12">
                            <p className="text-gray-600 text-lg mb-4">No invoices found</p>
                            <button
                                onClick={() => navigate('/')}
                                className="btn-primary"
                            >
                                Create Your First Invoice
                            </button>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-primary-600 text-white">
                                        <th className="p-3 text-left text-sm font-semibold">Invoice No</th>
                                        <th className="p-3 text-left text-sm font-semibold">Date</th>
                                        <th className="p-3 text-left text-sm font-semibold">Customer</th>
                                        <th className="p-3 text-left text-sm font-semibold">GSTIN</th>
                                        <th className="p-3 text-right text-sm font-semibold">Amount</th>
                                        <th className="p-3 text-right text-sm font-semibold">Tax</th>
                                        <th className="p-3 text-right text-sm font-semibold">Total</th>
                                        <th className="p-3 text-center text-sm font-semibold">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {invoices.map((invoice) => (
                                        <tr key={invoice.id} className="border-b border-gray-200 hover:bg-gray-50">
                                            <td className="p-3 font-medium">{invoice.invoice_no}</td>
                                            <td className="p-3">
                                                {new Date(invoice.invoice_date).toLocaleDateString('en-IN')}
                                            </td>
                                            <td className="p-3">{invoice.customer_name}</td>
                                            <td className="p-3 text-sm text-gray-600">
                                                {invoice.gstin || 'N/A'}
                                            </td>
                                            <td className="p-3 text-right">
                                                ₹ {parseFloat(invoice.total_amount).toFixed(2)}
                                            </td>
                                            <td className="p-3 text-right">
                                                ₹ {parseFloat(invoice.total_tax).toFixed(2)}
                                            </td>
                                            <td className="p-3 text-right font-semibold text-primary-600">
                                                ₹ {parseFloat(invoice.grand_total).toFixed(2)}
                                            </td>
                                            <td className="p-3 text-center">
                                                <button
                                                    onClick={() => handleViewInvoice(invoice.id)}
                                                    className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-1 px-3 rounded transition-colors duration-200"
                                                >
                                                    View
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}

                    {!loading && invoices.length > 0 && (
                        <div className="mt-6 text-center text-gray-600">
                            Total Invoices: <span className="font-semibold">{invoices.length}</span>
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default InvoicesList;
