import { useRef } from 'react';
import { useSetRecoilState } from 'recoil';

import { isPortfolioModalState } from 'recoil/atoms';
import Gallery from './Gallery';
import Title from './Title';

const PortfolioModal = () => {
  const outSection = useRef(null);
  const setIsModal = useSetRecoilState(isPortfolioModalState);

  return (
    <>
      {/* 백그라운드 */}
      <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity overflow-hidden" />
      <div
        className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-auto overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
        ref={outSection}
        onClick={(e) => {
          if (outSection.current === e.target) {
            setIsModal(false);
          }
        }}
      >
        <div className="relative w-full m-auto pt-12 max-w-2xl max-h-full">
          <div className="relative bg-white rounded-lg shadow">
            <Gallery />
            <Title />
            <div className="p-6 space-y-6">
              <p className="text-base leading-relaxed text-gray-500">
                With less than a month to go before the European Union enacts
                new consumer privacy laws for its citizens, companies around the
                world are updating their terms of service agreements to comply.
              </p>
              <p className="text-base leading-relaxed text-gray-500">
                The European Union’s General Data Protection Regulation
                (G.D.P.R.) goes into effect on May 25 and is meant to ensure a
                common set of data rights in the European Union. It requires
                organizations to notify users as soon as possible of high-risk
                data breaches that could personally affect them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioModal;
