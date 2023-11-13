import { useEffect, useRef, useState } from 'react';
import useInterval from 'util/useInterval';

import Tag from './Tag';

import github from '../../assets/icons/github.svg';

import titleImg from '../../assets/portfolio/healthier/title.png';
import signupImg from '../../assets/portfolio/healthier/sign up.gif';
import loginImg from '../../assets/portfolio/healthier/login.gif';
import oauthImg from '../../assets/portfolio/healthier/oauth.gif';
import todopageImg from '../../assets/portfolio/healthier/todopage.gif';
import todopageEditImg from '../../assets/portfolio/healthier/todopage_edit.gif';
import communityImg from '../../assets/portfolio/healthier/community.gif';
import communityEditImg from '../../assets/portfolio/healthier/community_edit.gif';
import scrapImg from '../../assets/portfolio/healthier/scrap.gif';
import mypageImg from '../../assets/portfolio/healthier/mypage.gif';
import mypageEditImg from '../../assets/portfolio/healthier/mypage_edit.gif';

const imageList = [
  { src: titleImg, alt: 'title' },
  { src: signupImg, alt: 'signup' },
  { src: loginImg, alt: 'login' },
  { src: oauthImg, alt: 'oauth' },
  { src: todopageImg, alt: 'todopage' },
  { src: todopageEditImg, alt: 'todopageEdit' },
  { src: communityImg, alt: 'community' },
  { src: communityEditImg, alt: 'communityEdit' },
  { src: scrapImg, alt: 'scrap' },
  { src: mypageImg, alt: 'mypage' },
  { src: mypageEditImg, alt: 'mypageEdit' },
];
const TAGS = [
  '부팀장',
  '프론트엔드',
  'React',
  'Styled-Components',
  'Axios',
  'AWS(S3)',
  'Verser',
];
const GITHUB = 'https://github.com/codestates-seb/seb45_main_031';
const SINCE = '2023.08.22 - 2023.09.20';
const TITLE = 'Healthier : 더 건강하게';
const CONTENT = '- 운동일지 & 습관형성 커뮤니티';
const PERSONNEL = '프론트엔드 3 | 백엔드 3';
const WHAT_DID_I_DO = [
  '프로젝트 완성을 목표로 빠르게 적용할 수 있으며, 사이드 이펙트가 적은 라이브러리를 찾아 사용하였습니다.',
  '백엔드와 프론트 동료들 사이에서 소통의 징검다리 역할을 하였습니다.',
];
const RETROSPECT = [
  '기획과 figma작업, API 협의, 코드작업, 배포까지 진행하며 정말 프로젝트의 전체를 이해할 수 있는 기회가 되었습니다.',
  '프로젝트 진행 중 리팩토링하면서 비즈니스 로직에 대해 고민해보고 꾸준히 개선점을 찾아가는 경험을 해볼 수 있었습니다.',
];

const PortfolioPost = () => {
  const slideRef = useRef<HTMLDivElement>(null);

  const [slideIndex, setSlideIndex] = useState(0);
  const [customInterval, setCustomInterval] = useState(2000);
  const copiedArr = [...imageList, imageList[0]];
  const COPIED_NUM = copiedArr.length;

  useInterval(
    () => setSlideIndex((slideIndex) => slideIndex + 1),
    customInterval,
  );

  useEffect(() => {
    if (slideIndex === COPIED_NUM) {
      setCustomInterval(2000);

      if (slideRef.current) {
        slideRef.current.style.transition = '';
      }

      setSlideIndex(0);

      setTimeout(() => {
        if (slideRef.current) {
          slideRef.current.style.transition = 'all 2000ms ease-in-out';
        }
      }, 500);
    } else {
      setCustomInterval(5000);
    }
  }, [slideIndex]);

  const setSlideIndexUp = () => {
    if (slideRef.current) {
      slideRef.current.style.transition = '';
    }

    setSlideIndex(slideIndex + 1);

    setTimeout(() => {
      if (slideRef.current) {
        slideRef.current.style.transition = 'all 2000ms ease-in-out';
      }
    }, 10000);
  };

  const setSlideIndexDown = () => {
    if (slideRef.current) {
      slideRef.current.style.transition = '';
    }

    setSlideIndex(slideIndex - 1);

    setTimeout(() => {
      if (slideRef.current) {
        slideRef.current.style.transition = 'all 2000ms ease-in-out';
      }
    }, 10000);
  };

  return (
    <>
      <div className="w-full h-screen max-h-[calc(100%-1rem)] pt-32 pb-24 md:py-20 font-[GmarketSansMedium]">
        <div className="w-full h-full px-7 md:px-12 md:pl-44">
          <div className="bg-white w-full h-full rounded-2xl py-4 px-4 md:px-6 flex flex-col md:flex-row">
            <div className="md:hidden text-xl font-bold border-b-2 border-cyan-500 my-2">
              {TITLE}
            </div>
            <div className="md:hidden my-2">{CONTENT}</div>
            <div className="flex justify-center z-30">
              <button
                className="hidden md:block text-2xl font-bold text-cyan-600 hover:scale-125 hover:text-cyan-400"
                onClick={() => setSlideIndexDown()}
              >
                {'<'}
              </button>
            </div>
            <div className="absolute w-[78vw] md:hidden top-72 z-30 flex justify-between text-2xl font-bold text-cyan-600">
              <button
                className="hover:scale-125 hover:text-cyan-400"
                onClick={() => setSlideIndexDown()}
              >
                {'<'}
              </button>
              <button
                className="hover:scale-125 hover:text-cyan-400"
                onClick={() => setSlideIndexUp()}
              >
                {'>'}
              </button>
            </div>
            <div className="h-1/3 md:w-1/2 md:h-full flex items-center overflow-hidden">
              <div
                className={`flex h-full w-[${80 * COPIED_NUM}vw] md:w-[${
                  30 * COPIED_NUM
                }vw]`}
                ref={slideRef}
                style={{
                  transition: 'all 2000ms ease-in-out',
                  transform: `translateX(${
                    -1 * ((100 / copiedArr.length) * slideIndex)
                  }%)`,
                }}
              >
                {copiedArr.map((image, idx) => (
                  <div className="w-[80vw] md:w-[30vw]">
                    <img
                      key={idx}
                      src={image.src}
                      alt={image.alt}
                      className="w-[80vw] md:w-[30vw] h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <button
                className="hidden md:block text-2xl font-bold text-cyan-600 hover:scale-125 hover:text-cyan-400 z-30"
                onClick={() => setSlideIndexDown()}
              >
                {'>'}
              </button>
            </div>
            <div className="md:w-2/3 h-2/3 md:h-full overflow-y-auto scrollbar-hide md:px-4 md:ml-14">
              <div className="hidden md:block text-xl font-bold border-b-2 border-cyan-500 my-2">
                {TITLE}
              </div>
              <div className="hidden md:block my-2">{CONTENT}</div>
              <div className="text-sm text-gray-600 mb-2">{SINCE}</div>
              <div className="pb-2 text-sm">{PERSONNEL}</div>
              <div className="w-full flex flex-row flex-wrap">
                {TAGS.map((tag, idx: number) => (
                  <Tag key={idx} tag={tag} />
                ))}
              </div>
              <div className="py-7">
                <p className="font-bold">- What did i do</p>
                <div>
                  {WHAT_DID_I_DO.map((text: string, idx: number) => (
                    <li key={idx} className="my-3">
                      {text}
                    </li>
                  ))}
                </div>
              </div>
              <div className="pb-7">
                <p className="font-bold">- Retrospect</p>
                <div>
                  {RETROSPECT.map((text: string, idx: number) => (
                    <li key={idx} className="my-3">
                      {text}
                    </li>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute z-10 bottom-20 right-4 animate-bounce">
              <button>
                <a href={GITHUB} target="_blank">
                  <img
                    src={github}
                    alt="githubIcon"
                    className="h-14 md:h-20 bg-white md:hover:bg-gray-300 p-1.5 md:p-2 rounded-full shadow-xl border border-gray-50"
                  />
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioPost;
