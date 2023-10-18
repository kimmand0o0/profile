import BuyMeModal from 'components/BuyMeModal';
import Typing from './Typing';

import me from '../../assets/images/me.jpg';

const Introduce = () => {
  return (
    <>
      <div className="pt-14 flex flex-col md:flex-row justify-between items-center">
        <div>
          <Typing />
          <BuyMeModal />
        </div>
        <img src={me} alt="me" className="w-2/5 rounded-full" />
      </div>
    </>
  );
};

export default Introduce;