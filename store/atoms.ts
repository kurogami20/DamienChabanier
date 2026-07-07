import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const HomeAtom = atomWithStorage<boolean>("homeAtom", true);

export const TabAtom = atomWithStorage<boolean>("TabAtom", false);
