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
