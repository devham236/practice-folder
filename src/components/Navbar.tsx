import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" w-[100%] h-20 shadow-2xl flex items-center justify-center">
      <div className="w-[900px] flex items-center justify-between">
        <span>Icon</span>
        <div className="flex items-center">
          <Link className="mr-4" to={"/"}>
            Vergleich
          </Link>
          <Link className="mr-4" to={"/locations"}>
            Standorte
          </Link>
          <Link to={"/impressum"}>Impressum</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
