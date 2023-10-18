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

export const tstoryAccessToken = atom({
  key: 'tstoryAccessToken',
  default: false,
});

export const postsState = atom({
  key: 'posts',
  default: [],
});

export const isPortfolioModalState = atom({
  key: 'isPortfolioModalState',
  default: 'false',
});

export const portfolioModalData = atom({
  key: 'portfolioModalData',
  default: {},
});
