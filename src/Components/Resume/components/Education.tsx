const Education = () => {
  return (
    <div className="flex-col w-full py-3 text-[#cbc8c8]">
      {/* MCA  */}
      <div className="flex items-center mb-5">
        <div className="bg-[#661214] w-3 h-3 rounded-full me-[30px] md: me-[70px]"></div>
        <div className="flex-col text-[#cbc8c8]">
            <p className="text-bold text-xl">HarCourt Butler Technical University</p>
            <p>Master of Computer Application</p>
        </div>  
        <div className="ms-auto bg-[#661214] py-2 px-4 rounded-[20px]">2020-2022</div>  
      </div>
       {/* BCA  */}
       <div className="flex items-center mb-5">
        <div className="bg-[#661214] w-3 h-3 rounded-full me-[30px] md: me-[70px]"></div>
        <div className="flex-col">
            <p className="text-bold text-xl">Dr. Virendra Swaroop Inst. of Computer Studies</p>
            <p>Bachelor of Computer Application</p>
        </div>  
        <div className="ms-auto bg-[#661214] py-2 px-4 rounded-[20px]">2017-2020</div>  
      </div>
       {/* 12th  */}
       <div className="flex items-center mb-5">
        <div className="bg-[#661214] w-3 h-3 rounded-full me-[30px] md: me-[70px]"></div>
        <div className="flex-col">
            <p className="text-bold text-xl">Shivaji Inter College</p>
            <p>Intermediate</p>
        </div>  
        <div className="ms-auto bg-[#661214] py-2 px-4 rounded-[20px]">2016-2017</div>  
      </div>
       {/* 10th  */}
       <div className="flex items-center mb-5">
        <div className="bg-[#661214] w-3 h-3 rounded-full me-[30px] md: me-[70px]"></div>
        <div className="flex-col">
            <p className="text-bold text-xl">PSVM</p>
            <p>High School</p>
        </div>  
        <div className="ms-auto bg-[#661214] py-2 px-4 rounded-[20px]">2014-2015</div>  
      </div>
    </div>
  );
};
export default Education;
