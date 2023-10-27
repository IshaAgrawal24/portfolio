import { HiAcademicCap } from "react-icons/hi";
import { AiOutlineFieldTime } from "react-icons/ai";
import { MdOutlineComputer, MdOutlineColorLens } from "react-icons/md";
import { GoGraph } from "react-icons/go";
import "./Resume.css";
import { useState } from "react";
import Education from "./components/Education";
import WorkHistory from "./components/WorkHistory";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

const Resume = () => {
  const [selectNav, setSelectNav] = useState("0");
  const selectNavFunc = (val: string) => {
    setSelectNav(val);
  };

  const showNavDetails = () => {
    switch (selectNav) {
      case "1":
        return <WorkHistory />;
      case "2":
        return <Skills />;
      case "3":
        return <Projects />;
      default:
        return <Education />;
    }
  };

  return (
    <div className="py-4" id="resume">
      <h1 className="text-center text-bold text-4xl text-white">Resume</h1>
      <p className="text-white text-center tracking-wider pt-3">
        My formal Bio Details
      </p>
      <p className="heading-underline"></p>
      <div className="flex-col mx-[30px] my-[30px] flex lg:flex-row mx-[40px] my-[50px] sm:gap-20">
        <nav className="resume-sidebar pe-[60px] p-3 ">
          <ul className="text-[24px] text-[#cbc8c8]">
            <li
              className={`flex gap-3 items-center py-3 w-[280px] cursor-pointer ${
                selectNav === "0" && "selectNav"
              }`}
              onClick={() => selectNavFunc("0")}
            >
              <HiAcademicCap />
              Education
            </li>
            <li
              className={`flex gap-3 items-center py-3 w-[280px] cursor-pointer ${
                selectNav === "1" && "selectNav"
              }`}
              onClick={() => selectNavFunc("1")}
            >
              <AiOutlineFieldTime /> Work History
            </li>
            <li
              className={`flex gap-3 items-center py-3 w-[280px] cursor-pointer ${
                selectNav === "2" && "selectNav"
              }`}
              onClick={() => selectNavFunc("2")}
            >
              <MdOutlineComputer /> Programming Skills
            </li>
            <li
              className={`flex gap-3 items-center py-3 w-[280px] cursor-pointer ${
                selectNav === "3" && "selectNav"
              }`}
              onClick={() => selectNavFunc("3")}
            >
              <GoGraph />
              Projects
            </li>
            <li
              className={`flex gap-3 items-center py-3 w-[280px] cursor-pointer ${
                selectNav === "4" && "selectNav"
              }`}
              onClick={() => selectNavFunc("4")}
            >
              <MdOutlineColorLens />
              Interests
            </li>
          </ul>
        </nav>
        <div className="py-[50px] sm:py-0 w-full">{showNavDetails()}</div>
      </div>
    </div>
  );
};
export default Resume;
