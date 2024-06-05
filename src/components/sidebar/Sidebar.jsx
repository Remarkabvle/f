import React from 'react';
import { useDispatch } from 'react-redux';
import { navigate } from '../../context/slice/navigationSlice';
import { FaPlus, FaThList, FaSignOutAlt, FaHome } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(navigate('home'));
  };

  return (
    <div className="sidebar">
      <h2>Dashboard</h2>
      <ul>
        <li onClick={() => dispatch(navigate('create'))}>
          <FaPlus /> Create products
        </li>
        <li onClick={() => dispatch(navigate('manage'))}>
          <FaThList /> Manage products
        </li>
        <li onClick={handleLogout}>
          <FaSignOutAlt /> Log Out
        </li>
        <li onClick={() => dispatch(navigate('home'))}>
          <FaHome /> Home
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
