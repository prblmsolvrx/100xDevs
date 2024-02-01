import axios from "axios";
import { atom, selector } from "recoil";

export type Course = {
  id: number,
  slug: string,
  title: string,
  description: string,
  imageUrl: string,
  appxCourseId: number,
  discordRoleId: string,
  openToEveryone: boolean
}

const coursesSelector = selector({
  key: 'coursesSelector',
  get: async ({ get }) => {
    const response = await axios.get("/api/courses");
    return response.data.courses as Course[];
  }
});

export const coursesAtom = atom<Course[]>({
  key: "coursesAtom",
  default: coursesSelector
});

