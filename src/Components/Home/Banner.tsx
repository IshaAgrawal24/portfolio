import Typed from "react-typed";
import "./Home.css";
import { Link } from "react-scroll/modules";
const Banner = () => {
  return (
    <div className=" flex-col flex md:flex-row justify-around items-center w-full py-[90px] px-4">
      <div className="flex-col text-center mt-4 md:mt-0">
        <div className="icons"></div>
        <div className="text-white font-bold text-2xl mb-[30px]">
          Hello I'm,&nbsp; <span className="text-[#661214]">Isha Agrawal</span>
        </div>
        <div className="text-bold text-5xl mb-[30px] text-white">
          <Typed
            loop
            strings={[
              "React Developer 💻",
              "Enthusiastic Dev 😎",
              "Front-end Developer",
            ]}
            typeSpeed={90}
          />
        </div>
        <div className="text-white mb-[30px]">
          Quick learner, forward thinking and passionate about to learn new
          technologies
        </div>
        <div className="flex gap-10 justify-center text-white">
          <Link to='contact' spy={true}
                smooth={true}
                offset={50}
                duration={500}>
          <button className="px-10 py-2 rounded-[30px] border-2 border-white">
            Hire Me
          </button>
          </Link>
          <Link to='resume' spy={true}
                smooth={true}
                offset={50}
                duration={500}><button className="bg-[#661214] px-10 py-2 rounded-[30px]">
            Get Resume
          </button></Link>
          
        </div>
      </div>
      <div className=" order-first md:order-last profile-picture">
        <div className="profile-picture-bg"></div>
      </div>
    </div>
  );
};
export default Banner;
