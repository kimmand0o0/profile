import Typing from './Typing';

import me from '../../assets/images/me.webp';

const Introduce = () => {
  return (
    <>
      <div className="w-full pt-14 px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="w-full flex flex-col">
          <Typing />
        </div>
        <img src={me} alt="me" className="w-1/4 mr-3 hidden md:block" />
      </div>
    </>
  );
};

export default Introduce;
