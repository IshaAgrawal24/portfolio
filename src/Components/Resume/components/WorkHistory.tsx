const WorkHistory = () => {
  return (
    <div className="flex-col w-full px-3 pt-5 text-[#cbc8c8]">
      <div>
        <div className="flex content-start">
          <div className="bg-[#661214] w-3 h-3 rounded-full me-[50px] mt-2"></div>
          <div className="flex-col text-[#cbc8c8]">
            <p className="text-bolder text-xl">Cedcoss Technologies</p>
          </div>
          <div className="ms-auto bg-[#661214] py-3 px-5 rounded-[20px] h-[50px]">
            2022-Present
          </div>
        </div>

        <div className="mt-5 ms-[54px] leading-6">
          <p className="text-bold mb-3 text-[18px]">Front-end Developer</p>
          <p>
            1. Developed new user-facing features using React.js and related
            frameworks{" "}
          </p>
          <p>
            2. Built reusable components and front-end libraries for future use.
          </p>
          <p> 3. Translated designs and wireframes into high-quality code.</p>
          <p>
            {" "}
            4. Identified and fixed bugs, as well as addressed performance
            issues.
          </p>
        </div>
      </div>
    </div>
  );
};
export default WorkHistory;
