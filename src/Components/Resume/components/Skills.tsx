import react from "react";
import "./skills.css";
const Skills = () => {
  return (
    <div className="w-full flex content-between">
      <div className="w-full">
        <ul>
          <li className="py-3">
            <div className="flex gap-3">
              <div className="bg-[#661214] w-3 h-3 rounded-full mt-2"></div>
              <div className="w-full">
                <h3 className="text-white text-bold mb-2">HTML</h3>
                <span className="bar">
                  <span className="html"></span>
                </span>
              </div>
            </div>
          </li>

          <li className="py-3">
            <div className="flex gap-3">
              <div className="bg-[#661214] w-3 h-3 rounded-full mt-2"></div>
              <div className="w-full">
                <h3 className="text-white text-bold mb-2">CSS</h3>
                <span className="bar">
                  <span className="css"></span>
                </span>
              </div>
            </div>
          </li>

          <li className="py-3">
            <div className="flex gap-3">
              <div className="bg-[#661214] w-3 h-3 rounded-full mt-2"></div>
              <div className="w-full">
                <h3 className="text-white text-bold mb-2">JavaScript</h3>
                <span className="bar">
                  <span className="javascript"></span>
                </span>
              </div>
            </div>
          </li>

          <li className="py-3">
            <div className="flex gap-3">
              <div className="bg-[#661214] w-3 h-3 rounded-full mt-2"></div>
              <div className="w-full">
                <h3 className="text-white text-bold mb-2">ReactJS</h3>
                <span className="bar">
                  <span className="react"></span>
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="w-full">
        <ul className="w-full">
          <li className="py-3">
            <div className="flex gap-3">
              <div className="bg-[#661214] w-3 h-3 rounded-full mt-2"></div>
              <div className="w-full">
                <h3 className="text-white text-bold mb-2">TypeScript</h3>
                <span className="bar">
                  <span className="typescript"></span>
                </span>
              </div>
            </div>
          </li>

          <li className="py-3">
            <div className="flex gap-3">
              <div className="bg-[#661214] w-3 h-3 rounded-full mt-2"></div>
              <div className="w-full">
                <h3 className="text-white text-bold mb-2">NextJS</h3>
                <span className="bar">
                  <span className="next"></span>
                </span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Skills;
