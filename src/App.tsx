import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Navigation } from './components/Navigation';
import { ChartOfAccounts } from './pages/ChartOfAccounts';
import { GeneralLedger } from './pages/GeneralLedger';
import { Journal } from './pages/Journal';
import { TrialBalance } from './pages/TrialBalance';

function App() {
  return (
    <div className="app">
      <Navigation />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<ChartOfAccounts />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/general-ledger" element={<GeneralLedger />} />
          <Route path="/trial-balance" element={<TrialBalance />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
