import { atom } from "recoil";

export const countAtom = atom({
    key: "countAtom",
    default: 0 //0-zero because counter variables intial value is stored
});
