import { useRecoilState } from 'recoil';

import Modal from './Modal';

import { isBuyMeModalState } from 'recoil/atoms';

const BuyMeModal = () => {
  const [isModal, setIsModal] = useRecoilState(isBuyMeModalState);

  const handleModal = () => {
    setIsModal(!isModal);
  };

  return (
    <>
      {isModal && <Modal />}
      <button
        onClick={() => handleModal()}
        className="max-w-xs my-8 py-3 px-6 rounded-2xl bg-amber-200 text-xl text-gray-500 font-[NeoDunggeunmoPro-Regular] hover:scale-105"
      >
        Buy Me A Coffee ☕️
      </button>
    </>
  );
};

export default BuyMeModal;
