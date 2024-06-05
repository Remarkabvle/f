import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import Create from './components/create/Create';
import Product from './components/product/Product';
import Admin from './components/admin/Admin';
import './App.css';

const App = () => {
  const currentPage = useSelector((state) => state.navigation.currentPage);
  const isAdminPage = ['admin', 'create', 'manage'].includes(currentPage);

  return (
    <div className="app">
      <Navbar />
      {isAdminPage && <Sidebar />}
      <div className={isAdminPage ? 'content-with-sidebar' : 'content'}>
        {currentPage === 'home' && <h2>Welcome to the Home Page</h2>}
        {currentPage === 'products' && <Product />}
        {currentPage === 'create' && <Create />}
        {currentPage === 'manage' && <Admin />}
        {currentPage === 'admin' && <Admin />}
      </div>
    </div>
  );
};

export default App;
