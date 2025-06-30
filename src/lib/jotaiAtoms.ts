import { atomWithStorage } from 'jotai/utils';
import { atom } from 'jotai';
import type { INews } from '../models/News';

export const favoriteNewsAtom = atomWithStorage<INews[]>('favoriteNews', []);
export const selectedNewsAtom = atom<INews | null>(null);
