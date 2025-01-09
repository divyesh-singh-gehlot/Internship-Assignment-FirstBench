import React, { useState } from 'react';
import { FaHome } from "react-icons/fa";
import { HiOutlineSparkles } from "react-icons/hi2";
import { PiCastleTurret } from "react-icons/pi";
import { BsLightning } from "react-icons/bs";
import { GoGraph } from "react-icons/go";
import { PiNotebook } from "react-icons/pi";
import { BsBell } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-navbar_bg text-white">
      <div className="flex justify-center gap-24 items-center py-2 px-5 md:px-10">

        <div className="text-2xl font-semibold">
          <h1>Firstbench</h1>
        </div>

        <div className="lg:hidden">
          {menuOpen ? (
            <IoMdClose
              className="text-2xl cursor-pointer"
              onClick={() => setMenuOpen(false)}
            />
          ) : (
            <GiHamburgerMenu
              className="text-2xl cursor-pointer"
              onClick={() => setMenuOpen(true)}
            />
          )}
        </div>

        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } lg:flex flex-col lg:flex-row absolute lg:static bg-navbar_bg w-full lg:w-auto top-14 left-0 lg:top-0 lg:left-auto gap-7 px-5 lg:px-0 lg:gap-7 lg:place-content-center lg:items-center transition-all`}
        >
          <span className="flex gap-2 place-items-center py-2 lg:py-0">
            <FaHome /> Dashboard
          </span>
          <span className="flex gap-2 place-items-center py-2 lg:py-0">
            <HiOutlineSparkles /> FirstGuru
          </span>
          <span className="flex gap-2 place-items-center py-2 lg:py-0">
            <PiCastleTurret /> TownHall
          </span>
          <span className="flex gap-2 place-items-center py-2 lg:py-0">
            <BsLightning /> AI Evaluation
          </span>
          <span className="flex gap-2 place-items-center py-2 lg:py-0">
            <GoGraph /> Performance
          </span>
          <span className="flex gap-2 place-items-center py-2 lg:py-0">
            <PiNotebook /> Mock Test
          </span>
        </div>

        <div className="flex gap-6 items-center">
          <div>
            <BsBell />
          </div>
          <div className="flex gap-1 items-center bg-profile_div_bg p-1 rounded-md">
            <div className="h-fit w-fit bg-profile_bg px-2 rounded-md text-black">
              P
            </div>
            <div>Profile</div>
            <div>
              <IoIosArrowDown />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
