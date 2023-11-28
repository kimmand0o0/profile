const AboutMeIntroduction = () => {
  return (
    <>
      <div className="pt-12 pb-10 px-4 border-b border-slate-300 flex flex-col text-slate-800 font-[GmarketSansMedium] ">
        <div className="py-2">
          <p className="m-1">✔️ 문제 해결과 긍정적인 태도</p>
          <p className="m-1 text-sm">
            어떤 문제도 긍정적으로 받아들이고, 그에 대한 최적의 해결책을 찾기
            위해 함께 노력하여 프로젝트가 종료된 후
            <span className="bg-yellow-200 pt-0.5 px-1.5 rounded-md">
              팀을 같이 하고싶은 동기 1위 '든든한 국밥상'을 수상
            </span>
            하였습니다.
          </p>
        </div>
        <div className="py-2">
          <p className="m-1">✔️ 스트레스 관리 및 프로젝트 완주</p>
          <p className="m-1 text-sm">
            프로젝트를 완주하기 위해 스트레스와 컨디션을 관리하여
            <span className="bg-yellow-200 pt-0.5 px-1.5 rounded-md">
              세번의 프로젝트의 MVP를 100% 완성
            </span>
            하고, Advanced를 도전하였습니다.
          </p>
        </div>
        <div className="py-2">
          <p className="m-1">✔️ Git Convention 준수와 협업</p>
          <p className="m-1 text-sm">
            Pull requests 리뷰를 통해 비즈니스 로직에 대하여 고민 하고, Git
            Convention을 엄수하여 원활한 협업과 효율적인 코드 관리 경험이
            있습니다.
          </p>
          <p className="m-1 text-sm">
            또, TypeScript를 공부하여 명시적인 코드 작성에도 신경을 쓰고
            있습니다.
          </p>
        </div>
      </div>
    </>
  );
};
export default AboutMeIntroduction;
