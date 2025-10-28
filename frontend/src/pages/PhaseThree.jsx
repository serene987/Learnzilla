import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import invoiceService from '../services/invoiceService';
import { downloadInvoicePDF, printInvoicePDF } from '../utils/pdfGenerator';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PhaseThree = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const invoiceData = location.state?.invoiceData;

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (!invoiceData) {
            navigate('/');
        }
    }, [invoiceData, navigate]);

    const handleSaveInvoice = async () => {
        try {
            setLoading(true);
            setError('');

            await invoiceService.createInvoice(invoiceData);
            
            setSuccess(true);
            setTimeout(() => {
                navigate('/');
            }, 3000);
        } catch (err) {
            setError(err.message || 'Failed to save invoice');
        } finally {
            setLoading(false);
        }
    };

    const handleDownloadPDF = () => {
        try {
            downloadInvoicePDF(invoiceData);
        } catch (err) {
            setError('Failed to generate PDF');
            console.error(err);
        }
    };

    const handlePrintPDF = () => {
        try {
            printInvoicePDF(invoiceData);
        } catch (err) {
            setError('Failed to print PDF');
            console.error(err);
        }
    };

    if (!invoiceData) {
        return null;
    }

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-primary-50 to-white">
            <Navbar />

            <main className="flex-grow container mx-auto px-4 py-8 max-w-5xl">
                <div className="card">
                    <div className="text-center mb-6">
                        <h1 className="text-3xl font-serif font-bold text-gray-800 mb-2">
                            Invoice Preview
                        </h1>
                        <p className="text-gray-600">
                            Review and save your invoice
                        </p>
                    </div>

                    {error && (
                        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
                            {error}
                        </div>
                    )}

                    {success && (
                        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-6">
                            ✓ Invoice saved successfully! Redirecting...
                        </div>
                    )}

                    {/* Invoice Display */}
                    <div className="bg-white border-2 border-gray-200 rounded-lg p-8 mb-6">
                        {/* Company Header */}
                        <div className="text-center mb-6 pb-4 border-b-2 border-primary-600">
                            <h2 className="text-3xl font-serif font-bold text-primary-600 mb-2">
                                💎 RISHABH JEWELLERS
                            </h2>
                            <p className="text-sm text-gray-600">
                                Shop No. 123, Jewellery Market, Mumbai - 400001
                            </p>
                            <p className="text-sm text-gray-600">
                                GSTIN: 27AAAAA0000A1Z5 | Contact: +91 98765 43210
                            </p>
                            <p className="text-sm text-gray-600">
                                Email: info@rishabhjewellers.com
                            </p>
                        </div>

                        {/* Invoice Title */}
                        <div className="text-center mb-6">
                            <h3 className="text-xl font-bold text-gray-800">TAX INVOICE</h3>
                        </div>

                        {/* Invoice Details */}
                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <div>
                                <p className="text-sm text-gray-600">Invoice No:</p>
                                <p className="font-semibold">{invoiceData.invoice_no}</p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm text-gray-600">Date:</p>
                                <p className="font-semibold">
                                    {new Date(invoiceData.invoice_date).toLocaleDateString('en-IN')}
                                </p>
                            </div>
                        </div>

                        {/* Customer Details */}
                        <div className="bg-gray-50 p-4 rounded-lg mb-6">
                            <h4 className="font-semibold text-gray-800 mb-2">Bill To:</h4>
                            <p className="font-medium">{invoiceData.customer_name}</p>
                            <p className="text-sm text-gray-600">{invoiceData.address}</p>
                            {invoiceData.gstin && (
                                <p className="text-sm text-gray-600">GSTIN: {invoiceData.gstin}</p>
                            )}
                            {invoiceData.contact && (
                                <p className="text-sm text-gray-600">Contact: {invoiceData.contact}</p>
                            )}
                        </div>

                        {/* Items Table */}
                        <div className="mb-6 overflow-x-auto">
                            <table className="w-full border-collapse border border-gray-300">
                                <thead>
                                    <tr className="bg-primary-600 text-white">
                                        <th className="border border-gray-300 p-2 text-left text-sm">S.No</th>
                                        <th className="border border-gray-300 p-2 text-left text-sm">Description</th>
                                        <th className="border border-gray-300 p-2 text-left text-sm">HSN Code</th>
                                        <th className="border border-gray-300 p-2 text-right text-sm">Weight (g)</th>
                                        <th className="border border-gray-300 p-2 text-right text-sm">Rate/g (₹)</th>
                                        <th className="border border-gray-300 p-2 text-right text-sm">Amount (₹)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {invoiceData.items.map((item, index) => (
                                        <tr key={index} className="hover:bg-gray-50">
                                            <td className="border border-gray-300 p-2 text-center">{index + 1}</td>
                                            <td className="border border-gray-300 p-2">{item.description}</td>
                                            <td className="border border-gray-300 p-2 text-center">{item.hsn_code}</td>
                                            <td className="border border-gray-300 p-2 text-right">
                                                {parseFloat(item.weight).toFixed(3)}
                                            </td>
                                            <td className="border border-gray-300 p-2 text-right">
                                                {parseFloat(item.rate_per_gram).toFixed(2)}
                                            </td>
                                            <td className="border border-gray-300 p-2 text-right font-semibold">
                                                {parseFloat(item.amount).toFixed(2)}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Totals */}
                        <div className="flex justify-end mb-6">
                            <div className="w-full md:w-1/2 space-y-2">
                                <div className="flex justify-between py-1">
                                    <span className="text-gray-700">Subtotal:</span>
                                    <span className="font-semibold">₹ {invoiceData.totalAmount}</span>
                                </div>
                                <div className="flex justify-between py-1">
                                    <span className="text-gray-700">CGST (1.5%):</span>
                                    <span className="font-semibold">₹ {invoiceData.cgst}</span>
                                </div>
                                <div className="flex justify-between py-1">
                                    <span className="text-gray-700">SGST (1.5%):</span>
                                    <span className="font-semibold">₹ {invoiceData.sgst}</span>
                                </div>
                                <div className="flex justify-between py-1">
                                    <span className="text-gray-700">Total Tax:</span>
                                    <span className="font-semibold">₹ {invoiceData.totalTax}</span>
                                </div>
                                <div className="flex justify-between py-2 border-t-2 border-gray-300">
                                    <span className="text-lg font-bold text-gray-800">Grand Total:</span>
                                    <span className="text-lg font-bold text-primary-600">
                                        ₹ {invoiceData.grandTotal}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Bank Details */}
                        <div className="bg-gray-50 p-4 rounded-lg mb-6">
                            <h4 className="font-semibold text-gray-800 mb-2">Bank Details:</h4>
                            <div className="grid grid-cols-2 gap-2 text-sm">
                                <div>
                                    <span className="text-gray-600">Bank Name:</span>
                                    <span className="ml-2 font-medium">State Bank of India</span>
                                </div>
                                <div>
                                    <span className="text-gray-600">Account No:</span>
                                    <span className="ml-2 font-medium">1234567890</span>
                                </div>
                                <div>
                                    <span className="text-gray-600">IFSC Code:</span>
                                    <span className="ml-2 font-medium">SBIN0001234</span>
                                </div>
                                <div>
                                    <span className="text-gray-600">Branch:</span>
                                    <span className="ml-2 font-medium">Mumbai Main Branch</span>
                                </div>
                            </div>
                        </div>

                        {/* Terms */}
                        <div className="text-xs text-gray-600 mb-4">
                            <p className="font-semibold mb-1">Terms & Conditions:</p>
                            <p>1. Goods once sold will not be taken back or exchanged.</p>
                            <p>2. All disputes are subject to Mumbai jurisdiction only.</p>
                        </div>

                        {/* Signature */}
                        <div className="text-right mt-8">
                            <p className="font-medium">For Rishabh Jewellers</p>
                            <div className="mt-8 mb-2">
                                <div className="inline-block border-t border-gray-400 pt-1">
                                    Authorized Signatory
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="text-center text-sm text-gray-500 mt-6 pt-4 border-t border-gray-200">
                            Thank you for your business!
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <button
                            onClick={() => navigate('/billing', { state: { customer: { id: invoiceData.customer_id, name: invoiceData.customer_name, address: invoiceData.address, gstin: invoiceData.gstin, contact: invoiceData.contact } } })}
                            className="btn-secondary py-3"
                            disabled={loading || success}
                        >
                            ← Edit
                        </button>
                        <button
                            onClick={handleDownloadPDF}
                            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200"
                            disabled={loading || success}
                        >
                            📥 Download PDF
                        </button>
                        <button
                            onClick={handlePrintPDF}
                            className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200"
                            disabled={loading || success}
                        >
                            🖨️ Print
                        </button>
                        <button
                            onClick={handleSaveInvoice}
                            disabled={loading || success}
                            className="btn-primary py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? 'Saving...' : success ? '✓ Saved' : '💾 Save Invoice'}
                        </button>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default PhaseThree;
