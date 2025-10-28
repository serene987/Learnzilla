import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gradient-to-r from-primary-600 to-primary-700 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link to="/" className="flex items-center space-x-2">
                        <div className="text-2xl font-serif font-bold text-white">
                            💎 Rishabh Jewellers
                        </div>
                    </Link>
                    
                    <div className="flex items-center space-x-6">
                        <Link 
                            to="/" 
                            className="text-white hover:text-primary-100 transition-colors font-medium"
                        >
                            New Invoice
                        </Link>
                        <Link 
                            to="/invoices" 
                            className="text-white hover:text-primary-100 transition-colors font-medium"
                        >
                            View Invoices
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
