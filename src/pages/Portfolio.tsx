import PortfolioModal from 'components/PortfolioModal';
import PortfolioPost from 'components/PortfolioPost';
import { useRecoilValue } from 'recoil';

import { isPortfolioModalState } from 'recoil/atoms';

const Portfolio = () => {
  const isModal = useRecoilValue(isPortfolioModalState);

  return (
    <>
      <div className="w-full my-20 flex justify-center scrollbar-hide">
        {isModal && <PortfolioModal />}
        <div className="max-w-screen-md px-2 md:grid md:grid-cols-2">
          <PortfolioPost />
          <PortfolioPost />
          <PortfolioPost />
          <PortfolioPost />
          <PortfolioPost />
        </div>
      </div>
    </>
  );
};

export default Portfolio;
