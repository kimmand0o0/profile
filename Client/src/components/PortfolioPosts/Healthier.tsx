import Tag from './Tag';

import github from '../../assets/icons/github.svg';

import titleImg from '../../assets/portfolio/healthier/title.png';
import loginImg from '../../assets/portfolio/healthier/login.gif';
import communityImg from '../../assets/portfolio/healthier/community.gif';
import { useEffect } from 'react';

const imageList = [
  { src: titleImg, alt: 'title' },
  { src: loginImg, alt: 'login' },
  { src: communityImg, alt: 'community' },
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
  return (
    <>
      <div className="w-full h-screen max-h-[calc(100%-1rem)] pt-32 pb-24 md:py-20 font-[GmarketSansMedium]">
        <div className="h-full px-7 md:px-12 md:pl-44">
          <div className="bg-white h-full rounded-2xl py-4 px-4 md:px-6 flex flex-col md:flex-row">
            <div className="md:hidden text-xl font-bold border-b-2 border-cyan-500 my-2">
              {TITLE}
            </div>
            <div className="md:hidden my-2">{CONTENT}</div>
            <div className="h-1/3 md:w-1/2 md:h-full flex items-center overflow-hidden">
              <div className="flex">
                {imageList.map((image, idx) => (
                  <img
                    key={idx}
                    src={image.src}
                    alt={image.alt}
                    className="w-auto h-auto object-contain"
                  />
                ))}
              </div>
            </div>
            <div className="h-2/3 md:h-full overflow-y-auto scrollbar-hide">
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
                    <li key={idx}>{text}</li>
                  ))}
                </div>
              </div>
              <div className="pb-7">
                <p className="font-bold">- Retrospect</p>
                <div>
                  {RETROSPECT.map((text: string, idx: number) => (
                    <li key={idx}>{text}</li>
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
