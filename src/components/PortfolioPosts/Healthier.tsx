import Tag from './Tag';
import { useSetRecoilState } from 'recoil';

import { isPortfolioModalState } from 'recoil/portfolioAtoms';

import imgLink from '../../assets/portfolio/healthier/title.png';

const tags = [
  '부팀장',
  '프론트엔드',
  'React',
  'Styled-Components',
  'Axios',
  'AWS(S3)',
  'Verser',
];
const github = 'https://github.com/codestates-seb/seb45_main_031';
const since = '2023.08.22 - 2023.09.20';
const title = 'Healthier : 더 건강하게';
const content = '운동일지 & 습관형성 커뮤니티';
const demo = 'https://healthier31.vercel.app/';

const PortfolioPost = () => {
  const isModal = useSetRecoilState(isPortfolioModalState);

  const openPortfolioModal = () => {
    isModal(true);

    //모달에 들어갈 정보를 넣어준다.
  };

  return (
    <>
      <div className="m-3 hover:scale-105" onClick={() => openPortfolioModal()}>
        <div className="w-full h-fit rounded-3xl bg-gray-50 overflow-hidden">
          <div className="max-w-[450px] h-[200px] overflow-hidden">
            <img src={imgLink} alt="img" className="object-cover" />
          </div>
          <div className="p-3">
            <div className="flex flex-row flex-wrap">
              {tags.map((tag: string) => (
                <Tag tag={tag} />
              ))}
            </div>
            <p className="text-slate-500 text-sm pt-1">{since}</p>
            <p className="text-lg font-bold">{title}</p>
            <p>{content}</p>
            <div className="flex flex-row justify-end text-xs">
              <a href={github} className="pr-2 text-gray-500 hover:font-bold">
                github
              </a>
              {demo && (
                <>
                  <a href={demo} className="pr-2 text-gray-500 hover:font-bold">
                    demo
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioPost;
