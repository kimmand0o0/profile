import { atom } from 'recoil';

export const guestbookAtom = atom({
  key: 'guestbookAtom',
  default: {
    total: 0,
    contents: [],
  },
});
