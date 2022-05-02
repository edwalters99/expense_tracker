import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Category from './components/Category/Category';
import Transactions from './components/Transaction/Transactions';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='categories' element={<Category />} />
        <Route path="#transactions" element={<Transactions/>}/>
      </Routes>
    </BrowserRouter>
);
