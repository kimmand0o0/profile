import { atom } from 'recoil';

export const isPortfolioModalState = atom({
  key: 'isPortfolioModalState',
  default: false,
});

export const portfolioModalData = atom({
  key: 'portfolioModalData',
  default: {},
});
