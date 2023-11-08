import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Banner from "./Banner";
import { Link } from "react-scroll";
const Home = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <>
      <div className="p-4" id="home">
        <nav className="max-w-[1240px] mx-auto py-[15px] flex justify-end items-center">
          {!toggle ? (
            <AiOutlineMenu
              className="text-white text-2xl md:hidden block"
              onClick={() => setToggle(!toggle)}
            />
          ) : (
            <AiOutlineClose
              className="text-white text-2xl md:hidden block"
              onClick={() => setToggle(!toggle)}
            />
          )}
          <ul className="hidden md:flex text-white gap-[100px] pe-5">
            <li>
              <Link
                className="cursor-pointer"
                to="home"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                className="cursor-pointer"
                spy={true}
                smooth={true}
                offset={10}
                duration={500}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="resume"
                className="cursor-pointer"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Resume
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                className="cursor-pointer"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
          <ul
            className={`duration-300 md:hidden cursor-pointer text-white fixed  top-[85px] w-full h-screen ${
              !toggle ? "left-[-100%]" : "left-0"
            }`}
          >
            <li className="p-5">
              <Link
                to="home"
                className="cursor-pointer"
                onClick={() => setToggle(!toggle)}
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li className="p-5">
              <Link
                to="about"
                className="cursor-pointer"
                onClick={() => setToggle(!toggle)}
                spy={true}
                smooth={true}
                offset={50}
                duration={800}
              >
                About
              </Link>
            </li>
            <li className="p-5">
              <Link
                to="resume"
                className="cursor-pointer"
                onClick={() => setToggle(!toggle)}
                spy={true}
                smooth={true}
                offset={50}
                duration={800}
              >
                Resume
              </Link>
            </li>
            <li className="p-5 cursor-pointer">
              <Link
                className="cursor-pointer"
                to="contact"
                onClick={() => setToggle(!toggle)}
                spy={true}
                smooth={true}
                offset={50}
                duration={800}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <Banner />
    </>
  );
};
export default Home;
