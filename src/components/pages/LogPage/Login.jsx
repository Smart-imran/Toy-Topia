import React, { useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2"; // ✅ SweetAlert2 import
import { AuthContext } from "../../../provider/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [error, setError] = useState({
    email: false,
    password: false,
    general: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();

    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const passwordValid = password.length >= 6;

    setError({
      email: !emailValid,
      password: !passwordValid,
      general: "",
    });

    if (emailValid && passwordValid) {
      signIn(email, password)
        .then((result) => {
          const user = result.user;
          console.log("Logged in user:", user);

          // ✅ SweetAlert2 success popup
          Swal.fire({
            title: "Login Successful 🎉",
            text: "Welcome back!",
            icon: "success",
            confirmButtonColor: "#14b8a6", // teal color
            timer: 2000,
            showConfirmButton: false,
          });

          setEmail("");
          setPassword("");
          navigate(location.state ? location.state : "/");
        })
        .catch((err) => {
          console.log(err.code);
          let msg = "";
          if (err.code === "auth/invalid-email") {
            msg = "Invalid email address ❌";
          } else if (err.code === "auth/user-not-found") {
            msg = "No user found with this email ❌";
          } else if (err.code === "auth/wrong-password") {
            msg = "Incorrect password ❌";
          } else {
            msg = "Login failed. Please try again later.";
          }

          // ❌ Error alert (SweetAlert2)
          Swal.fire({
            title: "Login Failed",
            text: msg,
            icon: "error",
            confirmButtonColor: "#f87171", // red color
          });

          setError((prev) => ({ ...prev, general: msg }));
        });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-800 to-pink-600 p-6">
      <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl w-full max-w-md border border-white/20">
        <h1 className="text-3xl font-semibold text-white mb-2">Welcome Back</h1>
        <p className="text-sm text-white/70 mb-6">Login to your account</p>

        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email */}
          <div>
            <label className="text-sm text-white/80">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              className="mt-2 w-full rounded-xl px-4 py-3 bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-teal-300"
            />
            {error.email && (
              <p className="text-xs text-rose-300 mt-1">
                Please enter a valid email address
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-white/80">Password</label>
            <div className="relative mt-2">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full rounded-xl px-4 py-3 bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-teal-300 pr-12"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-white/60 hover:text-white text-sm"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            {error.password && (
              <p className="text-xs text-rose-300 mt-1">
                Password must be at least 6 characters long
              </p>
            )}
          </div>

          
          {error.general && (
            <p className="text-sm text-rose-400 font-medium">{error.general}</p>
          )}

          {/* Button */}
          <button
            type="submit"
            className="w-full rounded-xl py-3 font-semibold bg-gradient-to-r from-teal-400 to-cyan-500 text-slate-800 shadow-md hover:scale-[1.01] transition-transform"
          >
            Login
          </button>

          {/* Register Link */}
          <p className="font-semibold text-amber-300">
            Don't Have an Account?{" "}
            <Link className="text-white" to="/auth/register">
              Register Now
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
