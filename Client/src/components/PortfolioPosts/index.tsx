import { useRecoilValue } from 'recoil';

import Healthier from './Healthier';
import Pillnuts from './Pillunts';

import { portfolioStateAtom } from 'recoil/portfolioAtoms';

const PortfolioPost = () => {
  const portfolioState = useRecoilValue(portfolioStateAtom);

  return (
    <>
      <div className="w-full flex flex-row bg-gradient-to-b to-cyan-300 from-indigo-300">
        {portfolioState === 'healthier' && <Healthier />}
        {portfolioState === 'pillnuts' && <Pillnuts />}
      </div>
    </>
  );
};

export default PortfolioPost;
