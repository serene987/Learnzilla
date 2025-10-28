import { Routes, Route } from 'react-router-dom';

import PhaseOne from './pages/PhaseOne.jsx';
import PhaseTwo from './pages/PhaseTwo.jsx';
import PhaseThree from './pages/PhaseThree.jsx';
import InvoicesList from './pages/InvoicesList.jsx';

import './index.css';

function App() {
  return (
    <Routes>
      {/* Phase 1: Customer Selection */}
      <Route path='/' element={<PhaseOne />} />
      
      {/* Phase 2: Billing Form */}
      <Route path='/billing' element={<PhaseTwo />} />
      
      {/* Phase 3: Invoice Preview */}
      <Route path='/preview' element={<PhaseThree />} />
      
      {/* View All Invoices */}
      <Route path='/invoices' element={<InvoicesList />} />
    </Routes>
  );
}

export default App;
