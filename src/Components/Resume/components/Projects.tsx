import React from "react";

const Projects = () => {
  return (
    <div className="flex-col w-full p-3 text-[#cbc8c8]">
      <div className="flex content-start">
        <div className="bg-[#661214] w-3 h-3 rounded-full me-[40px] mt-2"></div>
        <div className="flex-col">
          <p className="text-bolder text-2xl">Personal Portfolio Website</p>
        </div>
        <div className="ms-auto bg-[#661214] py-3 px-5 rounded-[20px] h-[50px]">
          2022-2023
        </div>
      </div>
      <div className=" ms-[54px] leading-6">
          <p className="text-[18px] underline decoration-2 mb-2 underline-[#661214]">
            Technology Used: React Js, TypeScript, Tailwind CSS
          </p>
          <p>
            A personal portfolio website to showcase all my details and projects
            at one place.
          </p>
      </div>
      
    </div>
  );
};

export default Projects;
