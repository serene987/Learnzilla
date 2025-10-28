import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import customerService from '../services/customerService';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PhaseOne = () => {
    const navigate = useNavigate();
    const [customers, setCustomers] = useState([]);
    const [selectedCustomer, setSelectedCustomer] = useState('');
    const [showNewCustomerForm, setShowNewCustomerForm] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    
    const [newCustomer, setNewCustomer] = useState({
        name: '',
        address: '',
        gstin: '',
        contact: ''
    });

    useEffect(() => {
        fetchCustomers();
    }, []);

    const fetchCustomers = async () => {
        try {
            setLoading(true);
            const data = await customerService.getAllCustomers();
            setCustomers(data);
            setError('');
        } catch (err) {
            setError('Failed to load customers. Please check if the backend server is running.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewCustomer(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleCreateCustomer = async (e) => {
        e.preventDefault();
        
        if (!newCustomer.name.trim()) {
            setError('Customer name is required');
            return;
        }

        try {
            setLoading(true);
            const response = await customerService.createCustomer(newCustomer);
            
            // Add new customer to list
            await fetchCustomers();
            
            // Select the newly created customer
            setSelectedCustomer(response.data.id.toString());
            
            // Reset form
            setNewCustomer({
                name: '',
                address: '',
                gstin: '',
                contact: ''
            });
            setShowNewCustomerForm(false);
            setError('');
        } catch (err) {
            setError(err.message || 'Failed to create customer');
        } finally {
            setLoading(false);
        }
    };

    const handleProceedToBilling = () => {
        if (!selectedCustomer) {
            setError('Please select a customer');
            return;
        }

        const customer = customers.find(c => c.id.toString() === selectedCustomer);
        navigate('/billing', { state: { customer } });
    };

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-primary-50 to-white">
            <Navbar />
            
            <main className="flex-grow container mx-auto px-4 py-8 max-w-4xl">
                <div className="card">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-serif font-bold text-gray-800 mb-2">
                            Create New Invoice
                        </h1>
                        <p className="text-gray-600">
                            Select an existing customer or add a new one to begin
                        </p>
                    </div>

                    {error && (
                        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
                            {error}
                        </div>
                    )}

                    {/* Select Existing Customer */}
                    <div className="mb-8">
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Select Customer
                        </label>
                        <select
                            value={selectedCustomer}
                            onChange={(e) => setSelectedCustomer(e.target.value)}
                            className="input-field"
                            disabled={loading}
                        >
                            <option value="">-- Choose a customer --</option>
                            {customers.map((customer) => (
                                <option key={customer.id} value={customer.id}>
                                    {customer.name} {customer.gstin ? `(${customer.gstin})` : ''}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* OR Divider */}
                    <div className="flex items-center my-6">
                        <div className="flex-grow border-t border-gray-300"></div>
                        <span className="px-4 text-gray-500 font-medium">OR</span>
                        <div className="flex-grow border-t border-gray-300"></div>
                    </div>

                    {/* Add New Customer Button */}
                    {!showNewCustomerForm && (
                        <button
                            onClick={() => setShowNewCustomerForm(true)}
                            className="w-full bg-gold-500 hover:bg-gold-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                        >
                            <span>➕</span>
                            <span>Add New Customer</span>
                        </button>
                    )}

                    {/* New Customer Form */}
                    {showNewCustomerForm && (
                        <div className="bg-primary-50 p-6 rounded-lg">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-lg font-semibold text-gray-800">
                                    New Customer Details
                                </h3>
                                <button
                                    onClick={() => setShowNewCustomerForm(false)}
                                    className="text-gray-500 hover:text-gray-700"
                                >
                                    ✕
                                </button>
                            </div>

                            <form onSubmit={handleCreateCustomer} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Customer Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={newCustomer.name}
                                        onChange={handleInputChange}
                                        className="input-field"
                                        placeholder="Enter customer name"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Address
                                    </label>
                                    <textarea
                                        name="address"
                                        value={newCustomer.address}
                                        onChange={handleInputChange}
                                        className="input-field"
                                        rows="3"
                                        placeholder="Enter customer address"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            GSTIN
                                        </label>
                                        <input
                                            type="text"
                                            name="gstin"
                                            value={newCustomer.gstin}
                                            onChange={handleInputChange}
                                            className="input-field"
                                            placeholder="27AAAAA0000A1Z5"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Contact Number
                                        </label>
                                        <input
                                            type="tel"
                                            name="contact"
                                            value={newCustomer.contact}
                                            onChange={handleInputChange}
                                            className="input-field"
                                            placeholder="9876543210"
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {loading ? 'Creating...' : 'Create Customer'}
                                </button>
                            </form>
                        </div>
                    )}

                    {/* Proceed Button */}
                    <div className="mt-8 pt-6 border-t border-gray-200">
                        <button
                            onClick={handleProceedToBilling}
                            disabled={!selectedCustomer || loading}
                            className="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Proceed to Billing →
                        </button>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default PhaseOne;
