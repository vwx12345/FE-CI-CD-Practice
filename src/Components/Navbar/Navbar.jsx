import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white text-black p-4 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl lg:text-2xl font-bold lg:ml-12 lg:mr-8">
          <Link to="/">HALMONIA</Link>
        </h1>
      </div>
    </nav>
  );
};

export default NavBar;
