import { useRecoilState } from 'recoil';

import { playState } from '../../recoil/basicAtoms';

import pauseButton from '../../assets/icons/pause.svg';
import playButton from '../../assets/icons/play.svg';

const AudioButton = () => {
  const [play, setPlay] = useRecoilState(playState);

  // 재생
  const start = () => {
    setPlay(true);
  };
  // 일시 정지
  const stop = () => {
    setPlay(false);
  };

  return (
    <>
      <div className="hover:scale-110 md:block hidden">
        {play ? (
          // 일시정지 버튼
          <button onClick={stop}>
            <img className="w-4 h-4" src={pauseButton} alt="pauseButton" />
          </button>
        ) : (
          // 재생 버튼
          <button onClick={start}>
            <img className="w-4 h-4" src={playButton} alt="playButton" />
          </button>
        )}
      </div>
    </>
  );
};

export default AudioButton;
