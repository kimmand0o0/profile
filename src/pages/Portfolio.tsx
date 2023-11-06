import PortfolioModal from 'components/PortfolioModal';
import PortfolioPosts from 'components/PortfolioPosts';
import { useRecoilValue } from 'recoil';

import { isPortfolioModalState } from 'recoil/portfolioAtoms';

const Portfolio = () => {
  const isModal = useRecoilValue(isPortfolioModalState);

  return (
    <>
      <div className="w-full my-20 flex justify-center scrollbar-hide">
        {isModal && <PortfolioModal />}
        <div className="max-w-screen-md px-2 md:grid md:grid-cols-2">
          <PortfolioPosts />
        </div>
      </div>
    </>
  );
};

export default Portfolio;
