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
  '무한 슬라이드를 개발하는 도중 setInterval에서 발생한 의도치 않은 동작을 해결하기 위해 useInterval이라는 커스텀 Hook을 활용했습니다 예상치 못한 이슈를 효과적으로 다룰 수 있게 되었습니다',
  'Tistory API를 활용하여 블로그 게시글 목록을 불러오는 작업에서 서비스 URL을 제대로 이해하지 못해 일정한 어려움을 겪었습니다. 이 경험을 통해 공식 문서의 중요성을 다시 한번 깨달았습니다. 정확하고 명확한 문서를 통해 개발 프로세스에서 생길 수 있는 오류와 혼란을 최소화할 수 있다는 점을 깨달았습니다.',
  'Strapi와 같은 headless CMS를 활용하여 Guestbook을 구현한 경험을 쌓았습니다. Headless CMS를 사용함으로써 데이터의 관리와 프론트엔드의 독립성을 갖추면서도 효과적인 개발이 가능했습니다. Strapi의 사용을 통해 Guestbook을 구현함으로써 데이터베이스와의 상호작용, 사용자 입력 관리, 백엔드 구축 등 다양한 측면에서의 경험을 얻었습니다.',
  'Cloudtype을 이용하여 배포하였습니다. Strapi를 배포하는 과정에서 직접 배포가 되지 않아 Docker를 사용하여 애플리케이션과 그에 필요한 모든 종속성을 컨테이너로 패키징하여 배포 하였습니다.',
];
const RETROSPECT = [
  'Tailwind CSS를 활용하여 모바일 및 반응형 웹을 구현하여 개발 속도를 향상시키고 일관된 코드 작성이 가능했습니다. 더불어, 코드의 쉬운 유지 보수와 관리를 통해 Dark mode에 대한 리팩토링 작업을 계획 중에 있습니다.',
  '프로젝트를 처음부터 끝까지 완성하는 경험을 했습니다.',
  '이 프로젝트는 처음으로 솔로로 진행한 것이었기 때문에, 레퍼런스를 찾는 것부터 모든 의사결정까지 혼자서 하게 되었습니다. 초기에는 많은 도전과 불확실성이 있었지만, MVP를 완성하고 동료들과 친구들에게 검수를 받으며 다양한 의견을 수렴할 수 있었습니다. 이 경험을 통해 동료들과 함께 협업하는 경험이 프로젝트의 완성도를 향상시키는 데에 큰 역할을 한다는 것을 깨닫게 되었습니다. 한 마디로, 동료의 중요성을 다시 한번 강하게 느낄 수 있었습니다.',
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
