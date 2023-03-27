import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-teal-500 bg-opacity-10 backdrop-filter backdrop-blur-[5px] fixed top-0 left-0 w-full h-[60px] z-10">
      <nav className="w-full h-full flex justify-between items-center px-6 py-2">
        <div className="text-2xl font-semibold text-black ">React NLP</div>
        <ul className="flex gap-3">
          <li>TOKENIZATION</li>
          <li>SENTENCES</li>
          <li>
            <Link to={"/pos"}>POS</Link>
          </li>
          <li>STEMMING</li>
          <li>SENTIMENT</li>
          <li>NGRAMS</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
