import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../../../provider/AuthProvider";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState({
    name: false,
    photoURL: false,
    email: false,
    password: false,
  });

  const { createUser, setUser, updateUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    let emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    let passwordValid = password.length >= 6;
    let nameValid = name.trim().length > 0;
    let photoValid = photoURL.trim().length > 0;

    setError({
      name: !nameValid,
      photoURL: !photoValid,
      email: !emailValid,
      password: !passwordValid,
    });

    if (!(nameValid && photoValid && emailValid && passwordValid)) {
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;

        updateUser({
          displayName: name,
          photoURL: photoURL,
        })
          .then(() => {
            setUser({
              ...user,
              displayName: name,
              photoURL: photoURL,
            });

            Swal.fire({
              title: "Registration Successful 🎉",
              text: "Your account has been created successfully!",
              icon: "success",
              confirmButtonText: "Cool 😎",
              background: "#0f172a",
              color: "#f9fafb",
              confirmButtonColor: "#14b8a6",
            });

            navigate("/");

            setName("");
            setPhotoURL("");
            setEmail("");
            setPassword("");
          })
          .catch((error) => {
            Swal.fire({
              title: "Profile Update Failed ",
              text: error.message,
              icon: "error",
              confirmButtonColor: "#ef4444",
            });
          });
      })
      .catch((error) => {
        Swal.fire({
          title: "Oops! 😢",
          text: error.message,
          icon: "error",
          confirmButtonColor: "#ef4444",
        });
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-800 to-pink-600 p-6">
      <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl w-full max-w-md border border-white/20">
        <h1 className="text-3xl font-semibold text-white mb-2">
          Create Account
        </h1>
        <p className="text-sm text-white/70 mb-6">Register to your account</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="text-sm text-white/80">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your full name"
              className="mt-2 w-full rounded-xl px-4 py-3 bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-teal-300"
            />
            {error.name && (
              <p className="text-xs text-rose-300 mt-1">
                Please enter your name
              </p>
            )}
          </div>

          {/* Photo URL */}
          <div>
            <label className="text-sm text-white/80">Photo URL</label>
            <input
              type="text"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              placeholder="https://example.com/photo.jpg"
              className="mt-2 w-full rounded-xl px-4 py-3 bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-teal-300"
            />
            {error.photoURL && (
              <p className="text-xs text-rose-300 mt-1">
                Please enter a valid photo URL
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="text-sm text-white/80">Email</label>
            <input
              type="email"
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

          {/* ✅ Register Button */}
          <button
            type="submit"
            className="w-full rounded-xl py-3 font-semibold bg-gradient-to-r from-teal-400 to-cyan-500 text-slate-900 shadow-md hover:scale-[1.01] transition-transform"
          >
            Register
          </button>

          {/* ✅ Google Login Button (Future Use) */}
          <button
            type="button"
            className="w-full rounded-xl py-3 font-semibold flex items-center justify-center gap-2 border border-white/20 bg-white/10 text-white hover:bg-white/20 transition-all duration-200"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
            Continue with Google
          </button>

          <p className="font-semibold text-amber-300 text-center">
            Already have an account?{" "}
            <Link className="text-white" to="/auth/login">
              Login Now
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
