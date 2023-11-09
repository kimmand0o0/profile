const PortfolioList = () => {
  return (
    <>
      <div className="md:w-1/5 md:h-screen max-h-[calc(100%-1rem)] fixed top-20 md:top-0 md:left-0 font-[GmarketSansMedium]">
        <div className="px-4 pt-1 h-full flex md:flex-col justify-center items-start text-xs">
          <button className="py-2 md:px-0 px-2 text-white">
            <p>◦ H e a l t h i e r</p>
          </button>
          <button className="py-2 md:px-0 px-2 text-white">
            <p>◦ P i l l n u t s</p>
          </button>
          <button className="py-2 md:px-0 px-2 text-white">
            <p>◦ P r o f i l e</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default PortfolioList;
