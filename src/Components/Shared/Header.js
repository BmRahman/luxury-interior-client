import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {

    const menuItems = 
        <>
        <li className='font-semibold'> <Link to='/home'>Home</Link> </li>
        <li className='font-semibold'> <Link to='/services'>Services</Link> </li>
        </>

    return (
        <div>
            
<div className="navbar header py-5">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {
            menuItems
        }

        <div className="navbar-end">
            <li><button className='btn log mr-3 mt-2'>Login</button></li>
            <li><button className='btn log mt-2'>Sign Up</button></li>
        </div>
      </ul>
    </div>
    <Link to='/home'> <button>Luxury Interior</button> </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
      {
        menuItems
      }
    </ul>
  </div>
  <div className="navbar-end hidden lg:flex">
    <button className='btn log mr-3'>Login</button>
    <button className='btn log'>Sign Up</button>
  </div>
</div>

        </div>
    );
};

export default Header;