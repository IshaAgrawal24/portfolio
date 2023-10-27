import { Link } from "react-scroll";
import "./about.css";
const AboutMe = () => {
  return (
    <div className="py-4" id="about">
      <h1 className="text-center text-bold text-4xl text-white">About Me</h1>
      <p className="text-white text-center tracking-wider pt-3">
        Why Choose Me?
      </p>
      <p className="heading-underline"></p>
      <div className="py-3 flex items-center justify-around mx-[40px] my-[50px] sm:gap-20">
        <div className="hidden lg:block about-img"></div>
        <div className="text-[#cbc8c8]">
          <p className="leading-6 py-2">
            The scope of my work is a large part of frontend which includes
            HTML, design, coding layouts, single page applications, responsive
            websites, and other work based on web development and javascript.{" "}
          </p>
          <p className="leading-6 py-2">
            I like to code things for web, and enjoy bringing ideas to life in
            the browser. I'm always open to adapt to work with team and work on
            new frontend skills and technology.
          </p>
          <p className="text-xl my-3 text-bold">Here are few Highlights:</p>
          <ul>
            <li className="flex items-center gap-2 py-1">
              <div className="bg-[#661214] w-2 h-2 rounded-full"></div>
              Interactive front-end as per the design
            </li>
            <li className="flex items-center gap-2 py-1">
              <div className="bg-[#661214] w-2 h-2 rounded-full"></div> Redux
              for State Management
            </li>
            <li className="flex items-center gap-2 py-1">
              <div className="bg-[#661214] w-2 h-2 rounded-full"></div> Agile
              Methodology: Scrum
            </li>
          </ul>
          <div className="flex-col sm:flex-row flex justify-center sm:justify-start gap-10 py-2 text-white mt-4 ">
           <Link to='contact' spy={true}
                smooth={true}
                offset={50}
                duration={500}>
           <button className="px-10 py-1 rounded-[30px] border-2 border-white">
              Hire Me
            </button>
           </Link>
            <Link to='resume' spy={true}
                smooth={true}
                offset={50}
                duration={500}>
            <button className="bg-[#661214] px-10 py-1 rounded-[30px]">
              Get Resume
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
