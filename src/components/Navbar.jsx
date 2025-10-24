import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userImg from "../assets/user.png";
import { FaLock, FaLockOpen } from "react-icons/fa";
import { AuthContext } from "../provider/AuthProvider";

function Navbar() {
  const { user, logOut } = use(AuthContext);
  const handleLogOut = () => {
    console.log("User try to logout");
    logOut()
      .then(() => {
        alert("You LogOut Successfully")
      })
      .catch((error) => {
        console.log(error)
      });
  };
  return (
    <div className="flex items-center justify-between">
      <div className="">{user && user.email}</div>
      <div className="nav flex gap-5 font-bold text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login-btn flex gap-3">
        <img src={userImg} alt="" />

        {user ? (
          <button onClick={handleLogOut} className="btn btn-error px-10">
            {" "}
            <FaLockOpen size={20} /> <span className="text-xl">LogOut</span>
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-error px-10">
            <FaLock size={20} /> <span className="text-xl">Login</span>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
