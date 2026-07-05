import { create } from "zustand";

export const useAppStore = create((set) => ({
  language: "en",
  setLanguage: (lang) => set({ language: lang }),
}));
