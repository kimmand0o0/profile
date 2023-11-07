import { useRef } from 'react';
import { useSetRecoilState } from 'recoil';

import { isBuyMeModalState } from 'recoil/basicAtoms';

import kakaoTitle from '../../assets/images/kakaoQR_title.png';
import kakaoQR from '../../assets/images/kakaoQR.png';
import tossTitle from '../../assets/images/tossLogo.png';
import tossQR from '../../assets/images/tossQR.png';

const Modal = () => {
  const outSection = useRef(null);
  const setIsModal = useSetRecoilState(isBuyMeModalState);

  return (
    <>
      <div
        ref={outSection}
        onClick={(e) => {
          if (outSection.current === e.target) {
            setIsModal(false);
          }
        }}
        className="fixed inset-0 bg-black bg-opacity-75 transition-opacity"
      />
      <div className="fixed md:left-1/3 flex flex-col justify-center items-center p-10 rounded-2xl bg-white z-20 font-[Orbit-Regular]">
        <p className="mb-2 font-bold text-xl">☕️ 혜란이에게 커피사주기 ☕️</p>
        <div className="text-sm">
          <div className="my-2">
            <p>1. 카카오뱅크</p>
            <p>안심계좌번호 7979-66-90129</p>
          </div>
          <div>
            <p>2. QR 송금</p>
            <div className="flex flex-row justify-center items-end">
              <div className="mr-4">
                <img src={kakaoTitle} alt="kakaoTitle" className="h-5" />
                <img src={kakaoQR} alt="kakaoQR" className="w-28" />
              </div>
              <div className="ml-4">
                <img src={tossTitle} alt="kakaoTitle" className="w-10 mb-1" />
                <img src={tossQR} alt="kakaoQR" className="w-28" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
