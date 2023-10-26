import { atom } from 'recoil';

export const playState = atom({
  key: 'playState',
  default: false,
});

export const userPathState = atom({
  key: 'userPath',
  default: '/about',
});

export const isBuyMeModalState = atom({
  key: 'isBuyMeModal',
  default: false,
});

export const tistoryAccessState = atom({
  key: 'tistoryAccessState',
  default: false,
});

export const tistoryTokenState = atom({
  key: 'tistoryTokenState',
  default: '',
});

export const postsState = atom({
  key: 'posts',
  default: [],
});

export const isPortfolioModalState = atom({
  key: 'isPortfolioModalState',
  default: false,
});

export const portfolioModalData = atom({
  key: 'portfolioModalData',
  default: {},
});
