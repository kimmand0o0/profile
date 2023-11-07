import { useLocation, useNavigate } from 'react-router';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import { userPathState } from '../../recoil/basicAtoms';

const Nav = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [path, setPath] = useRecoilState(userPathState);

  useEffect(() => {
    setPath(pathname);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return (
    <>
      <div className="w-full md:w-2/3 container mx-auto flex flex-wrap flex-row justify-end items-center text-slate-400 text-sm font-[GmarketSansMedium]">
        <button
          className={`${
            path === '/about' && 'text-gray-800'
          } hover:scale-105 pr-3`}
          onClick={() => navigate('/about')}
        >
          About Me
        </button>
        <button
          className={`${
            path === '/portfolio' && 'text-gray-800'
          } hover:scale-105 pr-3`}
          onClick={() => navigate('/portfolio')}
        >
          Portfolio
        </button>
        <button
          className={`${
            path === '/posts' && 'text-gray-800'
          } hover:scale-105 pr-3`}
          onClick={() => navigate('/posts')}
        >
          Posts
        </button>
        <button
          className={`${
            path === '/guestbook' && 'text-gray-800'
          } hover:scale-105 pr-3`}
          onClick={() => navigate('/guestbook')}
        >
          Guest Book
        </button>
      </div>
    </>
  );
};

export default Nav;
