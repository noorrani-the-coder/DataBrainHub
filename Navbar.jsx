import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../components/assests/logo1.jpg';
import { useDispatch } from 'react-redux';
import { LogOut, reset } from '../features/authSlice';
import './Navbar.css'

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate('/');
  };

  return (
    <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <NavLink to="/dashboard" className="navbar-item">
          <img src={logo} width="118 px" height="28 px" alt="logo" />
        </NavLink>
        <button
          className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
          aria-label="menu"
          aria-expanded="false"
          onClick={toggleMenu}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>
      <div className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <button onClick={logout} className="buttons is-light ">
                Log out
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;




