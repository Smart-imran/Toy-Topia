import React from 'react'
import { Link, NavLink } from 'react-router';
import userImg from "../assets/user.png";
import { FaLock } from 'react-icons/fa';

function Navbar() {
  return (
   <div className='flex items-center justify-between'>
            <div className=""></div>
            <div className="nav flex gap-5 font-bold text-accent">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>
            <div className="login-btn flex gap-3">
                <img src={userImg} alt="" />
                <Link to="/auth/login" className='btn btn-error px-10'><FaLock size={20} /> <span className='text-xl'>Login</span></Link>
            </div>
        </div>
  )
}

export default Navbar