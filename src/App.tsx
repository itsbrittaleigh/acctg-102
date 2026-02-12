import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { ChartOfAccounts } from './pages/ChartOfAccounts';
import { GeneralLedger } from './pages/GeneralLedger';
import { Journal } from './pages/Journal';
import { TrialBalance } from './pages/TrialBalance';

function App() {
  return (
    <div className="app">
      <nav>
        <ul>
          <li>
            <Link to="/">Chart of Accounts</Link>
          </li>
          <li>
            <Link to="/journal">Journal</Link>
          </li>
          <li>
            <Link to="/general-ledger">General Ledger</Link>
          </li>
          <li>
            <Link to="/trial-balance">Trial Balance</Link>
          </li>
        </ul>
      </nav>

      <main>
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
