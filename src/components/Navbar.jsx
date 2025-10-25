import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router";
import userImg from "../assets/user.png";
import { FaLock, FaLockOpen, FaBars, FaTimes } from "react-icons/fa";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

function Navbar() {
  const { user, logOut } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  // ✅ Logout Handler
  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: "Logout Successful 🎉",
          text: "You have logged out successfully!",
          icon: "success",
          confirmButtonText: "OK",
          background: "#0f172a",
          color: "#f9fafb",
          confirmButtonColor: "#14b8a6",
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Oops!",
          text: error.message,
          icon: "error",
          confirmButtonColor: "#ef4444",
        });
      });
  };

  return (
    <nav className="bg-gray-300 shadow-md sticky rounded-xl top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/*  Left Side - User Info */}
          <div className="flex items-center gap-2">
            <img
              src={user ? user.photoURL : userImg}
              alt="User"
              className="w-10 h-10 rounded-full border border-gray-400"
            />
            {user && (
              <span className="hidden sm:block font-medium text-gray-800">
                {user.email}
              </span>
            )}
          </div>

          {/*  Center - Nav Links */}
          <div className="hidden md:flex space-x-6 font-semibold text-pink-600">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-pink-700 underline" : ""
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-pink-700 underline" : ""
              }
            >
              About
            </NavLink>
            <NavLink
              to="/career"
              className={({ isActive }) =>
                isActive ? "text-pink-700 underline" : ""
              }
            >
              Career
            </NavLink>
          </div>

          {/*  Right Side - Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <button
                onClick={handleLogOut}
                className="btn btn-error px-6 flex items-center gap-2"
              >
                <FaLockOpen size={18} /> <span>Logout</span>
              </button>
            ) : (
              <Link
                to="/auth/login"
                className="btn btn-error px-6 flex items-center gap-2"
              >
                <FaLock size={18} /> <span>Login</span>
              </Link>
            )}
          </div>

          {/*  Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-800 focus:outline-none"
            >
              {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* ✅ Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-200 border-t border-gray-300">
          <div className="flex flex-col items-center space-y-4 py-4 font-semibold text-pink-600">
            <NavLink
              to="/"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? "text-pink-700 underline" : ""
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? "text-pink-700 underline" : ""
              }
            >
              About
            </NavLink>
            <NavLink
              to="/career"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive ? "text-pink-700 underline" : ""
              }
            >
              Career
            </NavLink>

            {user ? (
              <button
                onClick={() => {
                  handleLogOut();
                  setMenuOpen(false);
                }}
                className="btn btn-error w-40 flex items-center justify-center gap-2"
              >
                <FaLockOpen size={18} /> Logout
              </button>
            ) : (
              <Link
                to="/auth/login"
                onClick={() => setMenuOpen(false)}
                className="btn btn-error w-40 flex items-center justify-center gap-2"
              >
                <FaLock size={18} /> Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
