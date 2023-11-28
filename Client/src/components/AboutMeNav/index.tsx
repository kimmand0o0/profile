const AboutMeNav = (props: { setAboutMeState: any }) => {
  const { setAboutMeState } = props;

  const changeAboutMeState = (state: number) => {
    setAboutMeState(state);
  };

  return (
    <>
      <div className="h-full fixed right-0 hidden md:block">
        <div className="h-full flex flex-col justify-center items-end pr-5 font-[GmarketSansMedium] text-sm text-cyan-900">
          <button
            className="py-3 hover:text-cyan-400 tracking-wider"
            onClick={() => changeAboutMeState(0)}
          >
            Introduce
          </button>
          <button
            className="py-3 hover:text-cyan-400 tracking-wider"
            onClick={() => changeAboutMeState(2)}
          >
            Skills
          </button>
          <button
            className="py-3 hover:text-cyan-400 tracking-wider"
            onClick={() => changeAboutMeState(3)}
          >
            Education
          </button>
        </div>
      </div>
    </>
  );
};

export default AboutMeNav;
