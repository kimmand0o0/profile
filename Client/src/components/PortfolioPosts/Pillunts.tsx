import { useEffect, useRef, useState } from 'react';
import useInterval from 'util/useInterval';

import Tag from './Tag';

import github from '../../assets/icons/github.svg';

import titleImg from '../../assets/portfolio/pillnuts/title.png';
import awardImg from '../../assets/portfolio/pillnuts/award.jpeg';

const imageList = [
  { src: titleImg, alt: 'title' },
  { src: awardImg, alt: 'award' },
];
const TAGS = [
  '백엔드',
  'Node.js',
  'Express',
  'Axios',
  'MySql',
  'Sequelize',
  'AWS',
  'ECS',
  'EC2',
  'RAMDA',
];
const GITHUB = 'https://github.com/E-GaeMuYac/Pillnuts_BE.git';
const SINCE = '2022.12.30 - 2023.02.10';
const TITLE = 'Pillnuts : 약의 성분도 파헤쳐 보자';
const CONTENT =
  '- 식약처의 정보를 바탕으로 약의 성분을 그래프를 이용해 시각적으로 보여주는 사이트';
const PERSONNEL = '프론트엔드 3 | 백엔드 3 | 디자이너 1';
const WHAT_DID_I_DO = [
  'Axios를 사용하여 공공데이터를 가공하고 저장하는 과정에서 발생한 Timeout Error를 해결하기 위해, 효과적인 대응을 취한 경험이 있습니다. 에러가 발생한 페이지 번호를 추출하여 해당 페이지부터 다시 업데이트하는 방식으로 문제를 해결했습니다.',
  'Node-cron을 사용하여 데이터 업데이트를 스케줄링하는 과정에서 로컬 환경과 AWS 환경 간의 시간대 차이를 고려하여 코드를 수정한 경험이 있습니다. 로컬에서의 테스트와 AWS에서의 배포 사이에 시간대 차이로 인한 이슈를 해결하기 위해 UTC를 KST(Korea Standard Time)로 수정하는 작업을 수행했습니다.',
  'Passport를 활용하여 카카오, 네이버, 구글 등 다양한 소셜 로그인을 구현한 경험에서 백엔드 서버에서의 화면 멈춤 문제를 해결하기 위해 프론트 사이트로 redirect하여 query-string으로 유저 정보와 토큰을 전달하는 방식을 채택한 경험이 있습니다.',
];
const RETROSPECT = [
  'JWT를 사용하여 회원 인증을 구현하면서 토큰이 탈취된 경우에 대한 대비책을 고려한 경험이 있습니다. 토큰의 탈취를 방지하기 위해 블랙리스트를 활용하거나 주기적으로 secret-key를 변경하는 방법을 고려하였습니다. 종합적인 보안 전략을 수립하여 효과적으로 유저 인증을 관리하는 것이 중요하는 것을 깨달았습니다.',
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
        <div className="w-full h-full px-7 md:pl-14 md:pr-40">
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
            <div className="absolute z-10 top-20 md:right-32 animate-bounce">
              <button>
                <a href={GITHUB} target="_blank">
                  <img
                    src={github}
                    alt="githubIcon"
                    className="h-14 md:h-20 bg-white p-1.5 md:p-2 rounded-full shadow-xl border border-gray-50"
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
