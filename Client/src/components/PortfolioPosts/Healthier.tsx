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
  '백엔드와 프론트엔드 동료들 간의 원활한 소통을 통해 팀 내의 협력 관계를 강화하고, 프로젝트의 품질과 효율성을 높일 수 있었습니다.',
  '유효성 사전 협의 : 작업에 들어가기 전에 사전에 유효성을 함께 협의함으로써 코드 수정이 필요한 경우를 최소화했습니다. 이는 효율적인 작업 진행과 품질 유지에 기여했습니다.',
  'Oauth 경험을 통한 사전 상의 : Oauth 경험을 바탕으로 테스트 이메일 등록과 같은 예상되는 문제와 작업 방식에 대해 사전에 상의하여 잠재적인 문제에 대한 대비책을 마련하고 효율적인 작업을 가능하도록 했습니다.',
  '네트워크 비용 및 랜더링 시간 예상 : 일부 기능에서 두 가지 이상의 API 요청이 필요한 상황에서, 불필요한 호출로 인한 네트워크 비용과 랜더링 시간이 증가할 것을 예상하고, 이를 최소화하기 위해 한 API로 변경하는 것으로 의사결정 했습니다.',
  'JWT 토큰을 활용한 의사결정 : JWT 토큰을 이용한 인증과정에서 refresh-token을 활용하여 access-token을 재발급하는 방법으로 의사결정했습니다. 이를 통해 보안적인 측면에서 유용하게 사용되었고, 유저 경험을 개선하는 데에 기여했습니다.',
  '프로젝트를 빠르게 적용하면서도 사이드 이펙트가 적은 라이브러리를 선택하여 사용한 경험을 가지고 있습니다. 다양한 라이브러리를  선택함으로써 프로젝트 개발 속도를 높이고, 적은 사이드 이펙트로 원활한 기능 구현을 이끌어냈습니다.',
  'emoji-picker-react : 할 일 완료 이모지를 구현하기 위해 활용했습니다. 빠르게 이모지 선택 기능을 적용할 수 있었고, 라이브러리의 경량성으로 인해 프로젝트에 부가적인 부담을 주지 않았습니다.',
  'react-calendar : 할 일 등록 및 페이지 이동을 위해 도입했습니다. 이를 통해 간편하게 달력 기능을 구현하고, 프로젝트의 사용성을 높였습니다.',
  'react-quill과 html-react-parser : 커뮤니티 기능을 구현하기 위해 react-quill과 html-react-parser를 선택했습니다. Rich Text Editor와 HTML 파싱 기능을 쉽게 적용할 수 있어 프로젝트의 다양한 기능을 효과적으로 지원했습니다.',
  'react-intersection-observer : 무한 스크롤 구현에 활용했습니다. 이를 통해 페이지의 일부분이 화면에 나타날 때 필요한 데이터를 동적으로 로드하여 사용자 경험을 향상시켰습니다.',
];
const RETROSPECT = [
  '프로젝트를 기획부터 Figma 작업, API 협의, 코드 작업, 배포까지 진행함으로써 프로젝트의 전체적인 흐름을 이해할 수 있는 소중한 기회를 가졌습니다. 이 과정에서 다양한 역할을 수행하면서 전체 프로세스를 체험하고 관리하는 데에 중요한 스킬을 배웠습니다.',
  '리팩토링을 통해 비즈니스 로직에 대해 심도 있게 고민하고 꾸준히 개선점을 찾아가는 경험을 쌓았습니다. 코드를 정리하고 효율적으로 개선함으로써 유지보수성을 높이고 성능을 향상시키는 데에 주력했습니다. 이는 더 나은 소프트웨어를 만들기 위해 지속적으로 학습하고 발전하는 태도를 기를 수 있도록 도왔습니다.',
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

    setCustomInterval(10000);
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

    setCustomInterval(10000);
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
