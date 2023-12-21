import Image from "next/image";
import React from "react";
import { IoIosHelpCircleOutline } from "react-icons/io";
import logo from "../../assets/Screenshot from 2023-12-19 12-23-50.png";

const Navbar: React.FC = () => {
  return (
    <nav className="shadow-md">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex justify-between align-middle items-center">
        <div>
          <Image src={logo}   alt="" />
        </div>
        <div className="text-4xl">
          <IoIosHelpCircleOutline />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
