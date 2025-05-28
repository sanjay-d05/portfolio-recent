import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import PortfolioProvider from './context/Portfoliocontext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <PortfolioProvider>
      <App />
    </PortfolioProvider>
    </BrowserRouter>
  </React.StrictMode>
);
