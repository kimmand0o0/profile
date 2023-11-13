import { useEffect, useRef, useState } from 'react';
import useInterval from 'util/useInterval';

import Tag from './Tag';

import github from '../../assets/icons/github.svg';

import mainImg from '../../assets/portfolio/profile/main.gif';
import aboutMeImg from '../../assets/portfolio/profile/aboutMe.gif';
import footerImg from '../../assets/portfolio/profile/footer.gif';
import postsImg from '../../assets/portfolio/profile/posts.gif';
import portfolioImg from '../../assets/portfolio/profile/portfolio.gif';
import guestbookImg from '../../assets/portfolio/profile/guestbook.gif';
import publishImg from '../../assets/portfolio/profile/publish.png';

const imageList = [
  { src: mainImg, alt: 'main' },
  { src: aboutMeImg, alt: 'aboutMe' },
  { src: footerImg, alt: 'footer' },
  { src: postsImg, alt: 'posts' },
  { src: portfolioImg, alt: 'portfolio' },
  { src: guestbookImg, alt: 'guestbook' },
  { src: publishImg, alt: 'publish' },
];
const TAGS = [
  '개인프로젝트',
  'React',
  'Tailwind-css',
  'Tistory Open Api',
  'Strapi',
  'Axios',
  'Cloudtype',
];
const GITHUB = 'https://github.com/kimmand0o0/profile';
const SINCE = '2023.10.01 - 2023.11.13';
const TITLE = 'Profile : 김혜란 블로그';
const CONTENT = '- 저를 소개합니다.';
const PERSONNEL = '개인 프로젝트';
const WHAT_DID_I_DO = [
  '무한 슬라이드를 만드는 중 setInterval에서 의도하지 않은 동작이 발생하였습니다. useInterval이라는 커스텀 Hook을 사용하여 해결하였습니다.',
  'Tistory Api를 이용하여 블로그 게시글 목록을 불러왔습니다. 연결하는 과정에서 서비스 URL을 잘못 이해하여 난항을 겪기도 하였습니다. 공식 문서의 중요성을 다시 한번 깨닫는 계기가 되었습니다.',
  'Strapi를 이용하여 Guestbook을 구현하였습니다.',
  'Cloudtype을 이용하여 배포하였습니다. Strapi를 배포하는 과정에서 직접 배포가 되지 않아 Docker를 이용하여 배포를 하였습니다.',
];
const RETROSPECT = [
  '한 프로젝트를 처음부터 끝까지 완성하는 경험을 할 수 있었습니다.',
  'Tailwind를 사용하여 모바일과 반응형 웹을 구현하여 빠른 개발과 일관성 있는 코드 작업이 가능했습니다. 또 쉬운 유지 관리로 Dark mode 리팩토링을 진행 할 예정입니다.',
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
