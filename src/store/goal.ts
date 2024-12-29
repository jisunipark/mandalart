import { create } from "zustand";

interface GoalStore {
  coreGoal: string;
  setCoreGoal: (newCore: string) => void;
}

export const useGoalStore = create<GoalStore>((set) => ({
  coreGoal: "",
  setCoreGoal: (newCore: string) => set(() => ({ coreGoal: newCore })),
}));
