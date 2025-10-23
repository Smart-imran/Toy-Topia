import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-bold">FindUs ....</h2>
      <div className="">
        <div className="join join-vertical w-full">
          <a
            href="https://www.facebook.com/toytopia"
            target="_blank"
            rel="noopener noreferrer" 
            className="btn bg-base-300 join-item hover:bg-blue-600 hover:text-white transition-colors duration-300 flex items-center gap-2"
          >
            <FaFacebook size={20} />
            Facebook
          </a>
          <a
            href="https://twitter.com/toytopia"
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-base-300 join-item hover:bg-blue-400 hover:text-white transition-colors duration-300 flex items-center gap-2"
          >
            <FaTwitter size={20} />
            Twitter
          </a>
          <a
            href="https://www.instagram.com/toytopia"
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-base-300 join-item hover:bg-gradient-to-r from-pink-500 to-orange-500 hover:text-white transition-colors duration-300 flex items-center gap-2"
          >
            <FaInstagram size={20} />
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
