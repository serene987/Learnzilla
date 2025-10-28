import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import invoiceService from '../services/invoiceService';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PhaseTwo = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const customer = location.state?.customer;

    const [invoiceNo, setInvoiceNo] = useState('');
    const [invoiceDate, setInvoiceDate] = useState(new Date().toISOString().split('T')[0]);
    const [items, setItems] = useState([
        { description: '', hsn_code: '7113', weight: '', rate_per_gram: '', amount: 0 }
    ]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (!customer) {
            navigate('/');
            return;
        }
        fetchNextInvoiceNumber();
    }, [customer, navigate]);

    const fetchNextInvoiceNumber = async () => {
        try {
            const response = await invoiceService.getNextInvoiceNumber();
            setInvoiceNo(response.data.next_invoice_number);
        } catch (err) {
            console.error('Failed to fetch invoice number:', err);
            setInvoiceNo('INV-0001');
        }
    };

    const handleItemChange = (index, field, value) => {
        const updatedItems = [...items];
        updatedItems[index][field] = value;

        // Auto-calculate amount
        if (field === 'weight' || field === 'rate_per_gram') {
            const weight = parseFloat(updatedItems[index].weight) || 0;
            const rate = parseFloat(updatedItems[index].rate_per_gram) || 0;
            updatedItems[index].amount = (weight * rate).toFixed(2);
        }

        setItems(updatedItems);
    };

    const addItem = () => {
        setItems([
            ...items,
            { description: '', hsn_code: '7113', weight: '', rate_per_gram: '', amount: 0 }
        ]);
    };

    const removeItem = (index) => {
        if (items.length > 1) {
            const updatedItems = items.filter((_, i) => i !== index);
            setItems(updatedItems);
        }
    };

    const calculateTotals = () => {
        const totalAmount = items.reduce((sum, item) => sum + parseFloat(item.amount || 0), 0);
        const cgst = totalAmount * 0.015; // 1.5%
        const sgst = totalAmount * 0.015; // 1.5%
        const totalTax = cgst + sgst;
        const grandTotal = totalAmount + totalTax;

        return {
            totalAmount: totalAmount.toFixed(2),
            cgst: cgst.toFixed(2),
            sgst: sgst.toFixed(2),
            totalTax: totalTax.toFixed(2),
            grandTotal: grandTotal.toFixed(2)
        };
    };

    const handlePreviewInvoice = () => {
        // Validation
        if (!invoiceNo || !invoiceDate) {
            setError('Invoice number and date are required');
            return;
        }

        const hasEmptyItems = items.some(item => 
            !item.description || !item.weight || !item.rate_per_gram
        );

        if (hasEmptyItems) {
            setError('Please fill in all item details');
            return;
        }

        const totals = calculateTotals();

        const invoiceData = {
            invoice_no: invoiceNo,
            customer_id: customer.id,
            customer_name: customer.name,
            address: customer.address,
            gstin: customer.gstin,
            contact: customer.contact,
            invoice_date: invoiceDate,
            items: items,
            ...totals
        };

        navigate('/preview', { state: { invoiceData } });
    };

    const totals = calculateTotals();

    if (!customer) {
        return null;
    }

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-primary-50 to-white">
            <Navbar />

            <main className="flex-grow container mx-auto px-4 py-8 max-w-6xl">
                <div className="card">
                    <div className="text-center mb-6">
                        <h1 className="text-3xl font-serif font-bold text-gray-800 mb-2">
                            Invoice Details
                        </h1>
                        <p className="text-gray-600">
                            Add items and generate invoice
                        </p>
                    </div>

                    {error && (
                        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
                            {error}
                        </div>
                    )}

                    {/* Invoice Header */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 p-4 bg-gray-50 rounded-lg">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">
                                Invoice Number
                            </label>
                            <input
                                type="text"
                                value={invoiceNo}
                                onChange={(e) => setInvoiceNo(e.target.value)}
                                className="input-field bg-white"
                                readOnly
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-1">
                                Invoice Date
                            </label>
                            <input
                                type="date"
                                value={invoiceDate}
                                onChange={(e) => setInvoiceDate(e.target.value)}
                                className="input-field bg-white"
                            />
                        </div>
                    </div>

                    {/* Customer Details */}
                    <div className="mb-6 p-4 bg-primary-50 rounded-lg">
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">
                            Customer Details
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <p className="text-sm text-gray-600">Name</p>
                                <p className="font-medium">{customer.name}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">GSTIN</p>
                                <p className="font-medium">{customer.gstin || 'N/A'}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Address</p>
                                <p className="font-medium">{customer.address || 'N/A'}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">Contact</p>
                                <p className="font-medium">{customer.contact || 'N/A'}</p>
                            </div>
                        </div>
                    </div>

                    {/* Items Section */}
                    <div className="mb-6">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-semibold text-gray-800">
                                Invoice Items
                            </h3>
                            <button
                                onClick={addItem}
                                className="bg-gold-500 hover:bg-gold-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
                            >
                                ➕ Add Item
                            </button>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-primary-600 text-white">
                                        <th className="p-3 text-left text-sm font-semibold">S.No</th>
                                        <th className="p-3 text-left text-sm font-semibold">Description</th>
                                        <th className="p-3 text-left text-sm font-semibold">HSN Code</th>
                                        <th className="p-3 text-left text-sm font-semibold">Weight (g)</th>
                                        <th className="p-3 text-left text-sm font-semibold">Rate/g (₹)</th>
                                        <th className="p-3 text-left text-sm font-semibold">Amount (₹)</th>
                                        <th className="p-3 text-left text-sm font-semibold">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {items.map((item, index) => (
                                        <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                                            <td className="p-3 text-center">{index + 1}</td>
                                            <td className="p-3">
                                                <input
                                                    type="text"
                                                    value={item.description}
                                                    onChange={(e) => handleItemChange(index, 'description', e.target.value)}
                                                    className="w-full px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                                    placeholder="Gold Necklace"
                                                />
                                            </td>
                                            <td className="p-3">
                                                <input
                                                    type="text"
                                                    value={item.hsn_code}
                                                    onChange={(e) => handleItemChange(index, 'hsn_code', e.target.value)}
                                                    className="w-full px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                                    placeholder="7113"
                                                />
                                            </td>
                                            <td className="p-3">
                                                <input
                                                    type="number"
                                                    step="0.001"
                                                    value={item.weight}
                                                    onChange={(e) => handleItemChange(index, 'weight', e.target.value)}
                                                    className="w-full px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                                    placeholder="25.500"
                                                />
                                            </td>
                                            <td className="p-3">
                                                <input
                                                    type="number"
                                                    step="0.01"
                                                    value={item.rate_per_gram}
                                                    onChange={(e) => handleItemChange(index, 'rate_per_gram', e.target.value)}
                                                    className="w-full px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                                    placeholder="6000.00"
                                                />
                                            </td>
                                            <td className="p-3 font-semibold">
                                                ₹ {parseFloat(item.amount || 0).toFixed(2)}
                                            </td>
                                            <td className="p-3 text-center">
                                                <button
                                                    onClick={() => removeItem(index)}
                                                    disabled={items.length === 1}
                                                    className="text-red-600 hover:text-red-800 disabled:text-gray-400 disabled:cursor-not-allowed"
                                                >
                                                    🗑️
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Totals Section */}
                    <div className="bg-gray-50 p-6 rounded-lg">
                        <div className="max-w-md ml-auto space-y-3">
                            <div className="flex justify-between text-gray-700">
                                <span className="font-medium">Subtotal:</span>
                                <span className="font-semibold">₹ {totals.totalAmount}</span>
                            </div>
                            <div className="flex justify-between text-gray-700">
                                <span className="font-medium">CGST (1.5%):</span>
                                <span className="font-semibold">₹ {totals.cgst}</span>
                            </div>
                            <div className="flex justify-between text-gray-700">
                                <span className="font-medium">SGST (1.5%):</span>
                                <span className="font-semibold">₹ {totals.sgst}</span>
                            </div>
                            <div className="flex justify-between text-gray-700">
                                <span className="font-medium">Total Tax:</span>
                                <span className="font-semibold">₹ {totals.totalTax}</span>
                            </div>
                            <div className="border-t-2 border-gray-300 pt-3">
                                <div className="flex justify-between text-lg">
                                    <span className="font-bold text-gray-800">Grand Total:</span>
                                    <span className="font-bold text-primary-600">₹ {totals.grandTotal}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-8 flex justify-between gap-4">
                        <button
                            onClick={() => navigate('/')}
                            className="btn-secondary px-8 py-3"
                        >
                            ← Back
                        </button>
                        <button
                            onClick={handlePreviewInvoice}
                            disabled={loading}
                            className="btn-primary px-8 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Preview Invoice →
                        </button>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default PhaseTwo;
