import React from "react";

import logo from "../assets/logo.png";
import { format } from "date-fns";
import { Link } from "react-router";

const Header = () => {
  return (
    <div className="flex flex-col items-center  justify-between">
      <Link to="/category/0" className="block">
        {" "}
        <img
          className="w-[200px] hover:opacity-80 transition-opacity duration-300 cursor-pointer"
          src={logo}
          alt="ToyTopia Logo"
        />
      </Link>

      <p className="font-semibold text-accent">
        {format(new Date(), "EEEE, MMMM dd, yyyy")}
      </p>
    </div>
  );
};

export default Header;
