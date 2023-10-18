import { useLocation, useNavigate } from 'react-router-dom';

import AudioButton from 'components/AudioButton';
import Nav from './Nav';

import logo from '../../assets/images/logo192.png';

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <>
      <header className="w-screen fixed inset-x-0 top-0 z-50 left-0 bg-white text-gray-700 body-font">
        <div className="max-w-screen-md container mx-auto flex px-5 py-2 flex-row justify-between items-center">
          <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <button
              onClick={() => {
                if (pathname === '/') {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                  navigate('/');
                }
              }}
            >
              <div className="flex flex-row ml-3 text-2xl text-gray-700 font-[NeoDunggeunmoPro-Regular]">
                <img src={logo} alt="logo" className="w-7 h-7 mr-2" />
                <p>Kim-Haeran</p>
              </div>
            </button>
          </div>
          <Nav />
          <AudioButton />
        </div>
      </header>
    </>
  );
};

export default Header;
