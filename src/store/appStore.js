import { create } from "zustand";

export const useAppStore = create((set) => ({
  language: "ta",
  setLanguage: (lang) => set({ language: lang }),
}));
