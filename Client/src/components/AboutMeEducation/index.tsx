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
            <div className="py-2">
              <p className="text-sm text-slate-600 pl-1">
                - 프론트엔드 React 과정
              </p>
              <p className="text-xs text-slate-600 pl-4">
                React.js를 사용하여 운동 루틴을 투두리스트로 기록하고 관리할 수
                있는 기능을 개발하였습니다. 사용자 친화적인 UI/UX를 고려하여
                프로젝트를 디자인하고 구현했습니다.
              </p>
            </div>
            <div className="py-2">
              <p className="text-sm text-slate-600 pl-1">
                - 멘토님과의 코드 리뷰 및 리팩토링을 통한 비즈니스 로직 개선
              </p>
              <p className="text-xs text-slate-600 pl-4">
                멘토님과의 코드 리뷰를 통해 코드의 가독성, 유지보수성, 성능 등에
                대한 피드백을 받아 비즈니스 로직에 대한 고민을 하고, 효율적이고
                안정적인 코드를 작성하는 방법에 대한 경험을 얻었습니다.
              </p>
              <p className="text-xs text-slate-600 pl-4">
                이를 기반으로 리팩토링을 진행하여 코드의 품질을 향상시키고
                지속적인 성능 개선과 사용자 경험 향상에 기여하며 개선점을
                찾아나갔습니다.
              </p>
            </div>
          </div>
          <div className="p-2">
            <div className="w-full flex md:flex-row flex-col justify-between">
              <p className="font-bold text-slate-600">항해99 10기 수료</p>
              <p className="text-sm text-slate-400">2022.11 - 2023.02</p>
            </div>
            <div className="py-2">
              <p className="text-sm text-slate-600 pl-1">- 백엔드 Node 과정</p>
              <p className="text-xs text-slate-600 pl-4">
                Node.js를 활용한 백엔드 개발과정을 수료하였으며, 메인
                프로젝트에서는 디자이너와 프론트엔드 팀과의 협업을 통해
                공공데이터를 수집하고 가공하여 약학 데이터를 시각적으로 보여주는
                프로젝트를 주도적으로 진행했습니다.
              </p>
            </div>
            <div className="py-2">
              <p className="text-sm text-slate-600 pl-1">
                - 프로젝트
                <span>
                  <span className="text-xs text-white bg-slate-500 px-2 py-0.5 mx-0.5 rounded-xl">
                    MVP 달성
                  </span>
                  <span className="text-xs text-white bg-slate-500 px-2 py-0.5 mx-0.5 rounded-xl">
                    최고의 프로젝트상
                  </span>
                  <span className="text-xs text-white bg-slate-500 px-2 py-0.5 mx-0.5 rounded-xl">
                    든든한 국밥상
                  </span>
                </span>
              </p>
              <p className="text-xs text-slate-600 pl-4">
                프로젝트에서 목표로 한 MVP를 100% 완수하여 우수한 성과를
                얻었습니다.
              </p>
              <p className="text-xs text-slate-600 pl-4">
                사용자들에게 편리하고 가치 있는 기능을 제공하는 성과가 높게
                평가되어 최고의 프로젝트상을 수상하였습니다.
              </p>
              <p className="text-xs text-slate-600 pl-4">
                팀원으로 신뢰받고 함께할 수 있는 협업과 소통 능력이 인정받아
                '든든한 국밥'상을 수상하였습니다.
              </p>
            </div>
          </div>
          <div className="p-2">
            <div className="w-full flex md:flex-row flex-col justify-between">
              <p className="font-bold text-slate-600">삼육대학교 중퇴</p>
              <p className="text-sm text-slate-400">2014.03 - 2015.12</p>
            </div>
            <div className="py-2">
              {' '}
              <p className="text-sm text-slate-600 pl-1">
                - 커뮤니케이션디자인학과
              </p>
              <p className="text-xs text-slate-600 pl-4">
                시각디자인과 소통을 결합한 커뮤니케이션디자인학과를 입학하여
                시각적, 공간적 표현에 대한 학습을 하였습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMeEducation;
