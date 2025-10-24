import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div>
      <h2 className="font-bold mb-5">Login with</h2>
      <div className="grid grid-cols-1 gap-2">
        <button className="btn btn-secondary btn-outline">
          <FcGoogle size={24} /> Login With Google
        </button>        
      </div>
    </div>
  );
};

export default SocialLogin;
