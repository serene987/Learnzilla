const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="text-center">
                    <p className="text-sm">
                        © {new Date().getFullYear()} Rishabh Jewellers. All rights reserved.
                    </p>
                    <p className="text-xs text-gray-400 mt-2">
                        Automated Billing System v1.0
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
