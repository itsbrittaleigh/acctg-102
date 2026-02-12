import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { path: '/', label: 'Chart of Accounts' },
    { path: '/journal', label: 'Journal' },
    { path: '/general-ledger', label: 'General Ledger' },
    { path: '/trial-balance', label: 'Trial Balance' },
  ];

  return (
    <nav className="navigation">
      <div className="nav-container">
        <div className="nav-brand">
          <h1>Accounting 102</h1>
        </div>

        <button
          className={`hamburger ${isOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link to={link.path} onClick={closeMenu}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
