import { useRecoilValue } from 'recoil';
import { useEffect, useRef } from 'react';

import myAudio from '../../assets/musics/myAudio.mp3';

import { playState } from '../../recoil/basicAtoms';

function AudioPlayer() {
  const myRef = useRef<HTMLAudioElement>(null);
  const play = useRecoilValue(playState);

  useEffect(() => {
    if (!myRef.current) return;

    if (play) {
      myRef.current.play();
      myRef.current.volume = 0.03;
    } else myRef.current.pause();
  }, [play]);

  return (
    <>
      <div className="fixed -top-32">
        <audio ref={myRef} src={myAudio} controls loop></audio>
      </div>
    </>
  );
}

export default AudioPlayer;
