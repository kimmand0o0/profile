import { useRecoilState } from 'recoil';
import { portfolioStateAtom } from 'recoil/portfolioAtoms';

const PortfolioList = () => {
  const [portfolioState, setPortfolioState] =
    useRecoilState(portfolioStateAtom);

  const changePortfiloState = (text: string) => {
    setPortfolioState(text);
  };

  return (
    <>
      <div className="md:h-screen max-h-[calc(100%-1rem)] fixed top-20 md:top-0 md:right-0 md:pr-4 font-[GmarketSansMedium]">
        <div className="px-4 pt-1 h-full flex md:flex-col justify-center items-end text-xs">
          <button
            className="py-2 md:px-0 px-2 text-white"
            onClick={() => changePortfiloState('profile')}
          >
            <p
              className={`${
                portfolioState === 'profile'
                  ? 'font-bold text-cyan-900'
                  : 'none'
              }`}
            >
              P r o f i l e ◦
            </p>
          </button>

          <button
            className="py-2 md:px-0 px-2 text-white"
            onClick={() => changePortfiloState('pillnuts')}
          >
            <p
              className={`${
                portfolioState === 'pillnuts'
                  ? 'font-bold text-cyan-900'
                  : 'none'
              }`}
            >
              P i l l n u t s ◦
            </p>
          </button>
          <button
            className="py-2 md:px-0 px-2 text-white"
            onClick={() => changePortfiloState('healthier')}
          >
            <p
              className={`${
                portfolioState === 'healthier'
                  ? 'font-bold text-cyan-900'
                  : 'none'
              }`}
            >
              H e a l t h i e r ◦
            </p>
          </button>
        </div>
      </div>
    </>
  );
};

export default PortfolioList;
