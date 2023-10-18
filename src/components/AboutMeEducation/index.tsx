const AboutMeEducation = () => {
  return (
    <>
      <div className="w-full py-16 px-5 font-[GmarketSansMedium] text-slate-700 flex flex-col items-center border-b border-slate-300">
        <div>
          <p className="text-2xl ">- Education -</p>
        </div>
        <div className="w-full flex flex-col mx-8 my-4 p-4  border-l border-slate-100">
          <div className="p-2">
            <div className="w-full flex md:flex-row flex-col justify-between">
              <p className="font-bold text-slate-600">코드스테이츠 45기 수료</p>
              <p className="text-sm text-slate-400">2023.04 - 2023.10</p>
            </div>
            <p className="text-sm text-slate-600 pl-1">
              - 프론트엔드 React 과정
            </p>
          </div>
          <div className="p-2">
            <div className="w-full flex md:flex-row flex-col justify-between">
              <p className="font-bold text-slate-600">항해99 10기 수료</p>
              <p className="text-sm text-slate-400">2022.11 - 2023.02</p>
            </div>
            <p className="text-sm text-slate-600 pl-1">- 백엔드 Node 과정 </p>
          </div>
          <div className="p-2">
            <div className="w-full flex md:flex-row flex-col justify-between">
              <p className="font-bold text-slate-600">삼육대학교 중퇴</p>
              <p className="text-sm text-slate-400">2014.03 - 2015.12</p>
            </div>
            <p className="text-sm text-slate-600 pl-1">
              - 커뮤니케이션디자인학과
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMeEducation;
